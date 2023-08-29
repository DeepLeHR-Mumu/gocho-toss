import { NextPage } from "next";

import { Layout } from "@/components";

import { AdPart } from "./index/part/AdPart";
import { JdPart } from "./index/part/JdPart";
import { CompanyPart } from "./index/part/CompanyPart";

const Home: NextPage = () => {
  return (
    <main>
      <AdPart />
      <Layout>
        <JdPart />
        <CompanyPart />
      </Layout>
    </main>
  );
};

export default Home;
