import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, JD_NOW_HIRING_META } from "@/constants/meta";

export const PageHead: FunctionComponent = () => (
  <Head>
    <title>{JD_NOW_HIRING_META.title}</title>
    <meta name="description" content={JD_NOW_HIRING_META.desc} />
    <meta name="keywords" content={JD_NOW_HIRING_META.keywords} />
    <meta property="og:title" content={JD_NOW_HIRING_META.ogTitle} />
    <meta property="og:description" content={JD_NOW_HIRING_META.ogDesc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/jd/list`} />
    <meta property="og:site_name" content={JD_NOW_HIRING_META.ogSiteName} />
    <meta property="og:image" content={JD_NOW_HIRING_META.ogImage} />
    <meta property="og:image_secure" content={JD_NOW_HIRING_META.ogImage} />
    <meta property="og:article:author" content={JD_NOW_HIRING_META.ogAuthor} />
    <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/list`} />
  </Head>
);
