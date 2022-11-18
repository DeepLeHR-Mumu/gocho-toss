import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { SPEC_MY_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{SPEC_MY_META.title}</title>
      <meta name="description" content={SPEC_MY_META.desc} />
      <meta name="keywords" content={SPEC_MY_META.keywords} />
      <meta property="og:title" content={SPEC_MY_META.ogTitle} />
      <meta property="og:description" content={SPEC_MY_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/datalab/spec/my`} />
      <meta property="og:site_name" content={SPEC_MY_META.ogSiteName} />
      <meta property="og:image" content={SPEC_MY_META.ogImage} />
      <meta property="og:image_secure" content={SPEC_MY_META.ogImage} />
      <meta property="og:article:author" content={SPEC_MY_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/datalab/spec/my`} />
      <link rel="alternate" media="only screen and (max-width: 640px)" href={`${GOCHO_MOBILE_URL}/datalab/spec/my`} />
    </Head>
  );
};
