import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { DropDown, HiddenH1 } from "shared-ui/deeple-ds";

import { CompanyRow, Pagination } from "@/components";
import { Layout } from "@/components/Layout";
import { companyListFunnelEvent } from "@/ga/company";
import { useCompanyArr } from "@/apis/company";
import { isQueryString } from "@/utils";

import { HeaderTitle } from "../component/HeaderTitle";
import { categoryArr } from "../part/CategoryPart/constant";
import { OrderType, IndustryRouteType } from "./type";
import { cssObj } from "./style";
import { PageHead } from "./pageHead";
import { filterOption } from "./constant";

const CompanyList: NextPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("이름 순");
  const [currentCategory, setCurrentCategory] = useState<IndustryRouteType>(router.query.category as IndustryRouteType);
  const [currentOrder, setCurrentOrder] = useState<OrderType>("name");

  const currentPageNumber = isQueryString(router.query.page) ? Number(router.query.page) : 1;

  const { data: companyDataObj } = useCompanyArr({
    order: currentOrder,
    page: currentPageNumber,
    size: 15,
    industry: String(router.query.category),
  });

  useEffect(() => {
    companyListFunnelEvent();
  }, []);

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ query: { category: "전체기업" } });
    } else if (router.isReady) {
      setCurrentCategory(router.query.category as IndustryRouteType);
    }
  }, [router]);

  return (
    <Layout>
      <PageHead />
      <HiddenH1 title="고초대졸닷컴 | 생산직 기업 정보의 모든 것" />

      <div css={cssObj.titleContainer}>
        <DropDown
          customTitle={
            <div css={cssObj.titleFilterBox}>
              <HeaderTitle title={currentCategory} />
              <FiChevronDown css={cssObj.titleFilterIcon} />
            </div>
          }
          menu={{
            width: 180,
            options: categoryArr.map(({ categoryText }) => ({
              focused: currentCategory === categoryText,
              content: categoryText,
              onClick: () => {
                setCurrentCategory(categoryText);
                router.replace({ query: { category: categoryText } });
              },
            })),
          }}
          menuConfig={{
            closeAfterClickEvent: true,
            direction: "top-left",
          }}
        />

        <div css={cssObj.filterBox}>
          <DropDown
            title={title}
            customTitle={
              <div css={cssObj.filterBox}>
                <p css={cssObj.filterText}>{title}</p>
                <p>
                  <FiChevronDown css={cssObj.filterIcon} />
                </p>
              </div>
            }
            menu={{
              width: 180,
              options: filterOption.map(({ content, order }) => ({
                content,
                focused: title === content,
                onClick: () => {
                  setTitle(content);
                  setCurrentOrder(order);
                },
              })),
            }}
            menuConfig={{
              closeAfterClickEvent: true,
            }}
          />
        </div>
      </div>
      <div css={cssObj.companyList}>
        {companyDataObj?.companyDataArr.map(({ id, industry, size, name, logoUrl, isBookmark }) => (
          <CompanyRow
            key={id}
            company={{ id, name, size, logo: logoUrl || "", industry, bookmark: { state: isBookmark } }}
          />
        ))}
      </div>
      <div css={cssObj.paginationBox}>
        <Pagination totalPage={companyDataObj?.pageResult.totalPages || 0} />
      </div>
    </Layout>
  );
};

export default CompanyList;
