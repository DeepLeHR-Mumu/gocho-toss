import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { commonCssObj } from "@/styles";

import { useFindCompany } from "@/apis";
import { FindCompanyPartProps, PostSubmitValues } from "./type";

import { cssObj } from "./style";

export const FindCompanyPart: FunctionComponent<FindCompanyPartProps> = ({ sliderRef }) => {
  const [searchWord, setSearchWord] = useState<string>("");

  const { handleSubmit } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { data: companyDataObj } = useFindCompany({ word: searchWord });

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    sessionStorage.setItem("specObj", JSON.stringify(formData));
    sliderRef.current?.slickNext();
  };

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
      <div css={cssObj.formWrapper}>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.inputTitle}>기업명이 무엇인가요?</p>
          <input
            css={commonCssObj.input(25.5, false)}
            type="text"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>
        {companyDataObj?.companyDataArr.map((company) => (
          <p key={`SignupCompany${company.id}`}>{company.name}</p>
        ))}
      </div>
      <NewSharedButton buttonType="fillBlue" width={25.5} text="다음" onClickHandler="submit" isLong />
    </form>
  );
};