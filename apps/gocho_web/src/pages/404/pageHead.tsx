import Head from "next/head";
import { NOT_FOUND_META } from "shared-constant/meta";

export const PageHead = () => {
  return (
    <Head>
      <title>{NOT_FOUND_META.title}</title>
    </Head>
  );
};
