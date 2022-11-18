import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { COMPANY_INFO_META } from "shared-constant/meta";

import { PageInfoHeadProps } from "./type";

export const PageInfoHead: FunctionComponent<PageInfoHeadProps> = ({ option }) => {
  const title = `${option.companyName} > 기업/공장 정보 - 고초대졸닷컴`;
  const desc = `${option.companyName} 생산직의 연봉/복지 정보, 노조정보, 공장별 통근버스/기숙사에 대한 자세한 정보를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={`${option.companyName}${COMPANY_INFO_META.keywords}`} />
      <meta property="og:title" content={`[${option.companyName}] ${COMPANY_INFO_META.ogTitle}`} />
      <meta property="og:description" content={`${option.companyName} ${COMPANY_INFO_META.ogDesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_MOBILE_URL}/company/${option.id}/info`} />
      <meta property="og:site_name" content={COMPANY_INFO_META.ogSiteName} />
      <meta property="og:image" content={COMPANY_INFO_META.ogImage} />
      <meta property="og:image_secure" content={COMPANY_INFO_META.ogImage} />
      <meta property="og:article:author" content={COMPANY_INFO_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/company/${option.id}/info`} />
    </Head>
  );
};
