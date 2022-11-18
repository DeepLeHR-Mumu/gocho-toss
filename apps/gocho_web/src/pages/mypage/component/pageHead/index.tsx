import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { MYPAGE_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{MYPAGE_META.title}</title>
      <meta name="description" content={MYPAGE_META.desc} />
      <meta name="keywords" content={MYPAGE_META.keywords} />
      <meta property="og:title" content={MYPAGE_META.ogTitle} />
      <meta property="og:description" content={MYPAGE_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/mypage`} />
      <meta property="og:site_name" content={MYPAGE_META.ogSiteName} />
      <meta property="og:image" content={MYPAGE_META.ogImage} />
      <meta property="og:image_secure" content={MYPAGE_META.ogImage} />
      <meta property="og:article:author" content={MYPAGE_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/mypage`} />
      <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/mypage`} />
    </Head>
  );
};
