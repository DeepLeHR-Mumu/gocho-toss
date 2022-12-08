import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { companyArrKeyObj } from "shared-constant/queryKeyFactory/company/arrKeyObj";
import { useDeleteCompany } from "shared-api/admin/company/useDeleteCompany";

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
      <div css={flexBox}>
        <td css={companyIdBox}>{company.id}</td>
        <td css={companyNameBox}>{company.name}</td>
      </div>
      <div css={flexBox}>
        <button type="button" css={fixButton}>
          수정
        </button>
        <button
          type="button"
          onClick={() => {
            return companyDelete();
          }}
          css={deleteButton}
        >
          삭제
        </button>
      </div>
    </tr>
  );
};
