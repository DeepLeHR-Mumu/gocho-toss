import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowUp } from "react-icons/fi";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { commonCssObj } from "@/styles";
import { useFindCompany } from "@/apis";
import {
  registerCompanyAddSearchClickEvent,
  registerCompanySearchClickEvent,
  registerCompanySearchNextClickEvent,
} from "@/ga";
import { FindCompanyPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const FindCompanyPart: FunctionComponent<FindCompanyPartProps> = ({ sliderRef }) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [isCompanyListOn, setIsCompanyListOn] = useState<boolean>(false);
  const [isBusinessNumberOn, setIsBusinessNumberOn] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { data: companyDataObj } = useFindCompany({ word: searchWord });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    registerCompanySearchNextClickEvent();

    const newFormData = {
      company: formData.company_id
        ? {
            company_id: formData.company_id,
            name: formData.company_name,
            business_number: isBusinessNumberOn
              ? formData.business_number_1 + formData.business_number_2 + formData.business_number_3
              : formData.business_number,
          }
        : {
            name: formData.company_name,
            business_number: isBusinessNumberOn
              ? formData.business_number_1 + formData.business_number_2 + formData.business_number_3
              : formData.business_number,
          },
    };
    sessionStorage.setItem("specObj", JSON.stringify(newFormData));
    sliderRef.current?.slickNext();
  };

  const selectCompanyHandler = (companyName: string, companyId: number, businessNumber: string) => {
    setSearchWord(companyName);
    setValue("company_name", companyName);
    setValue("company_id", companyId);
    setValue("business_number", businessNumber);
    setIsCompanyListOn(false);
    setIsBusinessNumberOn(false);
  };

  const addNewCompanyHandler = (companyName: string) => {
    setSearchWord(companyName);
    setValue("company_name", companyName);
    setIsCompanyListOn(false);
    setIsBusinessNumberOn(true);
  };

  const isCompanyName = Boolean(watch("company_name"));
  const isBusinessNumber = Boolean(
    watch("business_number") || (watch("business_number_1") && watch("business_number_2") && watch("business_number_3"))
  );
  const isBusinessNumberError = Boolean(
    errors.business_number_1 || errors.business_number_2 || errors.business_number_3
  );
  const isCompanyNotExist = isCompanyListOn && searchWord !== "" && companyDataObj?.count === 0;

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
      <div css={cssObj.formWrapper}>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>기업명이 무엇인가요?</p>
          <input
            css={commonCssObj.input(25.5, false)}
            type="text"
            value={searchWord}
            onClick={() => {
              registerCompanySearchClickEvent();
              setIsCompanyListOn(true);
            }}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>
        <div css={cssObj.optionList(isCompanyListOn && searchWord !== "")}>
          {isCompanyListOn &&
            companyDataObj?.companyDataArr.map((company) => (
              <button
                type="button"
                css={cssObj.option}
                key={`SignupCompany${company.id}`}
                value={company.name}
                onMouseDown={() => {
                  registerCompanyAddSearchClickEvent();
                  selectCompanyHandler(company.name, company.id, company.businessNumber);
                }}
              >
                {company.name}
              </button>
            ))}
          {isCompanyNotExist && (
            <button
              type="button"
              css={cssObj.newCompanyButton}
              onClick={() => {
                addNewCompanyHandler(searchWord);
              }}
            >
              <p css={cssObj.desc}>찾으시는 기업이 없으신가요?</p>
              <div css={cssObj.buttonBox}>
                <FiArrowUp /> `{searchWord}` <span css={cssObj.point}>등록하기</span>
              </div>
            </button>
          )}
        </div>
        {isBusinessNumberOn && (
          <div css={cssObj.inputWrapper}>
            <p css={cssObj.inputTitle}>사업자 등록번호</p>
            <div css={cssObj.businessNumberInput}>
              <input
                css={commonCssObj.input(5, false)}
                type="text"
                placeholder="000"
                maxLength={3}
                {...register("business_number_1", {
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "사업자 번호 앞 3자리를 입력해주세요.",
                  },
                })}
              />
              -
              <input
                css={commonCssObj.input(5, false)}
                type="text"
                placeholder="00"
                maxLength={2}
                {...register("business_number_2", {
                  pattern: {
                    value: /^[0-9]{2}$/,
                    message: "사업자 번호 가운데 2자리를 입력해주세요.",
                  },
                })}
              />
              -
              <input
                css={commonCssObj.input(6.25, false)}
                type="text"
                placeholder="00000"
                maxLength={5}
                {...register("business_number_3", {
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "사업자 번호 뒷 5자리를 입력해주세요.",
                  },
                })}
              />
            </div>
          </div>
        )}
      </div>
      <NewSharedButton
        buttonType={
          !isCompanyName || errors.company_name?.message || !isBusinessNumber || isBusinessNumberError
            ? "disabled"
            : "fillBlue"
        }
        width={25.5}
        text="다음"
        onClickHandler="submit"
        isLong
      />
    </form>
  );
};
