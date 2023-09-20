import { useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { FiX, FiRefreshCw, FiFilter } from "react-icons/fi";

import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { useUserProfile } from "@/apis/auth";
import { useUserFilter, useDoUserFilter } from "@/apis/filter";
import { useJdCount } from "@/apis/jd";
import { LoginModal } from "@/components";

import {
  JOB_FILTER_ARR,
  JOB_FILTER_KEY,
  INDUSTRY_FILTER_ARR,
  INDUSTRY_FILTER_KEY,
  EDUCATION_FILTER_ARR,
  EDUCATION_FILTER_KEY,
  PLACE_FILTER_ARR,
  PLACE_FILTER_KEY,
  REQUIRED_EXP_FILTER_ARR,
  REQUIRED_EXP_FILTER_KEY,
  CONTRACT_FILTER_ARR,
  CONTRACT_FILTER_KEY,
  ROTATION_FILTER_ARR,
  ROTATION_FILTER_KEY,
  keyTextMapper,
} from "./constant";
import { getAllFilter, getFilterText } from "./util";
import { FilterPartProps, FilterKey } from "./type";
import { cssObj } from "./style";

export const FilterPart = ({ filterForm, triggerHandler }: FilterPartProps) => {
  const [loginModal, setLoginModal] = useState(false);
  const router = useRouter();
  const { setValue, watch, getValues, reset } = filterForm;

  const { data: userData } = useUserProfile();
  const { data: userFilter } = useUserFilter({ userId: userData?.id });
  const { mutate: doUserFilter } = useDoUserFilter();

  const { data: jdCount } = useJdCount({
    filter: "valid",
    [JOB_FILTER_KEY]: watch(JOB_FILTER_KEY).join(","),
    [INDUSTRY_FILTER_KEY]: watch(INDUSTRY_FILTER_KEY).join(","),
    [EDUCATION_FILTER_KEY]: watch(EDUCATION_FILTER_KEY).join(","),
    [PLACE_FILTER_KEY]: watch(PLACE_FILTER_KEY).join(","),
    [REQUIRED_EXP_FILTER_KEY]: watch(REQUIRED_EXP_FILTER_KEY).join(","),
    [CONTRACT_FILTER_KEY]: watch(CONTRACT_FILTER_KEY).join(","),
    [ROTATION_FILTER_KEY]: watch(ROTATION_FILTER_KEY).join(","),
  });

  const { setToastMessage } = useToast();

  const filterButton = (sourceKey: FilterKey, targetKey: string) => css`
    ${cssObj.filter}${watch(sourceKey).includes(targetKey) && cssObj.appliedFilter}
  `;

  const filterHandler = (targetKey: FilterKey, value: string) => {
    const appliedFilter = getValues(targetKey);

    if (appliedFilter.includes(value)) {
      setValue(
        targetKey,
        appliedFilter.filter((filter) => filter !== value)
      );
      return;
    }

    if (value === "") {
      setValue(targetKey, [value]);
      return;
    }

    setValue(targetKey, appliedFilter.filter((filter) => filter !== "").concat(value));
  };

  const loadMyFilter = () => {
    if (!userData) {
      setToastMessage("해당 서비스는 로그인 후 이용 가능한 서비스 입니다.");
      setLoginModal(true);
      return;
    }

    if (!userFilter) return;

    const isAllArrayEmpty = Object.values(userFilter).every((arr) => arr.length === 0);

    if (isAllArrayEmpty) {
      setToastMessage("저장된 My필터가 없습니다.");
      return;
    }

    setValue(JOB_FILTER_KEY, userFilter ? userFilter[JOB_FILTER_KEY] : []);
    setValue(INDUSTRY_FILTER_KEY, userFilter ? userFilter[INDUSTRY_FILTER_KEY] : []);
    setValue(EDUCATION_FILTER_KEY, userFilter ? userFilter[EDUCATION_FILTER_KEY] : []);
    setValue(PLACE_FILTER_KEY, userFilter ? userFilter[PLACE_FILTER_KEY] : []);
    setValue(REQUIRED_EXP_FILTER_KEY, userFilter ? userFilter[REQUIRED_EXP_FILTER_KEY] : []);
    setValue(CONTRACT_FILTER_KEY, userFilter ? userFilter[CONTRACT_FILTER_KEY] : []);
    setValue(ROTATION_FILTER_KEY, userFilter ? userFilter[ROTATION_FILTER_KEY] : []);

    setToastMessage("저장된 My필터를 불러왔습니다.");
  };

  const saveMyFilter = () => {
    if (!userData) {
      setLoginModal(true);
      return;
    }
    doUserFilter({
      userId: userData?.id,
      q: {
        task: getValues(JOB_FILTER_KEY),
        industry: getValues(INDUSTRY_FILTER_KEY),
        possible_edu: getValues(EDUCATION_FILTER_KEY),
        place: getValues(PLACE_FILTER_KEY),
        required_exp: getValues(REQUIRED_EXP_FILTER_KEY),
        contract_type: getValues(CONTRACT_FILTER_KEY),
        rotation: getValues(ROTATION_FILTER_KEY),
      },
    });

    setToastMessage("My필터가 저장되었습니다.");
  };

  const flattedAllFilter = getAllFilter(watch());

  return (
    <>
      <div css={cssObj.titleWrapper}>
        <h3>지금 채용중 공고</h3>
        <span>총 {jdCount ? jdCount.data : 0}건</span>
        <button type="button" onClick={loadMyFilter}>
          My필터 불러오기
        </button>
      </div>
      <form>
        <section>
          <div css={cssObj.wrapper}>
            <div css={cssObj.column}>
              <h5>직무</h5>
              <div>
                <ul>
                  {JOB_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(JOB_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(JOB_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>업종</h5>
              <div>
                <ul>
                  {INDUSTRY_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(INDUSTRY_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(INDUSTRY_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>학력</h5>
              <div>
                <ul>
                  {EDUCATION_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(EDUCATION_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(EDUCATION_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>근무지</h5>
              <div>
                <ul>
                  {PLACE_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(PLACE_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(PLACE_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>경력</h5>
              <div>
                <ul>
                  {REQUIRED_EXP_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(REQUIRED_EXP_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(REQUIRED_EXP_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>계약형태</h5>
              <div>
                <ul>
                  {CONTRACT_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(CONTRACT_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(CONTRACT_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div css={cssObj.column}>
              <h5>교대형태</h5>
              <div>
                <ul>
                  {ROTATION_FILTER_ARR.map((filter) => (
                    <li key={filter}>
                      <button
                        css={filterButton(ROTATION_FILTER_KEY, filter)}
                        type="button"
                        onClick={() => {
                          filterHandler(ROTATION_FILTER_KEY, filter);
                        }}
                      >
                        {getFilterText(filter)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {flattedAllFilter.length !== 0 && (
            <div css={cssObj.filterStatus}>
              <div css={cssObj.filterDeleteWrapper}>
                {flattedAllFilter.map((filter) => {
                  let filterText = filter.text;
                  if (filter.text === "") {
                    filterText = `${keyTextMapper[filter.key]}>전체`;
                  }
                  if (filter.text === "기타") {
                    filterText = `${keyTextMapper[filter.key]}>기타`;
                  }
                  return (
                    <span key={`${filter.key}${filter.text}`} css={cssObj.filterDelete}>
                      {filterText}
                      <button
                        type="button"
                        onClick={() => {
                          filterHandler(filter.key, filter.text);
                        }}
                      >
                        <FiX />
                      </button>
                    </span>
                  );
                })}
              </div>
              <div css={cssObj.filterSaveWrapper}>
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    triggerHandler();
                  }}
                >
                  <FiRefreshCw />
                  초기화
                </button>
                <button type="button" onClick={saveMyFilter}>
                  <FiFilter />
                  필터 저장
                </button>
                <Button
                  type="button"
                  size="small"
                  onClick={() => {
                    triggerHandler();
                    router.replace({ query: { page: 1 } });
                  }}
                >
                  {jdCount ? jdCount.data : 0}개 공고 보기
                </Button>
              </div>
            </div>
          )}
        </section>
      </form>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </>
  );
};
