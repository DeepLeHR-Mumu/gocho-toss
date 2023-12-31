import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, SEARCH_META } from "@/constants/meta";

export const PageHead: FunctionComponent = () => (
  <Head>
    <title>{SEARCH_META.title}</title>
    <meta name="description" content={SEARCH_META.desc} />
    <meta name="keywords" content={SEARCH_META.keywords} />
    <meta property="og:title" content={SEARCH_META.ogTitle} />
    <meta property="og:description" content={SEARCH_META.ogDesc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/search`} />
    <meta property="og:site_name" content={SEARCH_META.ogSiteName} />
    <meta property="og:image" content={SEARCH_META.ogImage} />
    <meta property="og:image_secure" content={SEARCH_META.ogImage} />
    <meta property="og:article:author" content={SEARCH_META.ogAuthor} />
    <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/search`} />
  </Head>
);
