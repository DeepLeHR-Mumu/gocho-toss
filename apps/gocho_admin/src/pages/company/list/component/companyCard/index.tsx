import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteCompany } from "@/api";
import { INTERNAL_URL } from "@/constant";
import { companyArrKeyObj } from "@/constant/queryKeyFactory/company/companyArrKeyObj";

import { companyContainer, companyIdBox, companyNameBox, deleteButton, fixButton, flexBox } from "./style";
import { CompanyCardProps } from "./type";

export const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  const queryClient = useQueryClient();

  const { mutate: mutateCompanyDelete } = useDeleteCompany();

  const companyDelete = () => {
    mutateCompanyDelete(
      { companyId: company.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
        },
      }
    );
  };
  return (
    <tr key={company.id} css={companyContainer}>
      <td css={companyIdBox}>{company.id}</td>
      <td css={companyNameBox}>{company.name}</td>
      <td css={flexBox}>
        <a type="button" css={fixButton} href={`${INTERNAL_URL.COMPANY_EDIT_URL}/?id=${company.id}`}>
          수정
        </a>
        <button type="button" onClick={() => companyDelete()} css={deleteButton}>
          삭제
        </button>
      </td>
    </tr>
  );
};
