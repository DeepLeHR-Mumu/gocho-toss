import CommunityLayout from "@pages/community/component/communityLayout";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserInfo } from "shared-api/auth";
import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { usePostingDetail } from "shared-api/community/usePostingDetail";

import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { postingListFunnelEvent } from "shared-ga/posting";
import { WriteComment } from "./component/writeComment";
import { CommentPart } from "./part/commentPart";

import { PostingPart } from "./part/postingPart";
import { commentListWrapper, overviewYBox, wrapper } from "./style";

const PostingDetailPage: NextPage = () => {
  const router = useRouter();

  const { data: commentArrData } = usePostingCommentArr({ postingId: Number(router.query.postingId) });
  const { data: userInfoData } = useUserInfo();
  const { data: postingDetailData } = usePostingDetail({ id: Number(router.query.postingId) });

  useEffect(() => {
    postingListFunnelEvent();
  }, []);

  const filteredCommentArr = commentArrData?.filter((commentData) => {
    return commentData.parentCommentId === null;
  });

  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.pathname}`} />
      </Head>
      <CommunityLayout isSidebar>
        <article css={wrapper}>
          <div css={overviewYBox}>
            <PostingPart />
            {filteredCommentArr && commentArrData && postingDetailData && (
              <>
                <div css={commentListWrapper}>
                  {filteredCommentArr.map((commentData) => {
                    const reCommentArr = commentArrData?.filter((reComment) => {
                      return commentData.id === reComment.parentCommentId;
                    });

                    return (
                      <div css={wrapper} key={commentData.id}>
                        <CommentPart
                          isRecomment={false}
                          commentData={commentData}
                          postingId={postingDetailData.id}
                          loginUserId={userInfoData?.id}
                        />
                        {reCommentArr.map((reComment) => {
                          return (
                            <CommentPart
                              isRecomment
                              commentData={reComment}
                              postingId={postingDetailData.id}
                              loginUserId={userInfoData?.id}
                              key={reComment.id}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                <WriteComment parentCommentId={null} />
              </>
            )}
          </div>
        </article>
      </CommunityLayout>
    </main>
  );
};

export default PostingDetailPage;
