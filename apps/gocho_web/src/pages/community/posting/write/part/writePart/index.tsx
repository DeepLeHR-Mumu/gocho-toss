import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit, AiOutlineInfoCircle } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useUserInfo } from "shared-api/auth";
import { useWritePosting } from "shared-api/community/useWritePosting";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";
import { COMMUNITY_POSTINGS_LIST_URL } from "shared-constant/internalURL";

import { useToast } from "@recoil/hook/toast";

import { setPostingTypeButtonArr, PostingFormValues } from "./type";
import {
  wrapper,
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

export const WritePart: FunctionComponent = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const router = useRouter();
  const queryClient = useQueryClient();

  const { setCurrentToast } = useToast();
  //   const { setCurrentModal } = useModal();

  const { data: userInfoData } = useUserInfo();
  const { mutate } = useWritePosting();

  const { register, handleSubmit, setValue } = useForm<PostingFormValues>({
    defaultValues: {
      type: 0,
    },
  });

  //   const showPostingBlockModal = () => {
  //     const isWriting = postingDataObj.title !== "" || postingDataObj.description !== "";

  //     if (isWriting) {
  //       setCurrentModal("pageBlockModal", {
  //         url: router.pathname,
  //         text: "페이지를 나가게 되면 작성 중인 글이 초기화 됩니다. 나가시겠습니까?",
  //         afterAction: () => {
  //           router.back();
  //         },
  //       });
  //     }
  //   };

  //   const routeChangeStart = useCallback(
  //     (url: string) => {
  //       const isCurrentPostingObj = postingDataObj.title !== "" || postingDataObj.description !== "";
  //       const isDone = url === COMMUNITY_POSTINGS_LIST_URL;

  //       if (isCurrentPostingObj) {
  //         setCurrentModal("dialogModal", {
  //           url,
  //           text: "페이지를 나가게 되면 작성 중인 글이 초기화 됩니다. 나가시겠습니까?",
  //           title: "나가기",
  //           agreeDesc: "나가기",
  //           doActive: () => {
  //             router.push(COMMUNITY_POSTINGS_LIST_URL);
  //           },
  //         });
  //         router.events.emit("routeChangeError");
  //         // 모달을 멈추기 위한 disable
  //         // eslint-disable-next-line no-throw-literal
  //         throw true;
  //       }
  //     },
  //     [postingDataObj.description, postingDataObj.title, router, setCurrentModal]
  //   );

  //   useEffect(() => {
  //     router.events.on("routeChangeStart", routeChangeStart);
  //     return () => {
  //       router.events.off("routeChangeStart", routeChangeStart);
  //     };
  //   }, [routeChangeStart, router.events]);

  const postingSubmit: SubmitHandler<PostingFormValues> = (postingObj) => {
    mutate(postingObj, {
      onSuccess: () => {
        setCurrentToast("게시글이 등록되었습니다.");
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
        router.push(COMMUNITY_POSTINGS_LIST_URL);
      },
    });
  };

  return (
    <article css={wrapper}>
      <div css={userProfile}>
        <div css={userProfileImage}>
          <ProfileImg imageStr={userInfoData ? userInfoData.image : "default"} size="S" />
        </div>
        <p css={userNickname}>{userInfoData ? userInfoData.nickname : ""}</p>
      </div>
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
                css={setPostingTypeButton(index === activeButtonIndex)}
                onClick={() => {
                  setActiveButtonIndex(index);
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
