import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { useDeletePosting } from "shared-api/community/useDeletePosting";
import { Spinner } from "shared-ui/common/atom/spinner";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { dateConverter } from "shared-util/date/dateConverter";
import { useAddPostingBookmarkArr, useDeletePostingBookmarkArr, useUserPostingBookmarkArr } from "shared-api/bookmark";
import { useAddPostingViewCount } from "shared-api/viewCount";

import { useToast } from "@recoil/hook/toast";
import { CloseButton } from "@component/common/atom/closeButton";
import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { postingObjDef } from "@recoil/atom/modal";

import { WriteComment } from "./component/writeComment";
import { Comment } from "./component/comment";
import { changeTypeIndex } from "./util";
import { PostingBoxProps } from "./type";
import {
  closeButtonWrapper,
  modalWrapperSkeleton,
  modalWrapper,
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
  commentListWrapper,
  flexBox,
  overviewYBox,
} from "./style";

export const PostingBox: FunctionComponent<PostingBoxProps> = ({ postingData }) => {
  const queryClient = useQueryClient();

  const { closeModal, setCurrentModal } = useModal();
  const { data: userInfoData } = useUserInfo();

  const [openPostingSetting, setOpenPostingSetting] = useState<boolean>(false);
  const { mutate } = useDeletePosting();
  const { mutate: addViewCount } = useAddPostingViewCount();
  const { mutate: addBookmarkMutate } = useAddPostingBookmarkArr({ id: postingData.id });
  const { mutate: deleteBookmarkMutate } = useDeletePostingBookmarkArr({ id: postingData.id });
  const { data: postingBookmarkArr } = useUserPostingBookmarkArr({ userId: userInfoData?.id });
  const { data: commentArrData, isLoading, isError } = usePostingCommentArr({ postingId: postingData.id });

  const { setCurrentToast } = useToast();

  const openChangePostingModal = () => {
    setCurrentModal("changePostingModal", {
      id: postingData.id,
      title: postingData.title,
      description: postingData.description,
      type: changeTypeIndex(postingData.type),
    });
  };

  const postingDelete = (postingId: number) => {
    mutate(
      { id: postingId },
      {
        onSuccess: () => {
          closeModal();
          queryClient.invalidateQueries(communityPostingArrKeyObj.all);
        },
      }
    );
  };

  const closeRefetch = () => {
    closeModal();
    queryClient.invalidateQueries(communityPostingArrKeyObj.all);
  };

  const isBookmarked = Boolean(
    postingBookmarkArr?.some((postingBookmark) => {
      return postingBookmark === postingData.id;
    })
  );

  const likePosting = () => {
    if (!userInfoData) {
      return setCurrentToast("로그인이 필요한 서비스입니다.");
    }
    if (isBookmarked) return deleteBookmarkMutate({ userId: userInfoData?.id as number, elemId: postingData.id });
    return addBookmarkMutate({ userId: userInfoData?.id as number, elemId: postingData.id });
  };

  useEffect(() => {
    const postingViewStr = sessionStorage.getItem("postingViewArr");

    const isViewed = postingViewStr?.includes(String(postingData.id));
    if (isViewed) return;

    if (postingViewStr) {
      const postingViewArr: number[] = JSON.parse(postingViewStr);
      postingViewArr.push(postingData.id);
      sessionStorage.setItem("postingViewArr", JSON.stringify(postingViewArr));
      addViewCount({ elemId: postingData.id });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("postingViewArr", JSON.stringify([postingData.id]));
      addViewCount({ elemId: postingData.id });
    }
  }, [postingData, addViewCount]);

  if (!commentArrData || isError || isLoading) {
    return (
      <div css={modalWrapperSkeleton}>
        <Spinner backgroundColor="#fff" />
      </div>
    );
  }

  const { year, month, date } = dateConverter(postingData.createdTime);
  // LATER 게시글 내용 댓글부분을 파트로 나누면 코드가 좀더 짧고 간결해보일듯 -> 극단적으로 나눌 필요는 없음

  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeRefetch} />
      </div>
      <div css={overviewYBox}>
        <div css={flexBox}>
          <div css={writerProfile}>
            <div css={writerProfileImage}>
              <ProfileImg imageStr={postingData.image} size="S" />
            </div>
            <p css={writerNickname}>{postingData.nickname || "탈퇴한 회원"}</p>
          </div>
        </div>

        <strong data-cy="postingTitle" css={titleCSS}>
          {postingData.title}
        </strong>

        <p data-cy="postingBody" css={bodyCSS}>
          {postingData.description}
        </p>

        <div css={infoContainer}>
          <ul css={infoBox}>
            <li data-cy="postingType" css={setPostingType(postingData.type)}>
              {postingData.type}
            </li>
            <li css={infoCSS}>{`${year}.${month}.${date}`}</li>
            <li>
              <button type="button" aria-label="좋아요 버튼" onClick={likePosting} css={likeButtonCSS(isBookmarked)}>
                <AiOutlineLike /> {postingData.like}
              </button>
            </li>

            <li css={numInfo}>
              <AiOutlineMessage /> {commentArrData.length}
            </li>

            <li css={numInfo}>
              <AiOutlineEye /> {postingData.view}
            </li>
          </ul>
          <div css={infoBox}>
            {openPostingSetting && (
              <div css={settingButtonList}>
                <button type="button" css={settingButton} onClick={openChangePostingModal}>
                  글 수정하기
                </button>
                <button
                  type="button"
                  css={settingButton}
                  aria-label="글 삭제하기"
                  onClick={() => {
                    return postingDelete(postingData.id);
                  }}
                >
                  글 삭제하기
                </button>
              </div>
            )}
            {userInfoData?.id === postingData.userID && (
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
        <WriteComment postingId={postingData.id} parentCommentId={null} />

        <div css={commentListWrapper}>
          {commentArrData.map((comment) => {
            const reCommentList = commentArrData.filter((data) => {
              return comment.id === data.parentCommentId;
            });

            if (comment.parentCommentId === null) {
              return (
                <Comment
                  id={comment.id}
                  postingId={postingData.id}
                  userId={comment.userId}
                  loginUserId={userInfoData?.id}
                  body={comment.description}
                  nickname={comment.nickname}
                  emblem={comment.badge}
                  reCommentList={reCommentList}
                  key={comment.id}
                />
              );
            }
            // LATER return null 없앨 수 있는 방법 고민
            return null;
          })}
        </div>
      </div>
    </article>
  );
};

export const PostingModal: FunctionComponent = () => {
  const { currentModal } = useModal();

  return (
    <ModalComponent>
      <PostingBox postingData={currentModal?.modalContentObj as postingObjDef} />
    </ModalComponent>
  );
};
