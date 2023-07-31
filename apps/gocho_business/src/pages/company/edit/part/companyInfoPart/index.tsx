import { ChangeEvent, Dispatch, FocusEvent, FunctionComponent, SetStateAction, useState } from "react";
import Image from "next/image";
import { FiEdit3, FiX, FiEye, FiUserCheck } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import defaultCompanyBg from "shared-image/global/common/default_company_bg.webp";

import { useCountInfo, useManagerProfile } from "@/apis";
import { commonCssObj } from "@/styles";

import { cssObj } from "./style";
import { CompanyInfoProps } from "./type";

export const CompanyInfoPart: FunctionComponent<CompanyInfoProps> = ({
  companyForm,
  companyData,
  setBgImage,
  setLogo,
}) => {
  const [bgImagePreview, setBgImagePreview] = useState<string>();
  const [logoPreview, setLogoPreview] = useState<string>();

  const { data: userInfoData } = useManagerProfile();
  const { data: countInfoData } = useCountInfo({ companyId: userInfoData?.company.id });

  const {
    register,
    setValue,
    formState: { errors },
  } = companyForm;

  if (!userInfoData || !countInfoData) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const uploadImageHandler = async (
    changeEvent: ChangeEvent<HTMLInputElement>,
    setFile: Dispatch<SetStateAction<File | undefined>>,
    setPreview: Dispatch<SetStateAction<string | undefined>>
  ) => {
    const reader = new FileReader();

    if (changeEvent.target.files?.[0]) {
      const img = changeEvent.target.files[0];
      setFile(img);

      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  const deleteImageHandler = (
    setFile: Dispatch<SetStateAction<File | undefined>>,
    setPreview: Dispatch<SetStateAction<string | undefined>>
  ) => {
    setFile(undefined);
    setPreview(undefined);
  };

  const countFormat = new Intl.NumberFormat("ko", { notation: "compact", compactDisplay: "long" });

  return (
    <section css={cssObj.partContainer} data-testid="company/edit/CompanyInfoPart">
      <div css={cssObj.backgroundWrapper}>
        <label htmlFor="bgImg" css={cssObj.imageUploadLabel(1, 4.25)}>
          <FiEdit3 />
          <input
            css={cssObj.imageUploadInput}
            type="file"
            id="bgImg"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={(changeEvent) => uploadImageHandler(changeEvent, setBgImage, setBgImagePreview)}
          />
        </label>
        <button
          type="button"
          css={cssObj.imageUploadLabel(1, 1.25)}
          onClick={() => deleteImageHandler(setBgImage, setBgImagePreview)}
        >
          <FiX />
        </button>
        {bgImagePreview ? (
          <div css={cssObj.logoPreviewContainer}>
            <Image fill src={bgImagePreview} alt="" />
          </div>
        ) : (
          <div css={cssObj.logoPreviewContainer}>
            <Image fill src={companyData.backgroundImage || defaultCompanyBg} alt="" />
          </div>
        )}
      </div>
      <div css={cssObj.companyInfoWrapper}>
        {logoPreview ? (
          <button
            type="button"
            css={cssObj.imageUploadLabel(9.25, 50.5)}
            onClick={() => deleteImageHandler(setLogo, setLogoPreview)}
          >
            <FiX />
          </button>
        ) : (
          <label htmlFor="logoImg" css={cssObj.imageUploadLabel(9.25, 50.5)}>
            <FiEdit3 />
            <input
              css={cssObj.imageUploadInput}
              type="file"
              id="logoImg"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(changeEvent) => uploadImageHandler(changeEvent, setLogo, setLogoPreview)}
            />
          </label>
        )}
        <div css={cssObj.logoBox}>
          {logoPreview ? (
            <Image src={logoPreview} alt={companyData.name} fill sizes="1" />
          ) : (
            <Image src={companyData.logo || defaultCompanyLogo} alt={companyData.name} fill sizes="1" />
          )}
        </div>
        <p css={cssObj.count}>
          <FiEye />
          {countFormat.format(countInfoData.view)}
        </p>
        <p css={cssObj.count}>
          <FiUserCheck /> {countFormat.format(countInfoData.bookmark)}
        </p>
        <div css={cssObj.companyContainer}>
          <strong css={cssObj.companyName}>{companyData.name}</strong>
          <p css={cssObj.businessNumber}>
            사업자 번호<span>{companyData.businessNumber}</span>
          </p>
        </div>
        <div css={cssObj.inputWrapper}>
          <input
            type="text"
            {...register("intro", {
              required: "* 한 줄 소개를 입력해주세요.",
              maxLength: {
                value: 120,
                message: "최대 길이는 120자입니다",
              },
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (onBlurEvent.target.value.trim().length === 0) {
                  setValue("intro", "");
                }
              },
            })}
            placeholder="한 줄로 기업을 소개해주세요"
            css={commonCssObj.input(41, Boolean(errors.intro))}
          />
          <p css={commonCssObj.errorMessage}>{errors.intro?.message}</p>
        </div>
      </div>
    </section>
  );
};
