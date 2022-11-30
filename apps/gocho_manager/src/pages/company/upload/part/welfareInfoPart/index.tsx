import { FunctionComponent } from "react";
import {
  enterNotice,
  flexBox,
  inputTitle,
  sectionContainer,
  sectionTitle,
  welfareBox,
  welfareInputBox,
  welfareWrapper,
} from "./style";
import { WelfareInfoPartProps } from "./type";
import { welfareArr } from "./constant";

export const WelfareInfoPart: FunctionComponent<WelfareInfoPartProps> = ({ register }) => {
  return (
    <section css={sectionContainer}>
      <div css={flexBox}>
        <h3 css={sectionTitle}>복지 정보</h3>
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={welfareWrapper}>
        {welfareArr.map((welfare) => {
          return (
            <div key={welfare.title} css={welfareBox}>
              <strong css={inputTitle}>{welfare.title}</strong>
              <textarea
                css={welfareInputBox}
                {...register(`${welfare.data}`, {
                  setValueAs: (v: string) => {
                    return v.split("\n");
                  },
                })}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
