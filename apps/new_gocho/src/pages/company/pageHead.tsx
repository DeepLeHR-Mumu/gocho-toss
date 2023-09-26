import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, COMPANY_META } from "shared-constant";

export const PageHead: FunctionComponent = () => (
  <Head>
    <title>{COMPANY_META.ogTitle}</title>
    <meta name="description" content={COMPANY_META.ogDesc} />
    <meta name="keywords" content={COMPANY_META.keywords} />
    <meta property="og:title" content={COMPANY_META.ogTitle} />
    <meta property="og:description" content={COMPANY_META.ogDesc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/mypage`} />
    <meta property="og:site_name" content={COMPANY_META.ogSiteName} />
    <meta property="og:image" content={COMPANY_META.ogImage} />
    <meta property="og:image_secure" content={COMPANY_META.ogImage} />
    <meta property="og:article:author" content={COMPANY_META.ogAuthor} />
    <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/mypage`} />
    <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/mypage`} />
  </Head>
);