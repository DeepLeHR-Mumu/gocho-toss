import { NextPage } from "next";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const Tip: NextPage = () => {
  let tet = 3;
  tet = "33";
  return (
    <main>
      {tet}
      <AdPart />
      <ListPart />
    </main>
  );
};

export default Tip;
