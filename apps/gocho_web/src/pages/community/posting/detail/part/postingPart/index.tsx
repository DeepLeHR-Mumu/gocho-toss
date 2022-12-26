import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { useRouter } from "next/router";

import { useUserInfo } from "shared-api/auth";
import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { useDeletePosting } from "shared-api/community/useDeletePosting";
import { Spinner } from "shared-ui/common/atom/spinner";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { dateConverter } from "shared-util/date/dateConverter";
import { useAddPostingBookmarkArr, useDeletePostingBookmarkArr, useUserPostingBookmarkArr } from "shared-api/bookmark";
import { useAddPostingViewCount } from "shared-api/viewCount";
import { usePostingDetail } from "shared-api/community/usePostingDetail";
import { COMMUNITY_POSTING_EDIT_URL } from "shared-constant/internalURL";

import { useToast } from "@recoil/hook/toast";

// import { changeTypeIndex } from "./util";
import {
  modalWrapperSkeleton,
  writerProfile,
  writerProfileImage,
  titleCSS,
  writerNickname,
  bodyCSS,
  infoContainer,
  infoBox,
  infoCSS,
  likeButtonCSS,
  setPostingType,
  numInfo,
  settingButtonList,
  settingButton,
  settingMenu,
  flexBox,
} from "./style";

export const PostingPart: FunctionComponent = () => {
  const [openPostingSetting, setOpenPostingSetting] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { setCurrentToast } = useToast();

  const { data: userInfoData } = useUserInfo();
  const { data: postingDetailData } = usePostingDetail({ id: Number(router.query.postingId) });
  const { mutate: deletePostingMutate } = useDeletePosting();
  const { mutate: addViewCount } = useAddPostingViewCount();
  const { mutate: addBookmarkMutate } = useAddPostingBookmarkArr({ id: Number(router.query.postingId) });
  const { mutate: deleteBookmarkMutate } = useDeletePostingBookmarkArr({ id: Number(router.query.postingId) });
  const { data: postingBookmarkArr } = useUserPostingBookmarkArr({ userId: userInfoData?.id });
  const {
    data: commentArrData,
    isLoading,
    isError,
  } = usePostingCommentArr({ postingId: Number(router.query.postingId) });

  const postingDelete = (postingId: number) => {
    deletePostingMutate(
      { id: postingId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(communityPostingArrKeyObj.all);
          router.back();
          setCurrentToast("게시글이 삭제되었습니다.");
        },
      }
    );
  };

  const isBookmarked = Boolean(
    postingBookmarkArr?.some((postingBookmark) => {
      return postingBookmark === Number(router.query.postingId);
    })
  );

  const likePosting = () => {
    if (!userInfoData) {
      return setCurrentToast("로그인이 필요한 서비스입니다.");
    }
    if (isBookmarked)
      return deleteBookmarkMutate({ userId: userInfoData?.id as number, elemId: Number(router.query.postingId) });
    return addBookmarkMutate({ userId: userInfoData?.id as number, elemId: Number(router.query.postingId) });
  };

  useEffect(() => {
    const postingViewStr = sessionStorage.getItem("postingViewArr");

    const isViewed = postingViewStr?.includes(router.query.postingId as string);
    if (isViewed || !router.isReady) return;

    if (postingViewStr) {
      const postingViewArr: number[] = JSON.parse(postingViewStr);
      postingViewArr.push(Number(router.query.postingId));
      sessionStorage.setItem("postingViewArr", JSON.stringify(postingViewArr));
      addViewCount({ elemId: Number(router.query.postingId) });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("postingViewArr", JSON.stringify([Number(router.query.postingId)]));
      addViewCount({ elemId: Number(router.query.postingId) });
    }
  }, [addViewCount, router.query.postingId, router.isReady]);

  if (!commentArrData || !postingDetailData || isError || isLoading) {
    return (
      <div css={modalWrapperSkeleton}>
        <Spinner />
      </div>
    );
  }

  const { year, month, date } = dateConverter(postingDetailData.createdTime);

  return (
    <>
      <InvisibleH1 title={`자유게시판 > ${postingDetailData.title} - 고초대졸닷컴`} />

      <div css={flexBox}>
        <div css={writerProfile}>
          <div css={writerProfileImage}>
            <ProfileImg imageStr={postingDetailData.image} size="S" />
          </div>
          <p css={writerNickname}>{postingDetailData.nickname || "탈퇴한 회원"}</p>
        </div>
      </div>

      <strong css={titleCSS}>{postingDetailData.title}</strong>

      <p css={bodyCSS}>{postingDetailData.description}</p>

      <div css={infoContainer}>
        <ul css={infoBox}>
          <li css={setPostingType(postingDetailData.type)}>{postingDetailData.type}</li>
          <li css={infoCSS}>{`${year}.${month}.${date}`}</li>
          <li>
            <button type="button" aria-label="좋아요 버튼" onClick={likePosting} css={likeButtonCSS(isBookmarked)}>
              <AiOutlineLike /> {postingDetailData.like}
            </button>
          </li>

          <li css={numInfo}>
            <AiOutlineMessage /> {commentArrData.length}
          </li>

          <li css={numInfo}>
            <AiOutlineEye /> {postingDetailData.view}
          </li>
        </ul>
        <div css={infoBox}>
          {openPostingSetting && (
            <div css={settingButtonList}>
              <Link href={`${COMMUNITY_POSTING_EDIT_URL}/${router.query.postingId}`} passHref>
                <a type="button" css={settingButton}>
                  글 수정하기
                </a>
              </Link>
              <button
                type="button"
                css={settingButton}
                aria-label="글 삭제하기"
                onClick={() => {
                  return postingDelete(postingDetailData.id);
                }}
              >
                글 삭제하기
              </button>
            </div>
          )}
          {userInfoData?.id === postingDetailData.userID && (
            <button
              type="button"
              css={settingMenu}
              onClick={() => {
                return setOpenPostingSetting((PostingSetting) => {
                  return !PostingSetting;
                });
              }}
            >
              <FiMoreVertical />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
