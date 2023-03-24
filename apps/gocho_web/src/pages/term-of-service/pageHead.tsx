import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, TOS_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{TOS_META.title}</title>
      <meta name="description" content={TOS_META.desc} />
      <meta name="keywords" content={TOS_META.keywords} />
      <meta property="og:title" content={TOS_META.ogTitle} />
      <meta property="og:description" content={TOS_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/event/term-of-service`} />
      <meta property="og:site_name" content={TOS_META.ogSiteName} />
      <meta property="og:image" content={TOS_META.ogImage} />
      <meta property="og:image_secure" content={TOS_META.ogImage} />
      <meta property="og:article:author" content={TOS_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/event/term-of-service`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/event/term-of-service`}
      />
    </Head>
  );
};
