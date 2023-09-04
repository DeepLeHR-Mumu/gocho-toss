import { NextPage } from "next";
import { useState } from "react";

import { useRouter } from "next/router";

import { Layout } from "@/components/Layout";
import { CompanyList } from "../components/CompanyList";
import { CompanyListHeader } from "./components/CompanyListHeader";

import { useCompanyArr } from "@/apis/company";
import { isQueryString } from "@/utils";
import { FilterType } from "./type";
import { CompanyListFooter } from "./components/CompanyListFooter";

const CompanyListPage: NextPage = () => {
  const { query } = useRouter();

  const category = query.category as string | undefined;

  const [filter, setFilter] = useState<FilterType>("name");

  const filterOption = [
    {
      key: 1,
      content: "이름 순",
      filter: "name",
      setState: () => {
        setFilter("name");
      },
    },
    {
      key: 2,
      content: "팔로워 많은 순",
      filter: "popular",
      setState: () => {
        setFilter("popular");
      },
    },
    {
      key: 3,
      content: "리뷰 많은 순",
      filter: "comment",
      setState: () => {
        setFilter("comment");
      },
    },
  ];

  const currentPageNumber = isQueryString(query.page) ? Number(query.page) : 1;

  const { data: companyList } = useCompanyArr({
    order: filter,
    page: currentPageNumber,
    size: 14,
    industry: category,
  });

  return (
    <Layout>
      <CompanyListHeader category={category} defaultFilter="이름 순" filterOption={filterOption} />
      <CompanyList companyData={companyList} />
      <CompanyListFooter totalPages={companyList?.pageResult.totalPages} />
    </Layout>
  );
};

export default CompanyListPage;
