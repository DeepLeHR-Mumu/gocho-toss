import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { JdExpListMetaProps } from "./type";

export const JdExpListMeta: FunctionComponent<JdExpListMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>만료된 채용공고 - 고초대졸닷컴</title>
      <meta
        name="description"
        content="생산직 취업정보 찾으러 이리저리 헤매지말고 고초대졸닷컴 만료공고로 취업 준비 끝! 지금까지 어디에서도 볼 수 없었던 생산직 만료공고를 이곳에서 확인해보세요"
      />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="만료된 채용공고 - 고초대졸닷컴" />
      <meta
        property="og:description"
        content="지금까지 어디에서도 볼 수 없었던 생산직 만료공고를 이곳에서 확인해보세요"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/jd/explist`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 만료공고" />
      <meta property="og:image" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/explist`} />

      {!isMobile && (
        <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/jd/explist`} />
      )}
    </Head>
  );
};
