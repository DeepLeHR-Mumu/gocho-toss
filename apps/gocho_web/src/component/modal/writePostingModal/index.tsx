import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit, AiOutlineInfoCircle } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "shared-api/auth";
import { useWritePosting } from "shared-api/community/useWritePosting";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { useToast } from "@recoil/hook/toast";
import { CloseButton } from "@component/common/atom/closeButton";
import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";

import { setPostingTypeButtonArr, PostingFormValues } from "./type";
import {
  modalWrapper,
  closeButtonWrapper,
  userProfile,
  userProfileImage,
  userNickname,
  formContainer,
  titleCSS,
  bodyCSS,
  buttonContainer,
  setPostingTypeButton,
  submitButton,
  optionDesc,
} from "./style";

export const WritePostingBox: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const { mutate } = useWritePosting();
  const { data: userInfoData } = useUserInfo();
  const { closeModal } = useModal();
  const { setCurrentToast } = useToast();
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const changeIndex = (newId: number) => {
    setActiveButtonIndex(newId);
  };

  const { register, handleSubmit, setValue } = useForm<PostingFormValues>({
    defaultValues: {
      type: 0,
    },
  });

  const postingSubmit: SubmitHandler<PostingFormValues> = (postingObj) => {
    mutate(postingObj, {
      onSuccess: () => {
        closeModal();
        setCurrentToast("게시글이 등록되었습니다.");
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
      },
    });
  };

  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>
      <div css={userProfile}>
        <div css={userProfileImage}>{userInfoData && <ProfileImg imageStr={userInfoData.image} size="S" />}</div>
        <p css={userNickname}>{userInfoData && userInfoData.nickname}</p>
      </div>
      {/* LATER : 스페이스 누르면 모달 꺼짐 */}
      <form css={formContainer} onSubmit={handleSubmit(postingSubmit)}>
        <input
          {...register("title", {
            required: true,
            maxLength: 30,
          })}
          css={titleCSS}
          placeholder="제목(최대 30자)"
        />
        <textarea
          {...register("description", {
            required: true,
          })}
          css={bodyCSS}
          placeholder="오늘 하루 어떠셨나요? 어떤 이야기는 우리끼리만 통하기도 하죠 😚"
        />
        <div css={buttonContainer}>
          {setPostingTypeButtonArr.map((button, index) => {
            return (
              <button
                type="button"
                key={`postingWriteModalMenu${button.text}`}
                // TODO: index와 activeButtonIndex 변수로 주고 active 안에서 확인
                // TODO: index -> string
                css={setPostingTypeButton(index === activeButtonIndex)}
                // TODO: 기명함수로 바꾸기
                onClick={() => {
                  changeIndex(index);
                  setValue("type", index);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
        <p css={optionDesc}>
          <AiOutlineInfoCircle />
          토크 주제는 무엇으로 하시겠어요? 기본옵션은 자유! 😚
        </p>
        <button type="submit" css={submitButton}>
          글 남기기 <AiOutlineEdit />
        </button>
      </form>
    </article>
  );
};

export const WritePostingModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <WritePostingBox />
    </ModalComponent>
  );
};
