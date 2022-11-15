import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { defaultKeyword } from "shared-constant/meta";

export const TosMeta: FunctionComponent = () => {
  return (
    <Head>
      <title>고초대졸닷컴 | 생산직 취업의 새로운 기준</title>
      <meta
        name="description"
        content="생산직 취업, 고초대졸닷컴 하나면 충분합니다. 채용공고부터 공장정보, 커뮤니티와 내 스펙 평가까지! 오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼, 고초대졸닷컴."
      />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <meta property="og:description" content="오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://고초대졸.com/event/term-of-service" />
      <meta property="og:site_name" content="고초대졸닷컴 | 이용약관" />
      <meta property="og:image" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
    </Head>
  );
};
