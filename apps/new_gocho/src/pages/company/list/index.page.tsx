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
import { FilterType } from "./type";
import { cssObj } from "./style";
import { filterOption } from "./constants";

const CompanyList: NextPage = () => {
  const [title, setTitle] = useState<string>("이름 순");
  const [currentFilter, setCurrentFilter] = useState<FilterType>("name");

  const { query } = useRouter();
  const category = query.category as string | undefined;

  const currentPageNumber = isQueryString(query.page) ? Number(query.page) : 1;

  const { data: companyDataObj } = useCompanyArr({
    order: currentFilter,
    page: currentPageNumber,
    size: 15,
    industry: category,
  });

  return (
    <Layout>
      <div css={cssObj.titleContainer}>
        {category ? <HeaderTitle title={category} /> : <HeaderTitle title="기업리스트" />}
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
              closeAfterClickEvent: true,
              options: filterOption.map(({ content, filter }) => ({
                focused: title === content,
                content: <p>{content}</p>,
                onClick: () => {
                  setTitle(content);
                  setCurrentFilter(filter);
                },
              })),
            }}
          />
        </div>
      </div>
      <div css={cssObj.companyList}>
        {companyDataObj?.companyDataArr.map(({ id, industry, size, name, logoUrl, isBookmark }) => (
          <CompanyRow
            key={id}
            id={id}
            size={size}
            logo={logoUrl || ""}
            name={name}
            industry={industry}
            border
            bookmark={{ state: isBookmark }}
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
