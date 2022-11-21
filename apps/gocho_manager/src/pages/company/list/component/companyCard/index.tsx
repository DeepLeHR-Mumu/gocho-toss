import { FunctionComponent } from "react";
import { useDeleteCompany } from "@api/company/useDeleteCompany";
import { useQueryClient } from "@tanstack/react-query";
import { companyContainer, companyIdBox, companyNameBox, deleteButton, fixButton, flexBox } from "./style";
import { CompanyCardProps } from "./type";

export const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  const queryClient = useQueryClient();

  const { mutate: mutateDelete } = useDeleteCompany();

  const companyDelete = (companyId: number) => {
    mutateDelete(
      { companyId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
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
            return companyDelete(company.id);
          }}
          css={deleteButton}
        >
          삭제
        </button>
      </div>
    </tr>
  );
};
