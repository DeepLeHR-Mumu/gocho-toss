import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, PRIVACY_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{PRIVACY_META.title}</title>
      <meta name="description" content="" />
      <meta name="keywords" content={PRIVACY_META.keywords} />
      <meta property="og:title" content={PRIVACY_META.ogTitle} />
      <meta property="og:description" content={PRIVACY_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/event/privacy`} />
      <meta property="og:site_name" content={PRIVACY_META.ogSiteName} />
      <meta property="og:image" content={PRIVACY_META.ogImage} />
      <meta property="og:image_secure" content={PRIVACY_META.ogImage} />
      <meta property="og:article:author" content={PRIVACY_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/event/privacy`} />
      <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/event/privacy`} />
    </Head>
  );
};
