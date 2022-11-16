import { NextPage } from "next";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { CommunityPostingWriteMeta } from "shared-ui/common/meta";

import CommunityLayout from "../../component/communityLayout";
import { WritePart } from "./part/writePart";

const WritePostingPage: NextPage = () => {
  return (
    <CommunityLayout>
      <CommunityPostingWriteMeta />
      <InvisibleH1 title="자유게시판 > 글 작성하기 - 고초대졸닷컴" />

      <WritePart />
    </CommunityLayout>
  );
};

export default WritePostingPage;
