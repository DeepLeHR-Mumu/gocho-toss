import { FunctionComponent } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "shared-ui/deeple-ds";

import { NickChangeFormProps } from "./type";
import { cssObj } from "./style";

type Inputs = {
  nickName: string;
};

export const NickChangeForm: FunctionComponent<NickChangeFormProps> = ({ userData, handleNickFormOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    // console.log(data);
    handleNickFormOpen();
  };

  return (
    <form css={cssObj.formBox} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          css={cssObj.inputBox}
          defaultValue={userData?.nickname}
          placeholder={userData?.nickname}
          {...register("nickName", {
            required: true,
            minLength: 5,
            maxLength: 10,
          })}
        />
        {errors.nickName && <span>This field is required</span>}
      </div>
    </form>
  );
};
