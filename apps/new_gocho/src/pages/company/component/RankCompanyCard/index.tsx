import Link from "next/link";

import { FunctionComponent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Divider } from "shared-ui/deeple-ds";

import { INTERNAL_URL } from "@/pages/constants";
import { CompanyRow } from "@/components";
import { RankItemProps } from "./type";

import { cssObj } from "./style";

export const RankCompanyCard: FunctionComponent<RankItemProps> = ({ rank, company }) => (
  <div css={cssObj.rankContainer}>
    <div css={cssObj.rankItemBox}>
      <div css={cssObj.companyBox}>
        <p css={cssObj.rankNumber}>{rank}</p>
        <CompanyRow company={company ? { ...company, logo: company?.logoUrl || "" } : undefined} border={false} />
      </div>
      <Link href={company ? `${INTERNAL_URL.COMPANY_DETAIL}/${company.id}` : ""}>
        <FiChevronRight css={cssObj.linkButton} />
      </Link>
    </div>
    <Divider />
  </div>
);
