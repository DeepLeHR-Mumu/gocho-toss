import { useEffect } from "react";
import { useRouter } from "next/router";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useQueryClient } from "@tanstack/react-query";

import { Profile } from "shared-ui/deeple-ds";

import { useJdApplicantArr, useReadApplicant } from "@/apis";
import { jdApplicantArrKeyObj } from "@/apis/jd/useJdApplicantArr/type";
import { jdStatisticsKeyObj } from "@/apis/jd/useJdStatistics/type";

import { PAGINATION } from "./constant";
import { cssObj } from "./style";

export const SideApplicantListPart = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: readApplicant } = useReadApplicant();

  const jdId = Number(router.query.jdId);
  const applicantId = Number(router.query.applicantId);

  const isPageExist = Boolean(router.query.page);
  const isSizeExist = Boolean(router.query.size);

  const queryPage = isPageExist && Number(router.query.page) > 0 ? Number(router.query.page) : PAGINATION.DEFAULT_PAGE;
  const querySize = isSizeExist && Number(router.query.size) > 0 ? Number(router.query.size) : PAGINATION.DEFAULT_SIZE;

  const { data: jdApplicantObj } = useJdApplicantArr({
    jdId,
    page: queryPage,
    size: querySize,
  });

  useEffect(() => {
    if (!Number.isNaN(jdId) && !Number.isNaN(applicantId)) {
      // TODO 더 테스트
      if (jdApplicantObj && !jdApplicantObj.applicantArr.find((applicant) => applicant.id === applicantId)?.isRead) {
        readApplicant(
          { jdId, applicantIdArr: [applicantId] },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: jdApplicantArrKeyObj.applicantArr({ jdId }) });
              queryClient.invalidateQueries({ queryKey: jdStatisticsKeyObj.statistics(jdId) });
            },
          }
        );
      }
    }
  }, [jdApplicantObj, queryClient, readApplicant, jdId, applicantId]);

  const nextPage = () => {
    router.replace({
      query: {
        jdId,
        applicantId,
        page: queryPage + PAGINATION.DEFAULT_PAGE,
        size: querySize + PAGINATION.DEFAULT_SIZE,
      },
    });
  };

  const prevPage = () => {
    router.replace({
      query: {
        jdId,
        applicantId,
        page: queryPage - PAGINATION.DEFAULT_PAGE,
        size: querySize - PAGINATION.DEFAULT_SIZE,
      },
    });
  };

  const chooseApplicant = (targetApplicantId: number) => {
    router.replace({
      query: {
        jdId,
        applicantId: targetApplicantId,
        page: queryPage,
        size: querySize,
      },
    });
  };

  if (!jdApplicantObj) {
    return <section css={cssObj.wrapper} />;
  }

  const totalPage = jdApplicantObj.pageResult.totalPages;
  const showPrevButton = isPageExist && queryPage > PAGINATION.DEFAULT_PAGE;
  const showNextButton = isPageExist && queryPage < totalPage;

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.applicantListContainer}>
        <div css={cssObj.listWrapper}>
          {jdApplicantObj.applicantArr.map((applicant) => (
            <button
              key={applicant.id}
              type="button"
              css={cssObj.listItem(applicant.id === applicantId)}
              onClick={() => chooseApplicant(applicant.id)}
            >
              <div css={cssObj.redDot(applicant.isRead)} />
              <Profile src={applicant.applicant.image} size={40} altText="alt" />
              <p>{applicant.applicant.name}</p>
            </button>
          ))}
        </div>
        {showPrevButton && showNextButton && (
          <div css={cssObj.paginationWrapper}>
            {showPrevButton ? (
              <button type="button" css={cssObj.paginationButton} onClick={prevPage}>
                <FiChevronLeft />
              </button>
            ) : (
              <div css={cssObj.hiddenElement} />
            )}
            {showNextButton ? (
              <button type="button" css={cssObj.paginationButton} onClick={nextPage}>
                <FiChevronRight />
              </button>
            ) : (
              <div css={cssObj.hiddenElement} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
