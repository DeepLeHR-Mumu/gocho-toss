import Head from "next/head";
import { UNKNOWN_ERROR_META } from "@/constants/meta";

export const PageHead = () => (
  <Head>
    <title>{UNKNOWN_ERROR_META.title}</title>
  </Head>
);
