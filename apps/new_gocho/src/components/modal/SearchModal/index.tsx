import { useMemo } from "react";
import { FiX } from "react-icons/fi";

import { SearchBar, Divider } from "shared-ui/deeple-ds";
import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";
import { selector as jobArrSelector } from "shared-api/job/useJobArr/util";

import { getRandomItems } from "@/utils";

import { CompanyCard } from "../../common/CompanyCard";
import { JdRow } from "../../common/JdRow";

import { SearchModalProps } from "./type";
import { cssObj } from "./style";

export const SearchModal = ({ close }: SearchModalProps) => {
  const { data: jobData } = useJobArr({ order: "recent", size: 40 });
  const { data: companyData } = useCompanyArr({ order: "rank", size: 4 });

  const randomRecommendationJd = useMemo(() => {
    return getRandomItems(
      jobData?.jobDataArr || ([] as Extract<"jobDataArr", ReturnType<typeof jobArrSelector>>),
      5
    ).sort((prev, next) => {
      const prevTimestamp = new Date(prev.createdTime).getTime();
      const nextTimestamp = new Date(next.createdTime).getTime();

      return prevTimestamp - nextTimestamp;
    });
  }, [jobData]);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.contentsWrapper}>
        <FiX css={cssObj.closeIcon} onClick={close} />
        <SearchBar border="grayLine" />
        <div css={cssObj.etcWrapper}>
          <div css={cssObj.recentWordWrapper}>
            <div css={cssObj.recentWordHeader}>
              <h3 css={cssObj.recentWordTitle}>최근 검색어</h3>
              <div css={cssObj.recentWordDelete}>전체삭제</div>
            </div>
            <div css={cssObj.recentWordChipsWrapper}>{/** TODO chip 들 */}</div>
            <Divider />
          </div>
          <div>
            <h3 css={cssObj.recommendationWordTitle}>추천 검색어</h3>
            <div css={cssObj.recommendationWordChipsWrapper}>{/** TODO chip 들 */}</div>
          </div>
          <div>
            <h3 css={cssObj.recommendationCompanyTitle}>추천기업</h3>
            <div css={cssObj.recommendationCompanyList}>
              {companyData?.companyDataArr.map((company) => {
                return (
                  <CompanyCard
                    key={company.id}
                    logoSrc={company.logoUrl || ""}
                    name={company.name}
                    hashTagArr={[company.industry, company.size]}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h3 css={cssObj.recommendationJdTitle}>추천공고</h3>
            <div css={cssObj.recommendationJdList}>
              {randomRecommendationJd.map((job) => {
                return (
                  <JdRow
                    key={job.id}
                    companyName={job.company.name}
                    jdTitle={job.title}
                    dueDate={job.endTime}
                    bookmarked={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
