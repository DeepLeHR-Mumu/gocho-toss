import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { usePostingDetail } from "shared-api/community/usePostingDetail";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { useUserInfo } from "shared-api/auth";
import { useEditPosting } from "shared-api/community/useEditPosting";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { COMMUNITY_POSTINGS_LIST_URL } from "shared-constant/internalURL";

import { useToast } from "@recoil/hook/toast";

import { setPostingTypeButtonArr, PostingFormValues } from "./type";
import {
  wrapper,
  userProfile,
  userProfileImage,
  userNickname,
  titleCSS,
  bodyCSS,
  buttonContainer,
  setPostingTypeButton,
  submitButton,
} from "./style";
import { changeTypeIndex } from "./util";

export const EditPostingPart: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: postingDetailData } = usePostingDetail({ id: Number(router.query.postingId) });
  const { data: userInfoData } = useUserInfo();
  const { mutate: editPostingMutate } = useEditPosting();
  const { setCurrentToast } = useToast();

  const { register, handleSubmit, setValue, watch } = useForm<PostingFormValues>({
    defaultValues: {
      id: postingDetailData?.id,
      title: postingDetailData?.title,
      description: postingDetailData?.description,
      type: changeTypeIndex(String(postingDetailData?.type)),
    },
  });
  const typeIndex = watch("type");

  const postingSubmit: SubmitHandler<PostingFormValues> = (postingObj) => {
    editPostingMutate(postingObj, {
      onSuccess: () => {
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
        setCurrentToast("게시글이 수정되었습니다.");
        router.push(COMMUNITY_POSTINGS_LIST_URL);
      },
    });
  };

  return (
    <article css={wrapper}>
      <div css={userProfile}>
        <div css={userProfileImage}>{userInfoData && <ProfileImg imageStr={userInfoData.image} size="S" />}</div>
        <p css={userNickname}>{userInfoData && userInfoData.nickname}</p>
      </div>
      <form onSubmit={handleSubmit(postingSubmit)}>
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
                css={setPostingTypeButton(index === typeIndex)}
                onClick={() => {
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
