import { FunctionComponent } from "react";
import Link from "next/link";

import { BUSINESS_COMPANY_EDIT_URL, BUSINESS_COMPANY_REGISTER_URL } from "@constant/internalURL";

import { cssObj } from "./style";
import { CompanyCardProps } from "./type";

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  return (
    <tr css={cssObj.companyContainer}>
      <td css={cssObj.companyIdBox}>{company.id}</td>
      <td css={cssObj.companyNameBox}>{company.name}</td>
      <Link
        passHref
        href={
          company.status === "등록대기"
            ? `${BUSINESS_COMPANY_REGISTER_URL}/?id=${company.id}`
            : `${BUSINESS_COMPANY_EDIT_URL}/?id=${company.id}`
        }
      >
        <a css={cssObj.activeButton}>상세보기</a>
      </Link>
    </tr>
  );
};

export default CompanyCard;
