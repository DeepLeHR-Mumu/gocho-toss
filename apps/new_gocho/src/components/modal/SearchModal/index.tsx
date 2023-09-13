import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiX } from "react-icons/fi";

import { Divider, Chip, Modal } from "shared-ui/deeple-ds";
import { useJdArr } from "@/apis/jd";
import { useCompanyArr } from "@/apis/company";

import { INTERNAL_URL } from "@/pages/constants";

import { Layout } from "../../Layout";
import { CompanyCard } from "../../common/CompanyCard";
import { JdRow } from "../../common/JdRow";

import { SearchDropDown } from "./components/SearchDropDown";
import {
  saveRecentWordToStorage,
  getRecentSearchWordFromStorage,
  removeRecentWordFromStorage,
  removeAllRecentWord,
} from "./util";
import { RECOMMENDATION_COMPANY_ARR } from "./constant";
import { SearchModalProps } from "./type";
import { cssObj } from "./style";

export const SearchModal = ({ close }: SearchModalProps) => {
  const router = useRouter();
  const { data: jobData } = useJdArr({ order: "rand", filter: "valid", size: 5 });
  const { data: companyData } = useCompanyArr({ order: "rank", size: 4 });
  const [recentSearchWordArr, setRecentSearchWordArr] = useState<string[]>([]);

  const searchAndSave = (text: string) => {
    router.replace({ pathname: INTERNAL_URL.SEARCH, query: { q: text, page: 1 } });
    saveRecentWordToStorage(text);
  };

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
      <Layout>
        <div css={cssObj.contentWrapper}>
          <FiX
            css={cssObj.closeIcon}
            onClick={() => {
              if (close) {
                router.back();
                close();
              }
            }}
          />
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
                {recentSearchWordArr.map((word) => (
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
                ))}
              </div>
              <Divider />
            </div>
            <div>
              <h3 css={cssObj.recommendationWordTitle}>추천 검색어</h3>
              <div css={cssObj.recommendationWordChipsWrapper}>
                {RECOMMENDATION_COMPANY_ARR.map((company) => (
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
                ))}
              </div>
            </div>
            <div>
              <h3 css={cssObj.recommendationCompanyTitle}>추천기업</h3>
              <div css={cssObj.recommendationCompanyList}>
                {companyData?.companyDataArr.map((company) => (
                  <CompanyCard
                    key={company.id}
                    id={company.id}
                    logoSrc={company.logoUrl || ""}
                    name={company.name}
                    hashTagArr={[company.industry, company.size]}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 css={cssObj.recommendationJdTitle}>추천공고</h3>
              <div css={cssObj.recommendationJdList}>
                {jobData?.jdDataArr.map((job) => (
                  <JdRow
                    key={job.id}
                    jdId={job.id}
                    companyName={job.company.name}
                    jdTitle={job.title}
                    dueDate={job.endTime}
                    bookmarked={false}
                    cut={job.cut}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Modal>
  );
};
