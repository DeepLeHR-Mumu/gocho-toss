import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { EMAIL_ERROR_MESSAGE, EMAIL_REGEXP } from "shared-constant";
import { Input, Button, Divider } from "shared-ui/deeple-ds";

import { useFindPassword } from "@/apis/auth";
import { RequestObjDef as FindPasswordFormValues } from "@/apis/auth/useFindPassword/type";
import { useGetDeviceType, useToast } from "@/globalStates";

import ActionBar from "../ActionBar";
import { ActionBarHandlers } from "../ActionBar/type";
import { cssObj } from "./style";

const FindPassword = ({ ...actionBarHandlers }: ActionBarHandlers) => {
  const { isMobile } = useGetDeviceType();
  const { setToastMessage } = useToast();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FindPasswordFormValues>({ mode: "onChange" });
  const { mutate: postFindPassword } = useFindPassword();

  const findPasswordSubmit: SubmitHandler<FindPasswordFormValues> = (emailObj) => {
    postFindPassword(emailObj, {
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404)
          return setError("email", { type: "custom", message: "가입되지 않은 이메일 입니다." });
        if (axios.isAxiosError(error) && error.response?.status === 409)
          return setError("email", { type: "custom", message: "카카오 로그인으로만 가입된 회원입니다." });
        return setError("email", { type: "custom", message: "이메일을 확인 후 다시 시도해주세요." });
      },
      onSuccess: () => {
        setToastMessage("입력하신 이메일로 임시 비밀번호가 발급되었습니다");

        if (actionBarHandlers.previousHandler) {
          actionBarHandlers.previousHandler();
        }
      },
    });
  };

  return (
    <div css={cssObj.wrapper}>
      <ActionBar title="비밀번호 찾기" {...actionBarHandlers} />
      <Divider css={cssObj.mobileDivider} />
      <div css={cssObj.emailWrapper}>
        <form>
          <Input
            label="이메일"
            {...register("email", {
              required: EMAIL_ERROR_MESSAGE.REQUIRED,
              pattern: {
                value: EMAIL_REGEXP,
                message: EMAIL_ERROR_MESSAGE.REGEX,
              },
            })}
            underline={isMobile}
            state={errors.email ? { state: "error", message: errors.email.message } : undefined}
            placeholder="이메일을 입력해주세요."
          />
        </form>
      </div>
      <div css={cssObj.buttonGroupWrapper}>
        {!isMobile && (
          <Button size="large" color="outlineGray" fill={isMobile} onClick={actionBarHandlers.previousHandler}>
            로그인 하러가기
          </Button>
        )}
        <Button type="submit" size="large" fill={isMobile} onClick={handleSubmit(findPasswordSubmit)}>
          비밀번호 찾기
        </Button>
      </div>
    </div>
  );
};

export default FindPassword;
