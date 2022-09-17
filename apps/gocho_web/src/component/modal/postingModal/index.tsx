import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

import { usePostingCommentArr } from "shared-api/community/usePostingCommentArr";
import { useDeletePosting } from "shared-api/community/useDeletePosting";
import { ModalComponent } from "@component/modal/modalBackground";
import { dateConverter } from "shared-util/date/dateConverter";
import { useModal } from "@recoil/hook/modal";
import { postingObjDef } from "@recoil/atom/modal";
import { CloseButton } from "@component/common/atom/closeButton";
import { ProfileImg } from "shared-ui/pages/common/atom/profileImg";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { useUserInfo } from "shared-api/auth";
import { selector } from "shared-api/community/usePostingCommentArr/util";

import { WriteComment } from "./component/writeComment";
import { Comment } from "./component/comment";
import { changeTypeIndex } from "./util";
import {
  closeButtonWrapper,
  modalWrapper,
  writerProfile,
  writerProfileImage,
  titleCSS,
  writerNickname,
  bodyCSS,
  infoContainer,
  infoBox,
  infoCSS,
  setPostingType,
  numInfo,
  settingButtonList,
  settingButton,
  settingMenu,
  commentListWrapper,
} from "./style";

export const PostingBox: FunctionComponent = () => {
  const { closeModal, currentModal, setCurrentModal } = useModal();
  const { data: userData } = useUserInfo();

  const [openPostingSetting, setOpenPostingSetting] = useState<boolean>(false);
  const { mutate } = useDeletePosting();
  const queryClient = useQueryClient();

  const { id, userID, nickname, title, description, type, createdTime, like, view } =
    currentModal?.modalContentObj as postingObjDef;

  const { data: commentArrData, isLoading, isError } = usePostingCommentArr({ postingId: id });

  const openChangePostingModal = () => {
    setCurrentModal("changePostingModal", {
      id,
      title,
      description,
      type: changeTypeIndex(type),
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

  if (!commentArrData || !userData || isError || isLoading) {
    return <div>loading...</div>;
  }

  const { year, month, date } = dateConverter(createdTime);
  // LATER 게시글 내용 댓글부분을 파트로 나누면 코드가 좀더 짧고 간결해보일듯 -> 극단적으로 나눌 필요는 없음
  // LATER data-cy 제거 후 테스트코드 다시확인
  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeRefetch} />
      </div>
      <div css={writerProfile}>
        <div css={writerProfileImage}>
          <ProfileImg imageStr="default_work" size="S" />
        </div>
        <p css={writerNickname}>{nickname}</p>
      </div>
      <h2 data-cy="postingTitle" css={titleCSS}>
        {title}
      </h2>
      <div data-cy="postingBody" css={bodyCSS}>
        {description}
      </div>
      <div css={infoContainer}>
        <div css={infoBox}>
          <p data-cy="postingType" css={setPostingType(type)}>
            {type}
          </p>
          <p css={infoCSS}>{`${year}/${month}/${date}`}</p>
          <AiOutlineLike />
          <p css={numInfo}>{like}</p>
          <AiOutlineMessage />
          <p css={numInfo}>{commentArrData.length}</p>
          <AiOutlineEye />
          <p css={numInfo}>{view}</p>
        </div>
        <div css={infoBox}>
          {openPostingSetting && (
            <div css={settingButtonList}>
              <button type="button" css={settingButton} onClick={openChangePostingModal}>
                글 수정하기
              </button>
              <button
                type="button"
                css={settingButton}
                onClick={() => {
                  return postingDelete(id);
                }}
              >
                글 삭제하기
              </button>
            </div>
          )}
          {userData.id === userID && (
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
      <WriteComment postingId={id} parentCommentId={null} />

      <div css={commentListWrapper}>
        {commentArrData.map((comment) => {
          // LATER 복잡한 처리방식 간소화 - > 빈배열을 만들어서 해야할지?, filter 사용하면 될거같음
          const reCommentList: null | ReturnType<typeof selector> = [];

          commentArrData.forEach((reComment) => {
            if (reComment.parentCommentId === comment.id) reCommentList.push(reComment);
          });

          if (comment.parentCommentId === null) {
            return (
              <Comment
                id={comment.id}
                postingId={id}
                userId={comment.userId}
                // LATER as로 undefined 해결하지 않기 -> 구조적 문제해결, 넘겨줄 당시에는number라고 타입확정을 해줬으나 실제로 받는 loginUerId는 undefined일 수 있는것 아닌지?,
                loginUserId={userData.id as number}
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
    </article>
  );
};

export const PostingModal: FunctionComponent = () => {
  const { closeModal } = useModal();

  return (
    <ModalComponent closeModal={closeModal}>
      <PostingBox />
    </ModalComponent>
  );
};
