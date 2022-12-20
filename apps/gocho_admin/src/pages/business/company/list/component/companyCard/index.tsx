import { FunctionComponent } from "react";
import Link from "next/link";

import { BUSINESS_COMPANY_EDIT_URL } from "@constant/internalURL";

import { cssObj } from "./style";
import { CompanyCardProps } from "./type";

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  return (
    <tr css={cssObj.companyContainer}>
      <td css={cssObj.companyIdBox}>{company.id}</td>
      <td css={cssObj.companyNameBox}>{company.name}</td>
      <td css={cssObj.activeButton}>
        <Link passHref href={`${BUSINESS_COMPANY_EDIT_URL}/?id=${company.id}`}>
          <a>상세보기</a>
        </Link>
      </td>
    </tr>
  );
};

export default CompanyCard;
