import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

import { Divider, Chip, Modal } from "shared-ui/deeple-ds";
import { useJobArr } from "shared-api/job";
import { useCompanyArr } from "shared-api/company";

import { CompanyCard } from "../../common/CompanyCard";
import { JdRow } from "../../common/JdRow";

import { SearchDropDown } from "./components/SearchDropDown";
import { getRecentSearchWordFromStorage, removeRecentWordFromStorage, removeAllRecentWord, useSearch } from "./util";
import { RECOMMENDATION_COMPANY_ARR } from "./constant";
import { SearchModalProps } from "./type";
import { cssObj } from "./style";

export const SearchModal = ({ close }: SearchModalProps) => {
  const { data: jobData } = useJobArr({ order: "rand", size: 5 });
  const { data: companyData } = useCompanyArr({ order: "rank", size: 4 });
  const [recentSearchWordArr, setRecentSearchWordArr] = useState<string[]>([]);
  const { searchAndSave } = useSearch();

  const searchHandler = (searchText: string) => {
    searchAndSave(searchText);

    if (close) {
      close();
    }
  };

  const deleteAllChip = () => {
    setRecentSearchWordArr([]);
    removeAllRecentWord();
  };

  const deleteChip = (target: string) => {
    // eslint-disable-next-line arrow-body-style
    const newRecentSearcWordArr = recentSearchWordArr.filter((word) => word !== target);
    setRecentSearchWordArr(newRecentSearcWordArr);
    removeRecentWordFromStorage(target);
  };

  useEffect(() => {
    const savedRecentSearchWordArr = getRecentSearchWordFromStorage();

    setRecentSearchWordArr(savedRecentSearchWordArr);
  }, []);

  return (
    <Modal css={cssObj.wrapper}>
      <div css={cssObj.contentsWrapper}>
        <FiX css={cssObj.closeIcon} onClick={close} />
        <SearchDropDown recentWordArr={recentSearchWordArr} searchHandler={searchHandler} />
        <div css={cssObj.etcWrapper}>
          <div css={cssObj.recentWordWrapper}>
            <div css={cssObj.recentWordHeader}>
              <h3 css={cssObj.recentWordTitle}>최근 검색어</h3>
              <button
                type="button"
                css={cssObj.recentWordDelete}
                onClick={() => {
                  deleteAllChip();
                }}
              >
                전체삭제
              </button>
            </div>
            <div css={cssObj.recentWordChipsWrapper}>
              {recentSearchWordArr.map((word) => {
                return (
                  <Chip
                    size="large"
                    key={word}
                    color="fillGray"
                    onClick={() => {
                      searchHandler(word);
                    }}
                  >
                    {word}
                    <FiX
                      css={cssObj.chipDelete}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChip(word);
                      }}
                    />
                  </Chip>
                );
              })}
            </div>
            <Divider />
          </div>
          <div>
            <h3 css={cssObj.recommendationWordTitle}>추천 검색어</h3>
            <div css={cssObj.recommendationWordChipsWrapper}>
              {RECOMMENDATION_COMPANY_ARR.map((company) => {
                return (
                  <Chip
                    key={company}
                    size="large"
                    color="fillBlue"
                    onClick={() => {
                      searchHandler(company);
                    }}
                  >
                    {company}
                  </Chip>
                );
              })}
            </div>
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
              {jobData?.jobDataArr.map((job) => {
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
    </Modal>
  );
};
