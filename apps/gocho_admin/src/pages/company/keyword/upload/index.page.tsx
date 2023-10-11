import { FocusEvent, ReactElement, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/common/sharedButton";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton";
import { useAddCompanyKeyword, useFindCompany } from "@/api";
import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { useToast } from "@/globalStates";
import { companyKeywordArrKeyObj } from "@/api/company/useCompanyKeywordArr/type";

import { cssObj } from "./style";
import { CompanyKeywordFormValues } from "./type";

const CompanyKeywordUpload: NextPageWithLayout = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [checkMsg, setCheckMsg] = useState<string>();
  const router = useRouter();
  const isUploadLoading = useRef<boolean>(false);

  const { data: companyDataObj } = useFindCompany({ word: searchWord, order: "recent" });
  const { mutate } = useAddCompanyKeyword();

  const { setToast } = useToast();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<CompanyKeywordFormValues>();
  const queryClient = useQueryClient();

  const companyKeywordSubmitHandler: SubmitHandler<CompanyKeywordFormValues> = (companyKeywordObj) => {
    if (isUploadLoading.current) return;

    if (!isUploadLoading.current) {
      isUploadLoading.current = true;

      mutate(companyKeywordObj, {
        onSuccess: () => {
          setToast("등록되었습니다");
          queryClient.invalidateQueries(companyKeywordArrKeyObj.all);
          router.push({ pathname: INTERNAL_URL.COMPANY_KEYWORD_URL });
        },

        onError: (addCompanyKeywordError) => {
          setCheckMsg(addCompanyKeywordError.response?.data.error_message);
        },

        onSettled: () => {
          isUploadLoading.current = false;
        },
      });
    }
  };

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.title}>기업 키워드 업로드</h2>
        <form css={cssObj.formContainer} onSubmit={handleSubmit(companyKeywordSubmitHandler)}>
          <div css={cssObj.inputContainer}>
            <strong>회사</strong>
            <input
              css={cssObj.inputBox}
              type="text"
              placeholder="기업이름을 작성해주세요"
              onBlur={(onBlurEvent: FocusEvent<HTMLInputElement>) => {
                setSearchWord(onBlurEvent.target.value);
              }}
            />
            <button css={cssObj.button} type="button">
              검색
            </button>
          </div>
          <p css={cssObj.errorMsgBox}>{errors.company_id?.message}</p>

          <div css={cssObj.companySelectBox}>
            {companyDataObj?.companyDataArr.map((company) => (
              <SharedRadioButton
                key={company.name}
                id={company.name}
                value={`${company.id}`}
                registerObj={{
                  ...register("company_id", {
                    valueAsNumber: true,
                    required: "선택된 기업이 없습니다.",
                    onChange: () => {
                      clearErrors("company_id");
                    },
                  }),
                }}
              >
                <p>{company.name}</p>
              </SharedRadioButton>
            ))}
          </div>
          <div css={cssObj.inputContainer}>
            <strong>키워드</strong>
            <input css={cssObj.inputBox} {...register("keyword", { required: true })} />
          </div>
          <div css={cssObj.buttonBox}>
            <SharedButton buttonType="fillBlue" width={10} onClickHandler="submit" text="키워드 등록하기" />
          </div>
        </form>
        {checkMsg && <p css={cssObj.errorMsgBox}>{checkMsg}</p>}
      </PageLayout>
    </main>
  );
};

CompanyKeywordUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default CompanyKeywordUpload;
