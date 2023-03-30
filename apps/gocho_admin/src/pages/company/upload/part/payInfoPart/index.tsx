import { FunctionComponent } from "react";
import { inputBox, inputContainer, inputTitle, sectionContainer, sectionTitle, welfareBox } from "./style";
import { PayInfoPartProps } from "./type";

export const PayInfoPart: FunctionComponent<PayInfoPartProps> = ({ register }) => (
  <section css={sectionContainer}>
    <h3 css={sectionTitle}>연봉 정보</h3>
    <div css={inputContainer}>
      <div css={welfareBox}>
        <strong css={inputTitle}>평균 초봉 *</strong>
        <input type="number" css={inputBox} {...register("pay_start", { required: true })} />
      </div>
      <div css={welfareBox}>
        <strong css={inputTitle}>평균 연봉 *</strong>
        <input type="number" css={inputBox} {...register("pay_avg", { required: true })} />
      </div>
    </div>
    <div css={inputContainer}>
      <strong css={inputTitle}>기타 연봉 정보</strong>
      <input css={inputBox} {...register("pay_desc")} />
    </div>
  </section>
);
