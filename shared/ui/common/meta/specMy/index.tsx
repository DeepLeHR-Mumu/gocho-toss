import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { SpecMyMetaProps } from "./type";

export const SpecMyMeta: FunctionComponent<SpecMyMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>내가 작성한 스펙 - 고초대졸닷컴</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/datalab/spec/my`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 나의스펙내역" />
      <meta property="og:image" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/datalab/spec/my`} />

      {!isMobile && (
        <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/datalab/spec/my`} />
      )}
    </Head>
  );
};
