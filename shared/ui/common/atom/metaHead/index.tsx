import { FunctionComponent } from "react";
import Head from "next/head";

import { DOMAIN } from "shared-constant/meta";
import { InvisibleH1 } from "../invisibleH1";
import { SpecDetailMetaHead } from "./specDetail";
import { JdDetailMetaHead } from "./jdDetail";
import { CompanyDetailMetaHead } from "./companyDetail";

import { MetaHeadProps } from "./type";

export const MetaHead: FunctionComponent<MetaHeadProps> = ({ metaData, jdDetail, companyDetail, specDetail }) => {
  if (specDetail) {
    return <SpecDetailMetaHead metaData={metaData} specDetail={specDetail} />;
  }
  if (companyDetail) {
    return <CompanyDetailMetaHead companyDetail={companyDetail} metaData={metaData} />;
  }
  if (jdDetail) {
    return <JdDetailMetaHead metaData={metaData} jdDetail={jdDetail} />;
  }
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.desc} />
        <meta name="keywords" content={metaData.keyword} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:description" content={metaData.ogDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${metaData.path}`} />
        <meta property="og:site_name" content={`고초대졸닷컴 | ${metaData.pageName}`} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:article:author" content={metaData.title} />
      </Head>
      {/* TODO : 분리 해야함 */}
      <InvisibleH1 title={metaData.title} />
    </>
  );
};
