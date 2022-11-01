import { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { CanonicalHeadProps } from "./type";

export const CanonicalHead: FunctionComponent<CanonicalHeadProps> = ({ isAlternate = false }) => {
  const router = useRouter();

  return (
    <Head>
      {isAlternate ? (
        <>
          <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
          <link
            rel="alternate"
            media="only screen and (max-width: 640px)"
            href={`${GOCHO_MOBILE_URL}${router.asPath.split("?")[0]}`}
          />
        </>
      ) : (
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      )}
    </Head>
  );
};
