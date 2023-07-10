import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiArrowUp } from "react-icons/fi";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { commonCssObj } from "@/styles";

import { useFindCompany } from "@/apis";
import { FindCompanyPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const FindCompanyPart: FunctionComponent<FindCompanyPartProps> = ({ sliderRef }) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [isCompanyListOn, setIsCompanyListOn] = useState<boolean>(false);
  const [isBusinessNumberOn, setIsBusinessNumberOn] = useState<boolean>(false);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { data: companyDataObj } = useFindCompany({ word: searchWord });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    sessionStorage.setItem("specObj", JSON.stringify(formData));
    sliderRef.current?.slickNext();
  };

  const selectCompanyHandler = (companyName: string) => {
    setSearchWord(companyName);
    setValue(`companyName`, companyName);
    setIsCompanyListOn(false);
    setIsBusinessNumberOn(false);
  };

  const addNewCompanyHandler = (companyName: string) => {
    selectCompanyHandler(companyName);
    setIsBusinessNumberOn(true);
  };

  const isCompanyName = Boolean(watch("companyName"));
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
            onClick={() => setIsCompanyListOn(true)}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>
        <div css={cssObj.optionList(isCompanyListOn)}>
          {isCompanyListOn &&
            companyDataObj?.companyDataArr.map((company) => (
              <button
                type="button"
                css={cssObj.option}
                key={`SignupCompany${company.id}`}
                value={company.name}
                onMouseDown={() => {
                  selectCompanyHandler(company.name);
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
              <input css={commonCssObj.input(5, false)} type="text" placeholder="000" />
              -
              <input css={commonCssObj.input(5, false)} type="text" placeholder="000" />
              -
              <input css={commonCssObj.input(6.25, false)} type="text" placeholder="00000" />
            </div>
          </div>
        )}
      </div>
      <NewSharedButton
        buttonType={!isCompanyName || errors.companyName?.message ? "disabled" : "fillBlue"}
        width={25.5}
        text="다음"
        onClickHandler="submit"
        isLong
      />
    </form>
  );
};
