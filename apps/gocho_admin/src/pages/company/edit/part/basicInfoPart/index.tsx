import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Image from "next/image";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import dayjs from "dayjs";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { CheckBox } from "shared-ui/common/checkbox";
import { Checkbox } from "shared-ui/deeple-ds";

import {
  booleanInputBox,
  checkboxText,
  imageInput,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  currentLogo,
  logoPreviewContainer,
  logoUploadLabel,
  imageUploadInput,
  sectionContainer,
  sectionTitle,
  selectBox,
  addressButton,
  optionList,
  option,
} from "./style";
import { BasicInfoPartProps } from "./type";
import { industryArr, sizeArr } from "./constant";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({
  register,
  watch,
  setValue,
  companyLogo,
  setLogo,
  setBgImage,
}) => {
  const [isIndustryOpen, setIsIndustryOpen] = useState<boolean>(false);
  const [logoPreview, setLogoPreview] = useState<string>();
  const [bgImagePreview, setBgImagePreview] = useState<string>();

  const openPostCodePopup = useDaumPostcodePopup();

  const onUploadImage = async (
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

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("location.address", addressObj.address);
        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(addressObj.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const { x, y } = result[0];
              setValue("location.x", x);
              setValue("location.y", y);
            }
          });
        });
      },
    });
  };

  return (
    <section css={sectionContainer}>
      <h3 css={sectionTitle}>일반 기업 정보</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업명 *</strong>
        <input css={inputBox} {...register("name", { required: true })} />
      </div>
      <div css={imageInput}>
        <strong css={inputTitle}>기존 로고</strong>
        <div css={currentLogo}>
          <Image fill sizes="1" src={companyLogo || defaultCompanyLogo} alt="" />
        </div>
      </div>
      <div css={imageInput}>
        <div css={inputContainer}>
          <strong css={inputTitle}>기업 로고</strong>
          <label css={logoUploadLabel} htmlFor="logoImg">
            로고 업로드
            <input
              css={imageUploadInput}
              type="file"
              id="logoImg"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(changeEvent) => onUploadImage(changeEvent, setLogo, setLogoPreview)}
            />
          </label>
          {logoPreview && (
            <div css={logoPreviewContainer}>
              <Image fill sizes="1" src={logoPreview} alt="" />
            </div>
          )}
        </div>
        <div css={inputContainer}>
          <strong css={inputTitle}>배경 이미지</strong>
          <label css={logoUploadLabel} htmlFor="bgImg">
            로고 업로드
            <input
              css={imageUploadInput}
              type="file"
              id="bgImg"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={(changeEvent) => onUploadImage(changeEvent, setBgImage, setBgImagePreview)}
            />
          </label>
          {bgImagePreview && (
            <div css={logoPreviewContainer}>
              <Image fill sizes="1" src={bgImagePreview} alt="" />
            </div>
          )}
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>사업자번호 *</strong>
        <input type="number" css={inputBox} {...register("business_number", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>업종 *</strong>
        <button
          css={selectBox}
          type="button"
          onClick={() => {
            setIsIndustryOpen((prev) => !prev);
          }}
        >
          {watch("industry") && watch("industry").length !== 0 ? (
            <span>{watch("industry").join(", ")}</span>
          ) : (
            <span>선택</span>
          )}
        </button>
        <div css={optionList(isIndustryOpen)}>
          {industryArr.map((industryText) => (
            <div css={option} key={industryText}>
              <Checkbox
                checked={watch("industry")?.includes(industryText)}
                onClick={(e) => {
                  if (e.currentTarget.checked) {
                    if (watch("industry").length === 2) {
                      return;
                    }
                    const newIndustryArr = watch("industry").concat(industryText);
                    setValue(`industry`, newIndustryArr);
                    return;
                  }
                  const newIndustryArr = watch("industry").filter((industry) => industry !== industryText);
                  setValue(`industry`, newIndustryArr);
                }}
              />
              {industryText}
            </div>
          ))}
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업 형태 *</strong>
        <select css={selectBox} {...register("size", { required: true })}>
          <option value="">기업 규모 선택 ▼</option>
          {sizeArr.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>설립일 *</strong>
        <input
          type="date"
          css={inputBox}
          {...register("found_date", {
            required: true,
            setValueAs: (d: Date) => {
              const date = new Date(d);
              return dayjs(date, "YYYY-MM-DDTHH:mm:ss");
            },
          })}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>사원수 *</strong>
        <input type="number" css={inputBox} {...register("employee_number", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>한 줄 소개 *</strong>
        <input css={inputBox} {...register("intro", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업 주소 *</strong>
        <input
          type="button"
          onClick={onClickAddress}
          css={inputBox}
          {...register("location.address", { required: true })}
        />
        <button type="button" css={addressButton} onClick={onClickAddress}>
          기업주소 찾기
        </button>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>노조 *</strong>
        <label css={inputLabel} htmlFor="nozo">
          <input type="checkbox" id="nozo" {...register("nozo.exists", {})} />
          <CheckBox isChecked={watch("nozo.exists")} /> <p css={checkboxText}>있음</p>
          <CheckBox isChecked={!watch("nozo.exists")} /> <p css={checkboxText}>없음</p>
        </label>
        <input
          css={booleanInputBox(!watch("nozo.exists"))}
          disabled={!watch("nozo.exists")}
          {...register("nozo.desc")}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>유투브 URL</strong>
        <input type="url" css={inputBox} {...register("youtube_url")} />
      </div>
    </section>
  );
};
