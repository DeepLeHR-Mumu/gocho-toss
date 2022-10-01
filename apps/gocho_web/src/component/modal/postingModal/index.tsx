import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { useDeletePosting } from "shared-api/community/useDeletePosting";
import { selector } from "shared-api/community/usePostingCommentArr/util";
import { Spinner } from "shared-ui/common/atom/spinner";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { dateConverter } from "shared-util/date/dateConverter";
import { useAddPostingBookmarkArr, useDeletePostingBookmarkArr, useUserPostingBookmarkArr } from "shared-api/bookmark";
import { useAddPostingViewCount } from "shared-api/viewCount";

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
  const { data: userData } = useUserInfo();

  const [openPostingSetting, setOpenPostingSetting] = useState<boolean>(false);
  const { mutate } = useDeletePosting();
  const { mutate: addViewCount } = useAddPostingViewCount();
  const { mutate: addBookmarkMutate } = useAddPostingBookmarkArr({ id: postingData.id });
  const { mutate: deleteBookmarkMutate } = useDeletePostingBookmarkArr({ id: postingData.id });
  const { data: postingBookmarkArr } = useUserPostingBookmarkArr({ userId: userData?.id });

  const { data: commentArrData, isLoading, isError } = usePostingCommentArr({ postingId: postingData.id });

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
    if (isBookmarked) return deleteBookmarkMutate({ userId: userData?.id as number, elemId: postingData.id });
    return addBookmarkMutate({ userId: userData?.id as number, elemId: postingData.id });
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
  // LATER data-cy 제거 후 테스트코드 다시확인
  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeRefetch} />
      </div>
      <div css={overviewYBox}>
        <div css={flexBox}>
          <div css={writerProfile}>
            <div css={writerProfileImage}>
              <ProfileImg imageStr="default_work" size="S" />
            </div>
            <p css={writerNickname}>{postingData.nickname}</p>
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
            <li css={infoCSS}>{`${year}/${month}/${date}`}</li>
            <li>
              <button type="button" aria-label="좋아요 버튼" onClick={likePosting} css={likeButtonCSS(isBookmarked)}>
                <AiOutlineLike />
              </button>
            </li>

            <li css={numInfo}>{postingData.like}</li>

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
                  css={settingMenu}
                  aria-label="글 삭제하기"
                  onClick={() => {
                    return postingDelete(postingData.id);
                  }}
                >
                  <FiMoreVertical />
                </button>
              </div>
            )}
            {userData?.id === postingData.userID && (
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
            // LATER 복잡한 처리방식 간소화 - > 빈배열을 만들어서 해야할지?, filter 사용하면 될거같음
            const reCommentList: null | ReturnType<typeof selector> = [];

            if (comment.parentCommentId === null) {
              return (
                <Comment
                  id={comment.id}
                  postingId={postingData.id}
                  userId={comment.userId}
                  loginUserId={userData?.id}
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
