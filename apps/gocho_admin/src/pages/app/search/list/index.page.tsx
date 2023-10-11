import { ReactElement } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/common/sharedButton";

import { useDeleteSearchKeyword, useSearchKeywordArr } from "@/api";
import { searchKeywordArrKeyObj } from "@/api/keyword/useSearchKeywordArr/type";
import { useToast } from "@/globalStates";
import { NextPageWithLayout } from "@/types";
import { GlobalLayout, PageLayout, ErrorScreen, LoadingScreen } from "@/component";

import { cssObj } from "./style";

const SearchKeyword: NextPageWithLayout = () => {
  const { setToast } = useToast();
  const queryClient = useQueryClient();

  const { data: searchKeywordObj, isLoading, isError } = useSearchKeywordArr();
  const { mutate: deleteKeywordMutate } = useDeleteSearchKeyword();

  if (!searchKeywordObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const deleteSearchKeywordHandler = (keyword: string) => {
    deleteKeywordMutate(
      { keyword },
      {
        onSuccess: () => {
          setToast("삭제되었습니다");
          queryClient.invalidateQueries(searchKeywordArrKeyObj.all);
        },
      }
    );
  };

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.title}>추천 검색 키워드 목록</h2>
        <section>
          <ul css={cssObj.thead}>
            <li>키워드</li>
            <li>삭제</li>
          </ul>
        </section>
        <ul css={cssObj.tbody}>
          {searchKeywordObj.data.map((keyword) => (
            <li css={cssObj.cardWrapper} key={keyword}>
              <div>{keyword}</div>
              <SharedButton
                buttonType="fillRed"
                width={5}
                onClickHandler={() => deleteSearchKeywordHandler(keyword)}
                text="삭제"
              />
            </li>
          ))}
        </ul>
      </PageLayout>
    </main>
  );
};

SearchKeyword.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default SearchKeyword;
