import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { JD_LIST_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{JD_LIST_META.title}</title>
      <meta name="description" content={JD_LIST_META.desc} />
      <meta name="keywords" content={JD_LIST_META.keywords} />
      <meta property="og:title" content={JD_LIST_META.ogTitle} />
      <meta property="og:description" content={JD_LIST_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/jd/list`} />
      <meta property="og:site_name" content={JD_LIST_META.ogSiteName} />
      <meta property="og:image" content={JD_LIST_META.ogImage} />
      <meta property="og:image_secure" content={JD_LIST_META.ogImage} />
      <meta property="og:article:author" content={JD_LIST_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/list`} />
      <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/jd/list`} />
    </Head>
  );
};
