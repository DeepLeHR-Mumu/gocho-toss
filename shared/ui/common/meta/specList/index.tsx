import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { SpecListMetaProps } from "./type";

export const SpecListMeta: FunctionComponent<SpecListMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>생산직 스펙평가 리스트 - 고초대졸닷컴</title>
      <meta
        name="description"
        content="내 스펙은 몇점일까요? 고초대졸닷컴에서만 운영중인 생산직 스펙평가 서비스로 내 스펙으로 어떤 기업에 갈 수 있는지, 다른 생산직 구직자들의 스펙은 어떤지 확인해보세요!"
      />
      <meta name="keywords" content={`생산직, 스펙, 평가, 자격증, ${defaultKeyword}`} />
      <meta property="og:title" content="생산직 스펙평가 리스트 - 고초대졸닷컴" />
      <meta
        property="og:description"
        content="내 스펙으로 어떤 기업에 갈 수 있는지, 다른 생산직 구직자들의 스펙은 어떤지 확인해보세요!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/datalab/spec/list`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 스펙정보" />
      <meta property="og:image" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/datalab/spec/list`} />

      {!isMobile && (
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}/datalab/spec/list`}
        />
      )}
    </Head>
  );
};
