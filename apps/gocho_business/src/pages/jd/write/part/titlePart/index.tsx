import { FunctionComponent } from "react";
import { TitlePartProps } from "./type";

import { cssObj } from "./style";

export const TitlePart: FunctionComponent<TitlePartProps> = ({ jobForm }) => {
  const {
    setValue,
    formState: { errors },
    register,
    clearErrors,
  } = jobForm;

  return (
    <section css={cssObj.partContainer}>
      <p css={cssObj.inputTitle}>공고 제목을 입력해 주세요</p>
      <input
        css={cssObj.input(Boolean(errors.title))}
        placeholder="공고 제목 (최대 50자)"
        maxLength={50}
        onFocus={() => {
          clearErrors("title");
        }}
        {...register("title", {
          required: "공고 제목은 필수 입력 사항입니다",
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