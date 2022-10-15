import type { NextPage } from "next";
import Image from "next/image";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { useAddCompany } from "@api/company/useAddCompany";
import { useUploadLogo } from "@api/upload/useUploadLogo";
import { mainContainer, pageTitle } from "@style/commonStyles";

import { ChangeEvent, useState } from "react";
import { CompanyFormValues } from "./type";
import { industryArr, sizeArr, welfareArr } from "./constant";

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
  factoryContainer,
  factoryTitle,
  booleanInputBox,
  checkboxText,
  deleteFactoryButton,
  addFactoryButton,
  submitButton,
  welfareWrapper,
} from "./style";

const CompanyUpload: NextPage = () => {
  const [imageSrc, setImageSrc] = useState<string>();
  const [logoData, setLogoData] = useState<FormData>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { mutate: mutateCompany } = useAddCompany();
  const { mutate: mutateLogo } = useUploadLogo();

  const { register, control, handleSubmit, watch, setValue } = useForm<CompanyFormValues>({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "factories",
  });

  const onUploadLogo = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      const img = e.target.files[0];
      formData.append("logo", img);
      setLogoData(formData);

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  const logoSubmit = () => {
    if (logoData) {
      mutateLogo(
        { logo: logoData },
        {
          onSuccess: (response) => {
            // console.log(response.data);
            setValue("file_id", response.data);
            setCheckMsg("업로드 되었습니다!");
          },
        }
      );
    }
  };

  const companySubmit: SubmitHandler<CompanyFormValues> = async (companyObj) => {
    mutateCompany(companyObj, {});
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 등록</h2>
      <form css={formContainer} onSubmit={handleSubmit(companySubmit)}>
        <section css={sectionContainer}>
          <h3 css={sectionTitle}>일반 기업 정보</h3>
          <div css={inputContainer}>
            <strong css={inputTitle}>기업명</strong>
            <input
              css={inputBox}
              {...register("name", {
                required: true,
              })}
            />
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
            <button type="button" css={logoUploadLabel} onClick={logoSubmit}>
              {checkMsg || "서버에 올리기"}
            </button>
            <p css={enterNotice}>로고 업로드 후 반드시 서버에 올리기 버튼을 눌러주세요!</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>업종</strong>
            <select
              css={selectBox}
              {...register("industry", {
                required: true,
              })}
            >
              <option value="">업종 선택 ▼</option>
              {industryArr.map((industry) => {
                return <option value={industry}>{industry}</option>;
              })}
            </select>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기업 형태</strong>
            <select
              css={selectBox}
              {...register("size", {
                required: true,
              })}
            >
              <option value="">기업 규모 선택 ▼</option>
              {sizeArr.map((size) => {
                return <option value={size}>{size}</option>;
              })}
            </select>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>설립일</strong>
            <input
              type="date"
              css={inputBox}
              {...register("found_date", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>사원수</strong>
            <input
              type="number"
              css={inputBox}
              {...register("employee_number", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>한 줄 소개</strong>
            <input
              css={inputBox}
              {...register("intro", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기업 주소</strong>
            <input
              css={inputBox}
              {...register("address", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>노조</strong>
            <label css={inputLabel} htmlFor="노조유무">
              <input
                type="checkbox"
                id="노조유무"
                {...register("nozo.exists", {
                  required: true,
                })}
              />
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
            <strong css={inputTitle}>캐치 URL</strong>
            <input
              type="url"
              css={inputBox}
              {...register("catch_url", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>유투브 URL</strong>
            <input type="url" css={inputBox} {...register("youtube_url", {})} />
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
                <div css={welfareBox}>
                  <strong css={inputTitle}>{welfare.title}</strong>
                  <textarea
                    css={welfareInputBox}
                    {...register(`${welfare.data}`, {
                      // required: true,
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
              <strong css={inputTitle}>평균 초봉</strong>
              <input
                type="number"
                css={inputBox}
                {...register("pay_start", {
                  required: true,
                })}
              />
            </div>
            <div css={welfareBox}>
              <strong css={inputTitle}>평균 연봉</strong>
              <input
                type="number"
                css={inputBox}
                {...register("pay_avg", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기타 연봉 정보</strong>
            <input css={inputBox} {...register("pay_desc", {})} />
          </div>
        </section>
        <ul>
          {fields.map((item, index) => {
            return (
              <li css={factoryContainer} key={item.id}>
                <h3 css={factoryTitle}>공장 정보</h3>
                <div css={inputContainer}>
                  <strong css={inputTitle}>공장 이름</strong>
                  <input
                    css={inputBox}
                    {...register(`factories.${index}.factory_name`, {
                      required: true,
                    })}
                  />
                </div>
                <div css={inputContainer}>
                  <strong css={inputTitle}>공장 주소</strong>
                  <input
                    css={inputBox}
                    {...register(`factories.${index}.address`, {
                      required: true,
                    })}
                  />
                </div>
                <div css={inputContainer}>
                  <div css={welfareBox}>
                    <strong css={inputTitle}>남자 임직원</strong>
                    <input
                      type="number"
                      css={inputBox}
                      {...register(`factories.${index}.male_number`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div css={welfareBox}>
                    <strong css={inputTitle}>여자 임직원</strong>
                    <input
                      type="number"
                      css={inputBox}
                      {...register(`factories.${index}.female_number`, {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div css={inputContainer}>
                  <strong css={inputTitle}>생산품</strong>
                  <input
                    css={inputBox}
                    {...register(`factories.${index}.product`, {
                      required: true,
                    })}
                  />
                </div>
                <div css={inputContainer}>
                  <strong css={inputTitle}>통근버스</strong>
                  <label css={inputLabel} htmlFor={`버스유무${index}`}>
                    <input
                      type="checkbox"
                      id={`버스유무${index}`}
                      {...register(`factories.${index}.bus_bool`, {
                        required: true,
                      })}
                    />
                    <CheckBox isChecked={watch("factories")[index].bus_bool} /> <p css={checkboxText}>있음</p>
                    <CheckBox isChecked={!watch("factories")[index].bus_bool} /> <p css={checkboxText}>없음</p>
                  </label>
                  <input
                    css={booleanInputBox(!watch("factories")[index].bus_bool)}
                    disabled={!watch("factories")[index].bus_bool}
                    {...register(`factories.${index}.bus_etc`, {
                      required: true,
                    })}
                  />
                </div>
                <div css={inputContainer}>
                  <strong css={inputTitle}>기숙사</strong>
                  <label css={inputLabel} htmlFor={`기숙사유무${index}`}>
                    <input
                      type="checkbox"
                      id={`기숙사유무${index}`}
                      {...register(`factories.${index}.dormitory_bool`, {
                        required: true,
                      })}
                    />
                    <CheckBox isChecked={watch("factories")[index].dormitory_bool} /> <p css={checkboxText}>있음</p>
                    <CheckBox isChecked={!watch("factories")[index].dormitory_bool} /> <p css={checkboxText}>없음</p>
                  </label>
                  <input
                    css={booleanInputBox(!watch("factories")[index].dormitory_bool)}
                    disabled={!watch("factories")[index].dormitory_bool}
                    {...register(`factories.${index}.dormitory_etc`, {
                      required: true,
                    })}
                  />
                </div>
                <button
                  css={deleteFactoryButton}
                  type="button"
                  onClick={() => {
                    return remove(index);
                  }}
                >
                  공장 삭제
                </button>
              </li>
            );
          })}
        </ul>
        <button
          css={addFactoryButton}
          type="button"
          onClick={() => {
            append({
              factory_name: "",
              address: "",
              male_number: 0,
              female_number: 0,
              product: "",
              bus_bool: false,
              bus_etc: "",
              dormitory_bool: false,
              dormitory_etc: "",
            });
          }}
        >
          공장 추가
        </button>
        <button css={submitButton} type="submit">
          기업 등록하기
        </button>
      </form>
    </main>
  );
};

export default CompanyUpload;
