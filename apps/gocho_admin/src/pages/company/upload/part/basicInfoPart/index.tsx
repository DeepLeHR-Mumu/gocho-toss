import { ChangeEvent, FunctionComponent, useState } from "react";
import Image from "next/image";
import { CheckBox } from "shared-ui/common/atom/checkbox";

import {
  booleanInputBox,
  checkboxText,
  imageInput,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  logoPreviewContainer,
  logoUploadLabel,
  logoUploadInput,
  sectionContainer,
  sectionTitle,
  selectBox,
} from "./style";
import { BasicInfoPartProps } from "./type";
import { industryArr, sizeArr } from "./constant";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({ register, watch, setLogoPicture }) => {
  const [imageSrc, setImageSrc] = useState<string>();

  const onUploadLogo = async (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      const img = e.target.files[0];
      setLogoPicture(img);

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  return (
    <section css={sectionContainer}>
      <h3 css={sectionTitle}>일반 기업 정보</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업명 *</strong>
        <input css={inputBox} {...register("name", { required: true })} />
      </div>
      <div css={imageInput}>
        <strong css={inputTitle}>기업 로고</strong>
        <label css={logoUploadLabel} htmlFor="logoImg">
          로고 업로드
          <input
            css={logoUploadInput}
            type="file"
            id="logoImg"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={onUploadLogo}
          />
        </label>
        {imageSrc && (
          <div css={logoPreviewContainer}>
            <Image layout="fill" objectFit="contain" src={imageSrc} alt="" />
          </div>
        )}
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>사업자번호 *</strong>
        <input css={inputBox} {...register("business_number", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>업종 *</strong>
        <select css={selectBox} {...register("industry", { required: true })}>
          <option value="">업종 선택 ▼</option>
          {industryArr.map((industry) => {
            return (
              <option key={industry} value={industry}>
                {industry}
              </option>
            );
          })}
        </select>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업 형태 *</strong>
        <select css={selectBox} {...register("size", { required: true })}>
          <option value="">기업 규모 선택 ▼</option>
          {sizeArr.map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
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
              return date.getTime();
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
        <input css={inputBox} {...register("address", { required: true })} />
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
