import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useDeleteCompanyKeyword } from "@/api";
import { companyKeywordArrKeyObj } from "@/api/company/useCompanyKeywordArr/type";

import { cssObj } from "./style";
import { KeywordCardProps } from "./type";

export const KeywordCard: FunctionComponent<KeywordCardProps> = ({ keywordObj }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteKeywordMutate } = useDeleteCompanyKeyword();

  const deleteCompanyKeywordHandler = (keyword: string) => {
    deleteKeywordMutate(
      { keyword },
      {
        onSuccess: () => {
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
        onClickHandler={() => deleteCompanyKeywordHandler(keywordObj.keyword)}
        text="삭제"
        size="medium"
        radius="round"
        fontColor={COLORS.GRAY100}
        backgroundColor={COLORS.ERROR_RED30}
      />
    </li>
  );
};
