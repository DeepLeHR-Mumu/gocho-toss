import { NextPage } from "next";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";

import { CommunityLayout } from "../../component/communityLayout";
import { WritePart } from "./part/writePart";
import { PageHead } from "./pageHead";

const WritePostingPage: NextPage = () => {
  return (
    <CommunityLayout>
      <PageHead />
      <InvisibleH1 title="자유게시판 > 글 작성하기 - 고초대졸닷컴" />

      <WritePart />
    </CommunityLayout>
  );
};

export default WritePostingPage;
