import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, COMPANY_LIST_META } from "@/constants/meta";

export const PageHead: FunctionComponent = () => (
  <Head>
    <title>{COMPANY_LIST_META.ogTitle}</title>
    <meta name="description" content={COMPANY_LIST_META.ogDesc} />
    <meta name="keywords" content={COMPANY_LIST_META.keywords} />
    <meta property="og:title" content={COMPANY_LIST_META.ogTitle} />
    <meta property="og:description" content={COMPANY_LIST_META.ogDesc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/company/list`} />
    <meta property="og:site_name" content={COMPANY_LIST_META.ogSiteName} />
    <meta property="og:image" content={COMPANY_LIST_META.ogImage} />
    <meta property="og:image_secure" content={COMPANY_LIST_META.ogImage} />
    <meta property="og:article:author" content={COMPANY_LIST_META.ogAuthor} />
    <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/company/list`} />
  </Head>
);
