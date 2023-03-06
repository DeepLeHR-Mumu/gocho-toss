import Head from "next/head";
import { UNKNOWN_ERROR_META } from "shared-constant";

export const PageHead = () => {
  return (
    <Head>
      <title>{UNKNOWN_ERROR_META.title}</title>
    </Head>
  );
};
