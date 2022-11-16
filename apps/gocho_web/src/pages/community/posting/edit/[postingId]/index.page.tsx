import { NextPage } from "next";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { CommunityPostingWriteMeta } from "shared-ui/common/meta";

import CommunityLayout from "../../../component/communityLayout";
import { EditPostingPart } from "./part/editPostingPart";

const PostingEditPage: NextPage = () => {
  return (
    <CommunityLayout>
      <CommunityPostingWriteMeta />
      <InvisibleH1 title="자유게시판 > 글 수정하기 - 고초대졸닷컴" />

      <EditPostingPart />
    </CommunityLayout>
  );
};

export default PostingEditPage;
