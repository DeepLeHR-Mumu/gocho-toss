import { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { postingListFunnelEvent } from "shared-ga/posting";

import { CommunityLayout } from "../../component/communityLayout";
import { PageHead } from "./pageHead";
import { ListPart } from "./part/listPart";

const PostingListPage: NextPage = () => {
  useEffect(() => {
    postingListFunnelEvent();
  }, []);

  return (
    <main>
      <PageHead />
      <InvisibleH1 title="생산직 자유게시판 - 고초대졸닷컴" />
      <InvisibleH2 title="생산/기능직 자유게시판" />

      <CommunityLayout isSidebar>
        <ListPart />
      </CommunityLayout>
    </main>
  );
};

export default PostingListPage;
