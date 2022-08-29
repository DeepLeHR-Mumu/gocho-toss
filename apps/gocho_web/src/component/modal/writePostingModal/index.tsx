import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { useUserInfo } from "@api/auth";
import { useWritePosting } from "@api/community/useWritePosting";
import { ProfileImg } from "@component/common/atom/profileImg";
import { CloseButton } from "@component/common/atom/closeButton";
import { communityPostingArrKeyObj } from "@constant/queryKeyFactory/community/postingArrKeyObj";

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
} from "./style";

export const WritePostingBox: FunctionComponent = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState<null | number>(null);
  const changeIndex = (newId: number) => {
    setActiveButtonIndex(newId);
  };

  const { mutate } = useWritePosting();
  const { data: userInfoData } = useUserInfo();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const { register, handleSubmit, setValue } = useForm<PostingFormValues>({
    defaultValues: {
      type: 0,
    },
  });

  const postingSubmit: SubmitHandler<PostingFormValues> = (postingObj) => {
    mutate(postingObj, {
      onSuccess: () => {
        closeModal();
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
      },
      onError: (err) => {
        setErrorMsg(err.response?.data.error.status);
      },
    });
  };

  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>
      <div css={userProfile}>
        <div css={userProfileImage}>
          {userInfoData && (
            <ProfileImg imageStr={userInfoData.image} size="S" />
          )}
        </div>
        <p css={userNickname}>{userInfoData && userInfoData.nickname}</p>
      </div>
      <div>{errorMsg && <p> {errorMsg}</p>}</div>
      <form css={formContainer} onSubmit={handleSubmit(postingSubmit)}>
        <input
          {...register("title", {
            required: true,
            maxLength: 30,
          })}
          css={titleCSS}
          placeholder="제목"
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
        <button type="submit" css={submitButton}>
          글 남기기 <AiOutlineEdit />
        </button>
      </form>
    </article>
  );
};

export const WritePostingModal: FunctionComponent = () => {
  const { closeModal } = useModal();

  return (
    <ModalComponent closeModal={closeModal}>
      <WritePostingBox />
    </ModalComponent>
  );
};
