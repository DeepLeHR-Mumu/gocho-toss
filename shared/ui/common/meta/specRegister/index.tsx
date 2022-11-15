import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";

export const SpecRegisterMeta: FunctionComponent = () => {
  return (
    <Head>
      <title>내 스펙 등록하기 - 고초대졸닷컴</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://고초대졸.com/datalab/spec/register" />
      <meta property="og:site_name" content="고초대졸닷컴 | 나의스펙등록" />
      <meta property="og:image" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/spec.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
    </Head>
  );
};
