import { NextPage } from "next";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_JD_LIST } from "shared-constant/meta";
import { DataLabContainer } from "@component/global/datalabCarousel/datalabContainer";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

import { datalabBox } from "./style";

const JobsList: NextPage = () => {
  return (
    <main>
      <MetaHead metaData={META_JD_LIST} />
      <div css={datalabBox}>
        <DataLabContainer />
      </div>
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JobsList;
