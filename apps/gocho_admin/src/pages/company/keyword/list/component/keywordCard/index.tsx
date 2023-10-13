import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SharedButton } from "shared-ui/common/sharedButton";

import { useDeleteCompanyKeyword } from "@/api";
import { companyKeywordArrKeyObj } from "@/api/company/useCompanyKeywordArr/type";
import { useToast } from "@/globalStates";

import { cssObj } from "./style";
import { KeywordCardProps } from "./type";

export const KeywordCard: FunctionComponent<KeywordCardProps> = ({ keywordObj }) => {
  const { setToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: deleteKeywordMutate } = useDeleteCompanyKeyword();

  const deleteCompanyKeywordHandler = (keyword: string) => {
    deleteKeywordMutate(
      { keyword },
      {
        onSuccess: () => {
          setToast("삭제되었습니다");
          queryClient.invalidateQueries(companyKeywordArrKeyObj.all);
        },
      }
    );
  };

  return (
    <li css={cssObj.cardWrapper}>
      <div css={cssObj.keyword}>{keywordObj.keyword}</div>
      <div css={cssObj.companyContainer}>
        {keywordObj.companyArr.map((company) => (
          <p key={`${keywordObj.keyword}${company.id}`}>{company.name}</p>
        ))}
      </div>
      <SharedButton
        buttonType="fillRed"
        width={5}
        onClickHandler={() => deleteCompanyKeywordHandler(keywordObj.keyword)}
        text="삭제"
      />
    </li>
  );
};
