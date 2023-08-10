import { FunctionComponent } from "react";

import { commonCssObj } from "@/styles";
import { companyAuthDocsClickEvent } from "@/ga";

import { FILE_SIZE_5MB } from "../contant";
import useFileNameSyncWithForm from "../../useFileNameSyncWithForm";
import { AuthInfoPartProps } from "./type";
import { CERTIFICATION_FILE_KEY } from "./constant";
import { cssObj } from "./style";

export const InfoPart: FunctionComponent<AuthInfoPartProps> = ({ companyAuthForm, companyDetailData }) => {
  const {
    register,
    formState: { errors },
  } = companyAuthForm;

  const { name: certFileName } = useFileNameSyncWithForm(companyAuthForm, CERTIFICATION_FILE_KEY, {
    maxSize: FILE_SIZE_5MB * 2,
    allowedfileTypes: ["image/jpg", "image/jpeg", "application/pdf"],
  });

  const [firstBusinessNumber, secondBusinessNumber, thirdBusinessNumber] = companyDetailData.businessNumber.split("-");

  return (
    <div css={cssObj.partContainer}>
      <h3 css={cssObj.subContainerTitle}>인증 정보</h3>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.optionalInputTitle(false)}>기업명</strong>
        <input type="text" value={companyDetailData.name} disabled css={commonCssObj.input(7.5, false)} />
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.optionalInputTitle(false)}>사업자번호</strong>
        <input type="number" value={firstBusinessNumber} disabled css={commonCssObj.input(7.5, false)} />
        <span css={cssObj.dash}>-</span>
        <input type="number" value={secondBusinessNumber} disabled css={commonCssObj.input(7.5, false)} />
        <span css={cssObj.dash}>-</span>
        <input type="number" value={thirdBusinessNumber} disabled css={commonCssObj.input(7.5, false)} />
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.inputTitle(false)}>사업자증명원</strong>
        <div css={cssObj.errorWrapper}>
          <input
            disabled
            value={certFileName}
            placeholder="파일형식: jpg, jpeg, pdf / 파일 용량: 10MB"
            css={cssObj.customInput(38, !!errors.certificateOfBusiness)}
          />
          {errors.certificateOfBusiness && <div css={cssObj.certFileError}>{errors.certificateOfBusiness.message}</div>}
        </div>
        <label htmlFor={CERTIFICATION_FILE_KEY} css={cssObj.fileAddButton}>
          파일 첨부
          <input
            type="file"
            id={CERTIFICATION_FILE_KEY}
            {...register(CERTIFICATION_FILE_KEY, {
              required: { value: true, message: "* 사업자 증명원 파일을 등록해 주세요." },
            })}
            onClick={() => {
              companyAuthDocsClickEvent();
            }}
          />
        </label>
      </div>
    </div>
  );
};
