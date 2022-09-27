import { NextPage } from "next";
import Head from "next/head";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JdList: NextPage = () => {
  return (
    <main>
      <Head>
        <title>실시간 채용 공고 - 고초대졸닷컴</title>
      </Head>
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JdList;
