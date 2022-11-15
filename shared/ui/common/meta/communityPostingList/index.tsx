import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { CommunityPostingListMetaProps } from "./type";

export const CommunityPostingListMeta: FunctionComponent<CommunityPostingListMetaProps> = ({ isMobile = false }) => {
  return (
    <Head>
      <title>생산직 자유게시판 - 고초대졸닷컴</title>
      <meta
        name="description"
        content="생산직만을 위한 커뮤니티, 고초대졸닷컴이 만들어나갑니다. 나 혼자 갖고 있던 정보와 고민을 다른 구직자들과 나눠보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴."
      />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="생산직 자유게시판 - 고초대졸닷컴" />
      <meta property="og:description" content="나 혼자 갖고 있던 정보와 고민을 다른 구직자들과 나눠보세요!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/community/postings/list`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 생산직 자유게시판" />
      <meta property="og:image" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/default.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/community/postings/list`} />

      {!isMobile && (
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}/community/postings/list`}
        />
      )}
    </Head>
  );
};
