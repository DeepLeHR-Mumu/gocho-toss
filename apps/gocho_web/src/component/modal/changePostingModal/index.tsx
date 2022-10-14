import { FunctionComponent, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";

import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { useUserInfo } from "shared-api/auth";
import { useChangePosting } from "shared-api/community/useChangePosting";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { changePostingObjDef } from "@recoil/atom/modal";

import { CloseButton } from "@component/common/atom/closeButton";

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

export const ChangePostingBox: FunctionComponent = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const changeIndex = (newId: number) => {
    setActiveButtonIndex(newId);
  };

  const { mutate } = useChangePosting();
  const { data: userInfoData } = useUserInfo();
  const { closeModal, currentModal } = useModal();
  const queryClient = useQueryClient();

  const { id, title, description, type } = currentModal?.modalContentObj as changePostingObjDef;
  const { register, handleSubmit, setValue } = useForm<PostingFormValues>({
    defaultValues: {
      id,
      title,
      description,
      type,
    },
  });

  const postingSubmit: SubmitHandler<PostingFormValues> = (postingObj) => {
    mutate(postingObj, {
      onSuccess: () => {
        closeModal();
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
      },
    });
  };

  useEffect(() => {
    setActiveButtonIndex(type);
  }, [type]);

  // LATER TODO 해결하기
  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>
      <div css={userProfile}>
        <div css={userProfileImage}>{userInfoData && <ProfileImg imageStr={userInfoData.image} size="S" />}</div>
        <p css={userNickname}>{userInfoData && userInfoData.nickname}</p>
      </div>
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
                key={`postingChangeModalMenu${button.text}`}
                css={setPostingTypeButton(index === activeButtonIndex)}
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
          글 수정하기 <AiOutlineEdit />
        </button>
      </form>
    </article>
  );
};

export const ChangePostingModal: FunctionComponent = () => {
  return (
    <ModalComponent>
      <ChangePostingBox />
    </ModalComponent>
  );
};
