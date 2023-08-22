import { NextPage } from "next";

import { Layout } from "@/components";

import { JdPart } from "./index/part/JdPart";
import { CompanyPart } from "./index/part/CompanyPart";

const Home: NextPage = () => {
  return (
    <main>
      <Layout>
        <JdPart />
        <CompanyPart />
      </Layout>
    </main>
  );
};

export default Home;
