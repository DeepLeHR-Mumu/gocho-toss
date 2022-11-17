import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { SPEC_DETAIL_META } from "shared-constant/meta";

import { PageHeadProps } from "./type";

export const PageHead: FunctionComponent<PageHeadProps> = ({ option }) => {
  const userName = `[${option.nickname.slice(0, 1)}***]`;
  const title = `${userName}님의 생산직 스펙평가 - 고초대졸닷컴`;
  const desc = `${option.age}세 ${option.gender} ${option.desiredTask && option.desiredTask} 구직자, ${
    option.certificate && `자격증 : ${option.certificate}`
  } . ${userName}님의 생산직 스펙은 몇점일까요?`;
  const keyword = `${option.age}, ${option.gender}, ${option.desiredTask && option.desiredTask}, ${
    option.desiredIndustry && option.desiredIndustry
  }, ${option.certificate && option.certificate}, 스펙, 평가`;
  const ogDesc = `${option.age}세 ${option.gender} ${
    option.desiredTask && option.desiredTask[0]
  } 구직자 ${userName}님의 생산직 스펙은 몇점일까요?`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keyword} />
      <meta property="og:title" content={`${userName} ${SPEC_DETAIL_META.ogTitle}`} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/datalab/spec/detail/${option.id}`} />
      <meta property="og:site_name" content={SPEC_DETAIL_META.ogSiteName} />
      <meta property="og:image" content={SPEC_DETAIL_META.ogImage} />
      <meta property="og:image_secure" content={SPEC_DETAIL_META.ogImage} />
      <meta property="og:article:author" content={SPEC_DETAIL_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/datalab/spec/detail/${option.id}`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/datalab/spec/detail/${option.id}`}
      />
    </Head>
  );
};
