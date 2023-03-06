import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, EVENT_RENEWAL_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{EVENT_RENEWAL_META.title}</title>
      <meta name="description" content={EVENT_RENEWAL_META.desc} />
      <meta name="keywords" content={EVENT_RENEWAL_META.keywords} />
      <meta property="og:title" content={EVENT_RENEWAL_META.ogTitle} />
      <meta property="og:description" content={EVENT_RENEWAL_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_MOBILE_URL}/event/renewal`} />
      <meta property="og:site_name" content={EVENT_RENEWAL_META.ogSiteName} />
      <meta property="og:image" content={EVENT_RENEWAL_META.ogImage} />
      <meta property="og:image_secure" content={EVENT_RENEWAL_META.ogImage} />
      <meta property="og:article:author" content={EVENT_RENEWAL_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/event/renewal`} />
    </Head>
  );
};
