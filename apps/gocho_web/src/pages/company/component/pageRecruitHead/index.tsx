import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { COMPANY_RECRUIT_META } from "shared-constant/meta";

import { PageRecruitHeadProps } from "./type";

export const PageRecruitHead: FunctionComponent<PageRecruitHeadProps> = ({ option }) => {
  const title = `${option.companyName} > 생산직 채용공고 - 고초대졸닷컴`;
  const desc = `${option.companyName} 생산직 채용공고를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={`${option.companyName} ${COMPANY_RECRUIT_META.keywords}`} />
      <meta property="og:title" content={`[${option.companyName}] ${COMPANY_RECRUIT_META.ogTitle}`} />
      <meta property="og:description" content={`${option.companyName} ${COMPANY_RECRUIT_META.ogDesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/company/${option.id}/recruit`} />
      <meta property="og:site_name" content={COMPANY_RECRUIT_META.ogSiteName} />
      <meta property="og:image" content={COMPANY_RECRUIT_META.ogImage} />
      <meta property="og:image_secure" content={COMPANY_RECRUIT_META.ogImage} />
      <meta property="og:article:author" content={COMPANY_RECRUIT_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/company/${option.id}/recruit`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/company/${option.id}/recruit`}
      />
    </Head>
  );
};
