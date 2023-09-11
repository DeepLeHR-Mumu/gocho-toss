import Link from "next/link";
import { FiEye } from "react-icons/fi";

import { Profile, DDayChip, Chip } from "shared-ui/deeple-ds";
import { dateConverter } from "shared-util";

import { Layout } from "@/components";

import { SummaryPartProps } from "./type";
import { cssObj } from "./style";

export const SummaryPart = ({ company, title, endTime, view }: SummaryPartProps) => {
  return (
    <section css={cssObj.background}>
      <Layout>
        <div css={cssObj.wrapper}>
          <div css={cssObj.companyWrapper}>
            {/* TODO "" 대신 default 이미지 추가 */}
            <Profile src={company.logoUrl || ""} size={48} />
            <span css={cssObj.companyName}>
              <Link href={`/company/detail/${company.id}`}>{company.name}</Link>
            </span>
            <div css={cssObj.viewWrapper}>
              <FiEye />
              <span>{view}</span>
            </div>
          </div>
          <h3 css={cssObj.title}>{title}</h3>
          <div css={cssObj.dueDateWrapper}>
            <DDayChip endTime={endTime} />
            <span>{dateConverter(endTime).date} 까지</span>
          </div>
          <div css={cssObj.chipsWrapper}>
            <Chip size="small" color="fillGray">
              {company.industry}
            </Chip>
            <Chip size="small" color="fillGray">
              {company.size}
            </Chip>
          </div>
        </div>
      </Layout>
    </section>
  );
};
