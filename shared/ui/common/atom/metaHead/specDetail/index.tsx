import { FunctionComponent } from "react";
import Head from "next/head";

import { DOMAIN } from "shared-constant/meta";
import { InvisibleH1 } from "../../invisibleH1";
import { SpecDetailMetaHeadProps } from "./type";

export const SpecDetailMetaHead: FunctionComponent<SpecDetailMetaHeadProps> = ({ metaData, specDetail }) => {
  const userNickname = `${specDetail.nickName.slice(0, 1)}***`;

  return (
    <>
      <Head>
        <title>{`[${userNickname}]${metaData.title}`}</title>
        <meta
          name="description"
          content={`${specDetail.age}세 ${specDetail.gender} ${specDetail.desiredTask} 구직자, ${
            specDetail.certificate && `자격증 : ${specDetail.certificate}`
          } . [${userNickname}]님의 생산직 스펙은 몇점일까요?`}
        />
        <meta name="keywords" content={metaData.keyword} />
        <meta property="og:title" content={`[${userNickname}]${metaData.ogTitle}`} />
        <meta
          property="og:description"
          content={`${specDetail.age}세 ${specDetail.gender} ${specDetail.desiredTask} 구직자 [${userNickname}]님의 생산직 스펙은 몇점일까요?`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${metaData.path}`} />
        <meta property="og:site_name" content={`고초대졸닷컴 | ${metaData.pageName}`} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:article:author" content={`[${userNickname}]${metaData.title}`} />
      </Head>
      <InvisibleH1 title={`[${userNickname}]${metaData.title}`} />
    </>
  );
};
