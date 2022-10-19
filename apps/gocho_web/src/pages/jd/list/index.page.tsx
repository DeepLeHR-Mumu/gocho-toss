import { NextPage } from "next";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JobsList: NextPage = () => {
  
  return (
    <main>
      <MetaHead metaData={META_JD_LIST} />
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JobsList;
