import CommunityLayout from "@pages/community/component/communityLayout";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useUserInfo } from "shared-api/auth";
import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { usePostingDetail, getPostingDetail } from "shared-api/community/usePostingDetail";
import { ERROR_URL } from "shared-constant/internalURL";
import { communityPostingDetailKeyObj } from "shared-constant/queryKeyFactory/community/postingDetailKeyObj";
import { postingListFunnelEvent } from "shared-ga/posting";

import { PageHead } from "./component/pageHead";
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
    if (!router.isReady && !router.query.postingId) return;
    if (Number(router.query.postingId)) return;
    router.push(ERROR_URL);
  }, [router]);

  useEffect(() => {
    postingListFunnelEvent();
  }, []);

  const filteredCommentArr = commentArrData?.filter((commentData) => {
    return commentData.parentCommentId === null;
  });

  return (
    <main>
      {postingDetailData && (
        <PageHead
          option={{
            title: postingDetailData.title,
            id: postingDetailData.id,
          }}
        />
      )}
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const queryClient = new QueryClient();

  if (params)
    await queryClient.prefetchQuery(
      communityPostingDetailKeyObj.postingDetail({ id: Number(params.postingId) }),
      getPostingDetail
    );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
