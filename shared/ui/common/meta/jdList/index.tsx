import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { JdListMetaProps } from "./type";

export const JdListMeta: FunctionComponent<JdListMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>실시간 생산직 채용공고 - 고초대졸닷컴</title>
      <meta
        name="description"
        content="고초대졸닷컴은 생산직 현장직 기능직에 특화된 자세한 채용공고를 제공합니다. 어디에서도 볼 수 없는 빠르고 정확한 생산직 공고를 느껴보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴."
      />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="실시간 생산직 채용공고 - 고초대졸닷컴" />
      <meta property="og:description" content="어디에서도 볼 수 없는 빠르고 정확한 생산직 채용공고를 느껴보세요! " />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/jd/list`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 채용공고" />
      <meta property="og:image" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/list`} />

      {!isMobile && (
        <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/jd/list`} />
      )}
    </Head>
  );
};
