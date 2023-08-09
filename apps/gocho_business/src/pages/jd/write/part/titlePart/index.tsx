import { FunctionComponent } from "react";
import { jdTitleClickEvent } from "@/ga";
import { TitlePartProps } from "./type";

import { cssObj } from "./style";

export const TitlePart: FunctionComponent<TitlePartProps> = ({ jdForm }) => {
  const {
    setValue,
    formState: { errors },
    register,
    clearErrors,
  } = jdForm;

  return (
    <section css={cssObj.partContainer}>
      <p css={cssObj.inputTitle}>공고 제목을 입력해 주세요</p>
      <input
        css={cssObj.input(Boolean(errors.title))}
        placeholder="공고 제목 (최대 50자)"
        maxLength={50}
        onClick={() => {
          jdTitleClickEvent();
        }}
        onFocus={() => {
          clearErrors("title");
        }}
        {...register("title", {
          required: "공고 제목은 필수 입력 사항입니다",
          maxLength: { value: 50, message: "최대 길이는 50자입니다." },
          onBlur: (blurEvent) => {
            if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
              setValue("title", "");
            }
          },
        })}
      />
    </section>
  );
};
