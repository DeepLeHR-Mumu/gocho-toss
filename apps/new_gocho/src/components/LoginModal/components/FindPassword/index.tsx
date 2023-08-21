import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { Input, Button } from "shared-ui/deeple-ds";
import { useFindPassword } from "shared-api/auth";
import { RequestObjDef as FindPasswordFormValues } from "shared-api/auth/useFindPassword/type";
import { EMAIL_ERROR_MESSAGE, EMAIL_REGEXP } from "shared-constant";

import ActionBar from "../ActionBar";

import { FindPasswordProps } from "./type";
import { cssObj } from "./style";

const FindPassword = ({ ...actionBarHandlers }: FindPasswordProps) => {
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
        // TODO 비밀번호 찾기 성공 시 로직 추가
      },
    });
  };

  return (
    <div css={cssObj.wrapper}>
      <ActionBar title="비밀번호 찾기" {...actionBarHandlers} />
      <div css={cssObj.emailWrapper}>
        <form>
          <Input
            label="이메일"
            {...register("email", {
              pattern: {
                value: EMAIL_REGEXP,
                message: EMAIL_ERROR_MESSAGE.REGEX,
              },
            })}
            state={errors.email ? { state: "error", message: errors.email.message } : undefined}
          />
        </form>
      </div>
      <div css={cssObj.buttonGroupWrapper}>
        <Button
          size="large"
          color="outlineGray"
          onClick={(e) => {
            if (actionBarHandlers.previousHandler) actionBarHandlers.previousHandler(e);
          }}
        >
          로그인 하러가기
        </Button>
        <Button type="submit" size="large" onClick={handleSubmit(findPasswordSubmit)}>
          비밀번호 찾기
        </Button>
      </div>
    </div>
  );
};

export default FindPassword;
