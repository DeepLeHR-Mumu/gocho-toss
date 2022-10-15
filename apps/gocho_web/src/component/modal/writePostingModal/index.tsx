import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineEdit, AiOutlineInfoCircle } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useUserInfo } from "shared-api/auth";
import { useWritePosting } from "shared-api/community/useWritePosting";
import { communityPostingArrKeyObj } from "shared-constant/queryKeyFactory/community/postingArrKeyObj";
import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { useToast } from "@recoil/hook/toast";
import { CloseButton } from "@component/common/atom/closeButton";
import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";

import { setPostingTypeButtonArr, PostingFormValues, WritePostingBoxProps, PostingDataObjDef } from "./type";
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

export const WritePostingBox: FunctionComponent<WritePostingBoxProps> = ({ title, description }) => {
  const router = useRouter();
  const [postingDataObj, setPostingDataObj] = useState<PostingDataObjDef>({ title, description });

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const changeIndex = (newId: number) => {
    setActiveButtonIndex(newId);
  };
  const { setCurrentToast } = useToast();
  const { mutate } = useWritePosting();
  const { data: userInfoData } = useUserInfo();
  const { closeModal, setCurrentModal } = useModal();
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
        setCurrentToast("게시글이 등록되었습니다.");
        queryClient.invalidateQueries(communityPostingArrKeyObj.all);
      },
    });
  };

  const routeChangeStart = useCallback(
    (url: string) => {
      const isCurrentPostingObj = postingDataObj.title !== "" || postingDataObj.description !== "";

      if (isCurrentPostingObj) {
        setCurrentModal("pageBlockModal", {
          url,
          text: "페이지를 나가게 되면 작성 중인 글이 초기화 됩니다. 나가시겠습니까?",
          afterAction: () => {
            setCurrentModal("writePostingModal", postingDataObj);
          },
        });
        router.events.emit("routeChangeError");
        // 모달을 멈추기 위한 disable
        // eslint-disable-next-line no-throw-literal
        throw true;
      }
    },
    [postingDataObj, setCurrentModal, router.events]
  );

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [routeChangeStart, router.events]);

  const showPostingBlockModal = () => {
    const isCurrentPostingObj = postingDataObj.title !== "" || postingDataObj.description !== "";

    if (isCurrentPostingObj) {
      setCurrentModal("pageBlockModal", {
        url: router.pathname,
        text: "페이지를 나가게 되면 작성 중인 글이 초기화 됩니다. 나가시겠습니까?",
        afterAction: () => {
          setCurrentModal("writePostingModal", postingDataObj);
        },
      });
    } else closeModal();
  };

  return (
    <article css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={showPostingBlockModal} />
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
          defaultValue={title || ""}
          onChange={(onChangeEvent) => {
            register("title").onChange(onChangeEvent);
            setPostingDataObj((prevObj) => {
              return {
                ...prevObj,
                title: onChangeEvent.target.value,
              };
            });
          }}
          css={titleCSS}
          placeholder="제목(최대 30자)"
        />
        <textarea
          {...register("description", {
            required: true,
          })}
          defaultValue={description || ""}
          onChange={(onChangeEvent) => {
            register("description").onChange(onChangeEvent);
            setPostingDataObj((prevObj) => {
              return {
                ...prevObj,
                description: onChangeEvent.target.value,
              };
            });
          }}
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
  const { currentModal } = useModal();
  const { description, title } = currentModal?.modalContentObj as PostingDataObjDef;

  return (
    <ModalComponent>
      <WritePostingBox title={title} description={description} />
    </ModalComponent>
  );
};
