import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, TIP_LIST_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{TIP_LIST_META.title}</title>
      <meta name="description" content={TIP_LIST_META.desc} />
      <meta name="keywords" content={TIP_LIST_META.keywords} />
      <meta property="og:title" content={TIP_LIST_META.ogTitle} />
      <meta property="og:description" content={TIP_LIST_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/community/tips/list`} />
      <meta property="og:site_name" content={TIP_LIST_META.ogSiteName} />
      <meta property="og:image" content={TIP_LIST_META.ogImage} />
      <meta property="og:image_secure" content={TIP_LIST_META.ogImage} />
      <meta property="og:article:author" content={TIP_LIST_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/community/tips/list`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/community/tips/list`}
      />
    </Head>
  );
};
