import Link from "next/link";

import { FunctionComponent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Divider } from "shared-ui/deeple-ds";

import { CompanyRow } from "@/components";
import { INTERNAL_URL } from "@/constants";
import { RankItemProps } from "./type";

import { cssObj } from "./style";

export const RankCompanyCard: FunctionComponent<RankItemProps> = ({ rank, company }) => (
  <Link href={company ? `${INTERNAL_URL.COMPANY_DETAIL}/${company.id}` : ""} css={cssObj.rankContainer}>
    <div css={cssObj.rankItemBox}>
      <div css={cssObj.companyBox}>
        <p css={cssObj.rankNumber}>{rank}</p>
        <CompanyRow company={company ? { ...company, logo: company?.logoUrl || "" } : undefined} border={false} />
      </div>
      <FiChevronRight css={cssObj.linkButton} />
    </div>
    <Divider />
  </Link>
);
