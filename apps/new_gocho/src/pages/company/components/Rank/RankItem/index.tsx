import Link from "next/link";

import { FunctionComponent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Divider } from "shared-ui/deeple-ds";

import { CompanyRow } from "@/components";
import { RankItemProps } from "./type";

import { cssObj } from "./style";

export const RankItem: FunctionComponent<RankItemProps> = ({ key, name, size, industry, rank, logoUrl = "" }) => {
  return (
    <div css={cssObj.rankContainer}>
      <div css={cssObj.rankItemBox}>
        <div css={cssObj.rankProfileBox}>
          <p css={cssObj.rankNumberText}>{rank}</p>
          <CompanyRow id={key} size={size} logo={logoUrl} name={name} industry={industry} />
        </div>
        <Link href={`/company/${key}/detail`}>
          <FiChevronRight css={cssObj.companyDetailButtn} />
        </Link>
      </div>
      <Divider />
    </div>
  );
};
