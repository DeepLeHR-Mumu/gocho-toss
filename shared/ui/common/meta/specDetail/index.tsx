import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";

import { SpecDetailMetaProps } from "./type";

export const SpecDetailMeta: FunctionComponent<SpecDetailMetaProps> = ({ option }) => {
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
      <meta property="og:title" content={`${userName}님의 생산직 스펙평가 - 고초대졸닷컴`} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://고초대졸.com/datalab/spec/detail/${option.id}`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 스펙상세" />
      <meta property="og:image" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
    </Head>
  );
};
