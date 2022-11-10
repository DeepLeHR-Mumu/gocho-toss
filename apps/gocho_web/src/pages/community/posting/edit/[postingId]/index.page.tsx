import { NextPage } from "next";

import CommunityLayout from "../../../component/communityLayout";
import { EditPostingPart } from "./part/editPostingPart";

const PostingEditPage: NextPage = () => {
  return (
    <CommunityLayout>
      <EditPostingPart />
    </CommunityLayout>
  );
};

export default PostingEditPage;
