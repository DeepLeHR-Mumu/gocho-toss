import { ReactElement, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { useAddSearchKeyword } from "@/api";
import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { useToast } from "@/globalStates";
import { searchKeywordArrKeyObj } from "@/api/keyword/useSearchKeywordArr/type";

import { cssObj } from "./style";
import { SearchKeywordFormValues } from "./type";

const SearchKeywordUpload: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();
  const router = useRouter();
  const isUploadLoading = useRef<boolean>(false);

  const { mutate } = useAddSearchKeyword();

  const { setToast } = useToast();
  const { register, handleSubmit } = useForm<SearchKeywordFormValues>();
  const queryClient = useQueryClient();

  const searchKeywordSubmitHandler: SubmitHandler<SearchKeywordFormValues> = (searchKeywordObj) => {
    if (isUploadLoading.current) return;

    if (!isUploadLoading.current) {
      isUploadLoading.current = true;

      mutate(searchKeywordObj, {
        onSuccess: () => {
          setToast("등록되었습니다");
          queryClient.invalidateQueries(searchKeywordArrKeyObj.all);
          router.push({ pathname: INTERNAL_URL.SEARCH_KEYWORD_URL });
        },

        onError: (addSearchKeywordError) => {
          setCheckMsg(addSearchKeywordError.response?.data.error_message);
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
        <h2 css={cssObj.title}>추천 검색 키워드 추가</h2>
        <form css={cssObj.formContainer} onSubmit={handleSubmit(searchKeywordSubmitHandler)}>
          <div css={cssObj.inputContainer}>
            <strong>키워드</strong>
            <input css={cssObj.inputBox} {...register("keyword", { required: true })} />
          </div>
          <div css={cssObj.buttonBox}>
            <SharedButton
              onClickHandler="submit"
              text="키워드 등록하기"
              size="xLarge"
              radius="round"
              backgroundColor={COLORS.BLUE_FIRST40}
              fontColor={COLORS.GRAY100}
            />
          </div>
        </form>
        {checkMsg && <p css={cssObj.errorMsgBox}>{checkMsg}</p>}
      </PageLayout>
    </main>
  );
};

SearchKeywordUpload.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default SearchKeywordUpload;
