import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { useAddCompany } from "@api/company/useAddCompany";
import { mainContainer, pageTitle } from "@style/commonStyles";

import { FactoryBox } from "@pages/company/upload/component/factoryBox";
import { CompanyFormValues } from "./type";
import { industryArr, sizeArr, welfareArr, blankFactory } from "./constant";

import {
  formContainer,
  sectionContainer,
  sectionTitle,
  inputContainer,
  inputTitle,
  selectBox,
  inputBox,
  logoUploadLabel,
  imageInput,
  logoPreviewContainer,
  enterNotice,
  flexBox,
  welfareBox,
  welfareInputBox,
  inputLabel,
  booleanInputBox,
  checkboxText,
  addFactoryButton,
  submitButton,
  welfareWrapper,
  checkMsgBox,
} from "./style";

const CompanyUpload: NextPage = () => {
  const queryClient = useQueryClient();

  const [logoPicture, setLogoPicture] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { mutate } = useAddCompany();

  const { register, control, handleSubmit, watch } = useForm<CompanyFormValues>({
    defaultValues: {
      nozo: { exists: false, desc: null },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "factories",
  });

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

  const companySubmit: SubmitHandler<CompanyFormValues> = (companyObj) => {
    const formData = new FormData();
    const json = JSON.stringify(companyObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    if (logoPicture) {
      formData.append("img", logoPicture);
      mutate(
        { dto: blob, image: logoPicture },
        {
          onSuccess: () => {
            queryClient.invalidateQueries();
            setCheckMsg("기업이 업로드 되었습니다!");
          },

          onError: () => {
            setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
          },
        }
      );
    }
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 등록</h2>
      <form css={formContainer} onSubmit={handleSubmit(companySubmit)}>
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
                type="file"
                id="logoImg"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                onChange={onUploadLogo}
                style={{ display: "none" }}
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
            <input type="number" css={inputBox} {...register("business_number", { required: true })} />
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
            <label css={inputLabel} htmlFor="노조유무">
              <input type="checkbox" id="노조유무" {...register("nozo.exists", {})} />
              <CheckBox isChecked={watch("nozo.exists")} /> <p css={checkboxText}>있음</p>
              <CheckBox isChecked={!watch("nozo.exists")} /> <p css={checkboxText}>없음</p>
            </label>
            <input
              css={booleanInputBox(!watch("nozo.exists"))}
              disabled={!watch("nozo.exists")}
              {...register("nozo.desc", {})}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>캐치 URL *</strong>
            <input type="url" css={inputBox} {...register("catch_url", { required: true })} />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>유투브 URL</strong>
            <input type="url" css={inputBox} {...register("youtube_url")} />
          </div>
        </section>
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
        <ul>
          {fields.map((item, index) => {
            return <FactoryBox key={item.id} index={index} register={register} watch={watch} remove={remove} />;
          })}
        </ul>
        <button
          css={addFactoryButton}
          type="button"
          onClick={() => {
            append(blankFactory);
          }}
        >
          공장 추가
        </button>
        <button css={submitButton} type="submit">
          기업 등록하기
        </button>
        {checkMsg && <p css={checkMsgBox}>{checkMsg}</p>}
      </form>
    </main>
  );
};

export default CompanyUpload;
