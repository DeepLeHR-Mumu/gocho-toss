import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input } from "shared-ui/deeple-ds";
import { cssObj } from "./style";
import { usePatchUserPassword } from "@/apis/auth";
import { PwdChangeFormProps, PwdInputForm } from "./type";

export const PwdChangeForm: FC<PwdChangeFormProps> = ({ userData, handleFormClose }) => {
  const { mutate: patchPassword } = usePatchUserPassword();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<PwdInputForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<PwdInputForm> = (data) => {
    if (!userData) return;

    patchPassword(
      {
        userId: userData?.id,
        origin_password: data.originPassword,
        new_password: data.newPassword,
      },
      {
        onError: () => {
          setError("originPassword", { type: "custom", message: "" });
        },
        onSuccess: () => {
          // TODO: 토스트로 변경하기
          alert("비밀번호 변경 성공");
          handleFormClose();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={cssObj.formBox}>
        <div css={cssObj.inputBox}>
          <p>기존 비밀번호</p>
          <Input
            type="password"
            css={cssObj.inputBox}
            state={{
              state: errors.originPassword ? "error" : "default",
              message: errors.originPassword ? "기존의 비밀번호랑 일치하지 않습니다." : "",
            }}
            placeholder="기존의 비밀번호를 입력해 주세요"
            {...register("originPassword", {
              required: true,
            })}
          />
        </div>
        <div css={cssObj.inputBox}>
          <p>새로운 비밀번호</p>
          <Input
            type="password"
            css={cssObj.inputBox}
            placeholder="새로운 비밀번호를 입력해 주세요"
            {...register("newPassword", {
              required: true,
              minLength: { value: 8, message: "8자 이상 입력해주세요." },
              maxLength: { value: 20, message: "최대 20자 까지 입력 가능합니다." },
            })}
            state={{
              state: errors.newPassword ? "error" : "default",
              message: errors.newPassword ? errors.newPassword.message : "",
            }}
          />
        </div>
        <div css={cssObj.inputBox}>
          <p>비밀번호 확인</p>
          <Input
            type="password"
            css={cssObj.inputBox}
            placeholder="한번 더 새로운 비밀번호를 입력해 주세요"
            {...register("checkPassword", {
              required: true,
              minLength: { value: 8, message: "8자 이상 입력해주세요." },
              maxLength: { value: 20, message: "20자까지 입력 가능합니다." },
              validate: (checkPassword, formValues) => {
                return checkPassword === formValues.newPassword;
              },
            })}
            state={{
              state: errors.checkPassword ? "error" : "default",
              message: errors.checkPassword ? "새로운 비밀번호랑 동일하지 않습니다." : "",
            }}
          />
        </div>
      </div>

      <div css={cssObj.submitBox}>
        <Button size="small" type="submit" color={isValid ? "active" : "disable"}>
          저장하기
        </Button>
      </div>
    </form>
  );
};
