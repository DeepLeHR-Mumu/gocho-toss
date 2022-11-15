import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { CommunityTipListMetaProps } from "./type";

export const CommunityTipListMeta: FunctionComponent<CommunityTipListMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>생산직 취업꿀팁 - 고초대졸닷컴</title>
      <meta
        name="description"
        content="생산직 취업, 혼자 준비하기 막막하셨죠? 바로 여기, 고수들의 취업꿀팁을 다 모았습니다! 어디에서도 구할 수 없는 고초대졸 취업꿀팁! 생산직 취업의 새로운 기준, 고초대졸닷컴."
      />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="생산직 취업꿀팁 - 고초대졸닷컴" />
      <meta
        property="og:description"
        content="고수들의 취업꿀팁을 다 모았습니다! 어디에서도 구할 수 없는 고초대졸 취업꿀팁!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/community/tips/list`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 취업꿀팁" />
      <meta property="og:image" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/community/tips/list`} />

      {!isMobile && (
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}/community/tips/list`}
        />
      )}
    </Head>
  );
};
