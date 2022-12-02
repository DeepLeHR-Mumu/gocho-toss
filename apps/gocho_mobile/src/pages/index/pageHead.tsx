import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { INDEX_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{INDEX_META.title}</title>
      <meta name="description" content={INDEX_META.desc} />
      <meta name="keywords" content={INDEX_META.keywords} />
      <meta property="og:title" content={INDEX_META.ogTitle} />
      <meta property="og:description" content={INDEX_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={GOCHO_MOBILE_URL} />
      <meta property="og:site_name" content={INDEX_META.ogSiteName} />
      <meta property="og:image" content={INDEX_META.ogImage} />
      <meta property="og:image_secure" content={INDEX_META.ogImage} />
      <meta property="og:article:author" content={INDEX_META.ogAuthor} />
      <link rel="canonical" href={GOCHO_DESKTOP_URL} />
    </Head>
  );
};
