import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { POSTING_EDIT_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  return (
    <Head>
      <title>{POSTING_EDIT_META.title}</title>
      <meta name="description" content={POSTING_EDIT_META.desc} />
      <meta name="keywords" content={POSTING_EDIT_META.keywords} />
      <meta property="og:title" content={POSTING_EDIT_META.ogTitle} />
      <meta property="og:description" content={POSTING_EDIT_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/community/postings/write`} />
      <meta property="og:site_name" content={POSTING_EDIT_META.ogSiteName} />
      <meta property="og:image" content={POSTING_EDIT_META.ogImage} />
      <meta property="og:image_secure" content={POSTING_EDIT_META.ogImage} />
      <meta property="og:article:author" content={POSTING_EDIT_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/community/postings/write`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/community/postings/write`}
      />
    </Head>
  );
};
