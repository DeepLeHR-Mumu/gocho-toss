import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, JD_EXPLIST_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{JD_EXPLIST_META.title}</title>
      <meta name="description" content={JD_EXPLIST_META.desc} />
      <meta name="keywords" content={JD_EXPLIST_META.keywords} />
      <meta property="og:title" content={JD_EXPLIST_META.ogTitle} />
      <meta property="og:description" content={JD_EXPLIST_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/jd/explist`} />
      <meta property="og:site_name" content={JD_EXPLIST_META.ogSiteName} />
      <meta property="og:image" content={JD_EXPLIST_META.ogImage} />
      <meta property="og:image_secure" content={JD_EXPLIST_META.ogImage} />
      <meta property="og:article:author" content={JD_EXPLIST_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/explist`} />
      <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/jd/explist`} />
    </Head>
  );
};
