import Head from "next/head";
import { NOT_FOUND_META } from "@/constants/meta";

export const PageHead = () => (
  <Head>
    <title>{NOT_FOUND_META.title}</title>
  </Head>
);
