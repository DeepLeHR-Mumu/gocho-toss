import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { SPEC_REGISTER_META } from "shared-constant/meta";

export const PageHead: FunctionComponent = () => {
  // eslint-disable-next-line no-console
  console.log("test");
  return (
    <Head>
      <title>{SPEC_REGISTER_META.title}</title>
      <meta name="description" content={SPEC_REGISTER_META.desc} />
      <meta name="keywords" content={SPEC_REGISTER_META.keywords} />
      <meta property="og:title" content={SPEC_REGISTER_META.ogTitle} />
      <meta property="og:description" content={SPEC_REGISTER_META.ogDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/datalab/spec/register`} />
      <meta property="og:site_name" content={SPEC_REGISTER_META.ogSiteName} />
      <meta property="og:image" content={SPEC_REGISTER_META.ogImage} />
      <meta property="og:image_secure" content={SPEC_REGISTER_META.ogImage} />
      <meta property="og:article:author" content={SPEC_REGISTER_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/datalab/spec/register`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/datalab/spec/register`}
      />
    </Head>
  );
};
