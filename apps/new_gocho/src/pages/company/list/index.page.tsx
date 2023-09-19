import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { DropDown } from "shared-ui/deeple-ds";

import { CompanyRow, Pagination } from "@/components";
import { Layout } from "@/components/Layout";
import { useCompanyArr } from "@/apis/company";
import { isQueryString } from "@/utils";

import { HeaderTitle } from "../component/HeaderTitle";
import { FilterType, IndustryRouteType } from "./type";
import { cssObj } from "./style";
import { filterOption } from "./constants";
import { categoryArr } from "../part/CategoryPart/constant";

const CompanyList: NextPage = () => {
  const [title, setTitle] = useState<string>("이름 순");
  const [currentFilter, setCurrentFilter] = useState<FilterType>("name");

  const { query } = useRouter();

  const [currentCategory, setCurrentCategory] = useState<IndustryRouteType>(query.category as IndustryRouteType);

  const currentPageNumber = isQueryString(query.page) ? Number(query.page) : 1;

  const { data: companyDataObj } = useCompanyArr({
    order: currentFilter,
    page: currentPageNumber,
    size: 15,
    industry: currentCategory,
  });

  return (
    <Layout>
      <div css={cssObj.titleContainer}>
        <DropDown
          customTitle={
            <div css={cssObj.titleFilterBox}>
              {currentCategory ? <HeaderTitle title={currentCategory} /> : <HeaderTitle title="전체기업" />}
              <FiChevronDown css={cssObj.titleFilterIcon} />
            </div>
          }
          isRightDirection={false}
          menu={{
            width: 180,
            options: categoryArr.map(({ categoryText }) => ({
              focused: currentCategory === categoryText,
              content: categoryText,
              onClick: () => {
                setCurrentCategory(categoryText);
              },
            })),
          }}
          menuConfig={{
            closeAfterClickEvent: true,
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
              options: filterOption.map(({ content, filter }) => ({
                content,
                focused: title === content,
                onClick: () => {
                  setTitle(content);
                  setCurrentFilter(filter);
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
