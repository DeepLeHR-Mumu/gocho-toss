import { FunctionComponent } from "react";

import { commonCssObj } from "@/styles";

import useFileNameSyncWithForm from "../useFileNameSyncWithForm.ts";
// import { isFileList } from "../applyAuthPart/util";
import { AuthInfoPartProps } from "./type";
import { cssObj } from "./style";

export const AuthInfoPart: FunctionComponent<AuthInfoPartProps> = ({ companyAuthForm, companyDetailData }) => {
  const { register } = companyAuthForm;

  const { name: certFileName } = useFileNameSyncWithForm(companyAuthForm, "certificateOfBusiness", {
    maxSize: 5242880,
    allowedfileTypes: ["image/jpg", "image/jpeg", "application/pdf"],
  });

  const [firstBusinessNumber, secondBusinessNumber, thirdBusinessNumber] = companyDetailData.businessNumber.split("-");

  return (
    <div css={cssObj.partContainer}>
      <h3 css={cssObj.subContainerTitle}>인증 정보</h3>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.optionalInputTitle(false)}>기업명</strong>
        <input type="text" value={companyDetailData.name} disabled css={cssObj.customInput(7.5, false)} />
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.optionalInputTitle(false)}>사업자번호</strong>
        <input type="number" value={firstBusinessNumber} disabled css={cssObj.customInput(7.5, false)} />
        <span css={cssObj.dash}>-</span>
        <input type="number" value={secondBusinessNumber} disabled css={cssObj.customInput(7.5, false)} />
        <span css={cssObj.dash}>-</span>
        <input type="number" value={thirdBusinessNumber} disabled css={cssObj.customInput(7.5, false)} />
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.inputTitle(false)}>사업자증명원</strong>
        <input
          disabled
          value={certFileName}
          // {...register("location.address", { required: true })}
          placeholder="파일형식: jpg, jpeg, pdf / 파일 용량: 5MB"
          css={commonCssObj.input(38, false)}
        />
        <label htmlFor="certificateOfBusiness" css={cssObj.fileAddButton}>
          파일 첨부
          <input type="file" id="certificateOfBusiness" {...register("certificateOfBusiness", { required: true })} />
        </label>
      </div>
    </div>
  );
};
