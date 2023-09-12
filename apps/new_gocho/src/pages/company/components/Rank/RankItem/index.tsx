import Link from "next/link";

import { FunctionComponent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Divider } from "shared-ui/deeple-ds";

import { URL } from "@/pages/constants";
import { CompanyRow } from "@/components";
import { RankItemProps } from "./type";

import { cssObj } from "./style";

export const RankItem: FunctionComponent<RankItemProps> = ({ id, name, size, industry, rank, logoUrl = "" }) => {
  return (
    <div css={cssObj.rankContainer}>
      <div css={cssObj.rankItemBox}>
        <div css={cssObj.rankProfileBox}>
          <p css={cssObj.rankNumberText}>{rank}</p>
          <CompanyRow id={id} size={size} logo={logoUrl} name={name} industry={industry} />
        </div>
        <Link href={`${URL.COMPANY_DETAIL}/${id}`}>
          <FiChevronRight css={cssObj.companyDetailButtn} />
        </Link>
      </div>
      <Divider />
    </div>
  );
};
