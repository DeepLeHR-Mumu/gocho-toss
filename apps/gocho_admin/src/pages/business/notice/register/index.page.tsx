import { ReactElement, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { mainContainer, pageTitle } from "@/style";
import { NextPageWithLayout } from "@/types";
import { useAddNotice } from "@/api";
import { GlobalLayout } from "@/component";

import { cssObj } from "./style";
import { TYPE_ARR, NoticeFormValues } from "./type";

const BusinessNoticeRegister: NextPageWithLayout = () => {
  const isSubmitting = useRef(false);
  const [checkMsg, setCheckMsg] = useState<string>();

  const { register, handleSubmit, formState } = useForm<NoticeFormValues>();
  const { mutate: addNoticeMutate } = useAddNotice();

  const addNoticeHandler: SubmitHandler<NoticeFormValues> = (noticeObj) => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    addNoticeMutate(noticeObj, {
      onSuccess: () => {
        setCheckMsg("새로운 공지 사항이 추가되었습니다.");
      },

      onError: () => {
        setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
      },

      onSettled: () => {
        isSubmitting.current = false;
      },
    });
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공지사항 등록</h2>
      <form onSubmit={handleSubmit(addNoticeHandler)}>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>종류</strong>
            <select css={cssObj.inputBox(false)} {...register("type", { required: "필수 항목입니다." })}>
              <option value="">공지사항 종류 선택 ▼</option>
              {TYPE_ARR.map((type) => (
                <option key={type.text} value={type.text}>
                  {type.text}
                </option>
              ))}
            </select>
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.type && formState.errors.type.message}</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>제목</strong>
            <input css={cssObj.inputBox(false)} {...register("title", { required: "필수 항목입니다." })} />
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.title && formState.errors.title.message}</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.inputContainer}>
            <strong css={cssObj.inputTitle}>내용</strong>
            <textarea css={cssObj.inputBox(true)} {...register("description", { required: "필수 항목입니다." })} />
          </div>
          <p css={cssObj.errorMessage}>{formState.errors.description && formState.errors.description.message}</p>
        </div>
        <div css={cssObj.buttonWrapper}>
          {" "}
          <NewSharedButton buttonType="fillBlue" width={10} text="공지사항 등록" onClickHandler="submit" />
        </div>
      </form>
      <p css={cssObj.checkMsgBox}>{checkMsg}</p>
    </main>
  );
};

BusinessNoticeRegister.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessNoticeRegister;
