import { NextPage } from "next";
import { AdPart } from "./part/adPart";
// import { ListPart } from "./part/listPart";

const JobsList: NextPage = () => {
  return (
    <main>
      <AdPart />
      {/* <ListPart /> */}
    </main>
  );
};

export default JobsList;
