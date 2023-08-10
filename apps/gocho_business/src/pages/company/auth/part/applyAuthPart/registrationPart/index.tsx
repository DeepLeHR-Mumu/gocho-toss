import { FunctionComponent, useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

import { commonCssObj } from "@/styles";
import { companyAuthLogoClickEvent } from "@/ga";

import { Tooltip } from "../../../component/tooltip";
import useFileNameSyncWithForm from "../../useFileNameSyncWithForm";
import { cssObj } from "./style";
import { RegistrationPartProps } from "./type";

export const RegistrationPart: FunctionComponent<RegistrationPartProps> = ({ companyAuthForm }) => {
  const [logoTooltip, setLogoTooltip] = useState(false);
  const [bgImageTooltip, setBgImageTooltip] = useState(false);

  const {
    register,
    formState: { errors },
  } = companyAuthForm;

  const companyLogoKey = "companyLogo";
  const backgroundImageKey = "backgroundImage";

  const { name: logoImgName } = useFileNameSyncWithForm(companyAuthForm, companyLogoKey, {
    maxSize: 5242880,
    allowedfileTypes: ["image/jpg", "image/jpeg", "image/png"],
  });

  const { name: bgImgName } = useFileNameSyncWithForm(companyAuthForm, backgroundImageKey, {
    maxSize: 5242880,
    allowedfileTypes: ["image/jpg", "image/jpeg", "image/png"],
  });

  return (
    <div css={cssObj.partContainer}>
      <h3 css={cssObj.subContainerTitle}>기업 등록</h3>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.inputTitle(false)}>기업 한줄 소개</strong>
        <div css={cssObj.errorWrapper}>
          <input
            type="text"
            maxLength={30}
            css={commonCssObj.input(47, !!errors.intro)}
            {...register("intro", { required: { value: true, message: "* 기업 한줄 소개를 입력해 주세요." } })}
          />
          {errors.intro && <p css={cssObj.errorMessageBottom}>{errors.intro.message}</p>}
        </div>
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.inputTitle(false)}>
          기업 로고
          <div
            css={cssObj.tooltipWrapper}
            onMouseEnter={() => setLogoTooltip(true)}
            onMouseLeave={() => setLogoTooltip(false)}
          >
            <FiHelpCircle css={cssObj.svg} />
            {logoTooltip && <Tooltip>채용 공고와 기업 페이지 내 기업 프로필 사진으로 등록될 이미지 입니다.</Tooltip>}
          </div>
        </strong>
        <div css={cssObj.errorWrapper}>
          <input
            disabled
            value={logoImgName}
            placeholder="파일형식: jpg, jpeg, png / 파일 용량: 5MB"
            css={cssObj.customInput(38, !!errors.companyLogo)}
          />
          {errors.companyLogo && <p css={cssObj.errorMessageBottom}>{errors.companyLogo.message}</p>}
        </div>
        <label htmlFor={companyLogoKey} css={cssObj.fileAddButton}>
          파일 첨부
          <input
            type="file"
            id={companyLogoKey}
            {...register(companyLogoKey, { required: { value: true, message: "* 기업 로고 파일을 등록해 주세요." } })}
            onClick={() => {
              companyAuthLogoClickEvent();
            }}
          />
        </label>
      </div>
      <div css={cssObj.subContainer}>
        <strong css={commonCssObj.optionalInputTitle(false)}>
          배경 이미지
          <div
            css={cssObj.tooltipWrapper}
            onMouseEnter={() => setBgImageTooltip(true)}
            onMouseLeave={() => setBgImageTooltip(false)}
          >
            <FiHelpCircle css={cssObj.svg} />
            {bgImageTooltip && <Tooltip>채용 공고와 기업 페이지 내 기업 프로필 사진으로 등록될 이미지 입니다.</Tooltip>}
          </div>
        </strong>
        <input
          disabled
          value={bgImgName}
          placeholder="파일형식: jpg, jpeg, png / 파일 용량: 5MB"
          css={cssObj.customInput(38, false)}
        />
        <label htmlFor={backgroundImageKey} css={cssObj.fileAddButton}>
          파일 첨부
          <input type="file" id={backgroundImageKey} {...register(backgroundImageKey)} />
        </label>
      </div>
    </div>
  );
};
