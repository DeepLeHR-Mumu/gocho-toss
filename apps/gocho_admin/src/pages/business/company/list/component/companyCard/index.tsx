import { FunctionComponent } from "react";
import Link from "next/link";

import { INTERNAL_URL } from "@/constant";

import { cssObj } from "./style";
import { CompanyCardProps } from "./type";

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => (
  <tr css={cssObj.companyContainer}>
    <td css={cssObj.companyIdBox}>{company.id}</td>
    <td css={cssObj.companyNameBox}>{company.name}</td>
    <td css={cssObj.activeButton}>
      <Link passHref href={`${INTERNAL_URL.BUSINESS_COMPANY_EDIT_URL}/?id=${company.id}`}>
        상세보기
      </Link>
    </td>
  </tr>
);

export default CompanyCard;
