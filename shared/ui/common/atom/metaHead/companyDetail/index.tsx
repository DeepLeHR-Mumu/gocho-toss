import { FunctionComponent } from "react";
import Head from "next/head";

import { DOMAIN } from "shared-constant/meta";
import { InvisibleH1 } from "../../invisibleH1";
import { CompanyDetailMetaHeadProps } from "./type";

export const CompanyDetailMetaHead: FunctionComponent<CompanyDetailMetaHeadProps> = ({ metaData, companyDetail }) => {
  return (
    <>
      <Head>
        <title>{`${companyDetail.companyName} ${metaData.title}`}</title>
        <meta name="description" content={`${companyDetail.companyName} ${metaData.desc}`} />
        <meta name="keywords" content={`${companyDetail.companyName} ${metaData.keyword}`} />
        <meta property="og:title" content={`[${companyDetail.companyName}] ${metaData.ogTitle}`} />
        <meta property="og:description" content={`${companyDetail.companyName} ${metaData.ogDesc}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${companyDetail.asPath}`} />
        <meta property="og:site_name" content={`고초대졸닷컴 | ${metaData.pageName}`} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:article:author" content={`${companyDetail.companyName} ${metaData.title}`} />
      </Head>
      <InvisibleH1 title={`${companyDetail.companyName} ${metaData.title}`} />
    </>
  );
};
