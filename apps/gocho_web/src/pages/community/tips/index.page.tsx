import { NextPage } from "next";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  return (
    <main>
      <AdPart />
      <ListPart />
    </main>
  );
};

export default Tip;
