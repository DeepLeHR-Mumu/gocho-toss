import Head from "next/head";
import { NOTICE_META } from "shared-constant";

export const PageHead = () => {
  return (
    <Head>
      <title>{NOTICE_META.title}</title>
    </Head>
  );
};
