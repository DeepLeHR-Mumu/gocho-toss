import Link from "next/link";
import { FiEye } from "react-icons/fi";

import { Profile, DDayChip, Chip } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter, dDayCalculator } from "shared-util";

import { Layout, SkeletonBox } from "@/components";
import { INTERNAL_URL } from "@/constants";

import { SummaryPartProps } from "./type";
import { cssObj } from "./style";

export const SummaryPart = ({ jd }: SummaryPartProps) => {
  if (!jd) {
    return (
      <section css={cssObj.background}>
        <Layout>
          <div css={cssObj.skeletonWrapper}>
            <SkeletonBox />
          </div>
        </Layout>
      </section>
    );
  }

  const isAlwaysJob = dDayCalculator(jd.endTime) === "상시채용";

  return (
    <section css={cssObj.background}>
      <Layout>
        <div css={cssObj.wrapper}>
          <div css={cssObj.companyWrapper}>
            <Profile
              src={jd.company.logoUrl || defaultCompanyLogo}
              size={48}
              altText={`${jd.company.name} 회사 로고`}
            />
            <span css={cssObj.companyName}>
              <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${jd.company.id}`}>{jd.company.name}</Link>
            </span>
            <div css={cssObj.viewWrapper}>
              <FiEye />
              <span>{jd.view}</span>
            </div>
          </div>
          <h3 css={cssObj.title}>{jd.title}</h3>
          <div css={cssObj.dueDateWrapper}>
            <DDayChip endTime={jd.endTime} />
            {!isAlwaysJob && (
              <span>
                {dateConverter(jd.endTime).date} 까지{jd.cut && " 채용 시 마감"}
              </span>
            )}
          </div>
          <div css={cssObj.chipsWrapper}>
            {jd.company.industry.map((eachIndusty) => (
              <Chip size="small" color="fillGray" key={eachIndusty}>
                {jd.company.industry}
              </Chip>
            ))}
            <Chip size="small" color="fillGray">
              {jd.company.size}
            </Chip>
          </div>
        </div>
      </Layout>
    </section>
  );
};
