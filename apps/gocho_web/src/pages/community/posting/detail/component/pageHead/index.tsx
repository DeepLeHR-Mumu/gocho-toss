import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { POSTING_DETAIL_META } from "shared-constant/meta";

import { PageHeadProps } from "./type";

export const PageHead: FunctionComponent<PageHeadProps> = ({ option }) => {
  const title = `자유게시판 ${option.title} - 고초대졸닷컴`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={POSTING_DETAIL_META.desc} />
      <meta name="keywords" content={POSTING_DETAIL_META.keywords} />
      <meta property="og:title" content={POSTING_DETAIL_META.ogTitle} />
      <meta property="og:description" content={POSTING_DETAIL_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/community/postings/detail/${option.id}`} />
      <meta property="og:site_name" content={POSTING_DETAIL_META.ogSiteName} />
      <meta property="og:image" content={POSTING_DETAIL_META.ogImage} />
      <meta property="og:image_secure" content={POSTING_DETAIL_META.ogImage} />
      <meta property="og:article:author" content={POSTING_DETAIL_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/community/postings/detail/${option.id}`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/community/postings/detail/${option.id}`}
      />
    </Head>
  );
};
