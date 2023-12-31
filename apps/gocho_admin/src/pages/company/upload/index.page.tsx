import { useState, ReactElement } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useAddCompany } from "@/api";
import { GlobalLayout } from "@/component";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import type { NextPageWithLayout } from "@/types";

import { FactoryBox } from "./component/factoryBox";
import { BasicInfoPart } from "./part/basicInfoPart";
import { WelfareInfoPart } from "./part/welfareInfoPart";
import { PayInfoPart } from "./part/payInfoPart";
import { CompanyFormValues } from "./type";
import { blankFactory } from "./constant";

import { formContainer, addFactoryButton, submitButton, checkMsgBox } from "./style";

const CompanyUpload: NextPageWithLayout = () => {
  const [logo, setLogo] = useState<File>();
  const [bgImage, setBgImage] = useState<File>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { mutate } = useAddCompany();

  const companyForm = useForm<CompanyFormValues>({
    defaultValues: {
      youtube_url: null,
      nozo: { exists: false, desc: null },
    },
  });
  const { register, control, handleSubmit, watch, setValue } = companyForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "factory_arr",
  });

  const companySubmit: SubmitHandler<CompanyFormValues> = (companyObj) => {
    mutate(
      { dto: companyObj, logo, bgImage },
      {
        onSuccess: () => {
          setCheckMsg("기업이 업로드 되었습니다!");
        },

        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
        },
      }
    );
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 등록</h2>
      <form css={formContainer} onSubmit={handleSubmit(companySubmit)}>
        <BasicInfoPart
          register={register}
          setValue={setValue}
          watch={watch}
          setLogo={setLogo}
          setBgImage={setBgImage}
        />
        <WelfareInfoPart register={register} />
        <PayInfoPart register={register} />
        <ul>
          {fields.map((item, index) => (
            <FactoryBox key={item.id} index={index} companyForm={companyForm} remove={remove} />
          ))}
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

CompanyUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyUpload;
