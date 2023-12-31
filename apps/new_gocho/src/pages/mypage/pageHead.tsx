import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, MYPAGE_META } from "@/constants/meta";

export const PageHead: FunctionComponent = () => (
  <Head>
    <title>{MYPAGE_META.ogTitle}</title>
    <meta name="description" content={MYPAGE_META.ogDesc} />
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
  </Head>
);
