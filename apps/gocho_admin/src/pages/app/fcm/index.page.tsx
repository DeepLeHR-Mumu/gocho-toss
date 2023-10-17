import { ReactElement, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { SharedButton } from "shared-ui/common/sharedButton";

import { useAddPush } from "@/api";
import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { useToast } from "@/globalStates";

import { cssObj } from "./style";
import { PushFormValues } from "./type";

const PushUpload: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();
  const router = useRouter();
  const isUploadLoading = useRef<boolean>(false);

  const { mutate } = useAddPush();

  const { setToast } = useToast();
  const { register, handleSubmit, formState, watch, setError, clearErrors } = useForm<PushFormValues>();

  const pushSubmitHandler: SubmitHandler<PushFormValues> = (pushObj) => {
    if (isUploadLoading.current) return;

    if (!isUploadLoading.current) {
      isUploadLoading.current = true;

      mutate(pushObj, {
        onSuccess: () => {
          setToast("등록되었습니다");
          router.push({ pathname: INTERNAL_URL.SEARCH_KEYWORD_URL });
        },

        onError: (addPushError) => {
          setCheckMsg(addPushError.response?.data.error_message);
        },

        onSettled: () => {
          isUploadLoading.current = false;
        },
      });
    }
  };

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.title}>앱 푸쉬 알림 전송</h2>
        <form css={cssObj.formContainer} onSubmit={handleSubmit(pushSubmitHandler)}>
          <div css={cssObj.inputContainer}>
            <strong>유저 토큰</strong>
            <input
              css={cssObj.inputBox}
              {...register("token", {
                onBlur: () => {
                  if (Boolean(watch("token")) || Boolean(watch("topic"))) clearErrors("topic");
                  else
                    setError("topic", {
                      type: "custom",
                      message: "토큰과 토픽 하나 중 적어도 하나는 입력되어야 합니다",
                    });
                },
              })}
            />
          </div>
          <div css={cssObj.inputContainer}>
            <strong>토픽</strong>
            <input
              css={cssObj.inputBox}
              {...register("topic", {
                onBlur: () => {
                  if (Boolean(watch("token")) || Boolean(watch("topic"))) clearErrors("topic");
                  else
                    setError("topic", {
                      type: "custom",
                      message: "토큰과 토픽 하나 중 적어도 하나는 입력되어야 합니다",
                    });
                },
              })}
            />
          </div>
          <p css={cssObj.errorMsgBox}>{formState.errors.topic?.message}</p>
          <div css={cssObj.inputContainer}>
            <strong>알림 제목</strong>
            <input css={cssObj.inputBox} {...register("notification.title", { required: true })} />
          </div>
          <div css={cssObj.inputContainer}>
            <strong>알림 내용</strong>
            <textarea css={cssObj.inputBox} {...register("notification.body", { required: true })} />
          </div>
          <div css={cssObj.buttonBox}>
            <SharedButton buttonType="fillBlue" width={10} onClickHandler="submit" text="알림 발송하기" />
          </div>
        </form>
        {checkMsg && <p css={cssObj.errorMsgBox}>{checkMsg}</p>}
      </PageLayout>
    </main>
  );
};

PushUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default PushUpload;
