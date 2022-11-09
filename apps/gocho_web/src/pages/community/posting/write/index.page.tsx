import { NextPage } from "next";

import CommunityLayout from "../../component/communityLayout";
import { WritePart } from "./part/writePart";

const WritePostingPage: NextPage = () => {
  return (
    <CommunityLayout>
      <WritePart />
    </CommunityLayout>
  );
};

export default WritePostingPage;
