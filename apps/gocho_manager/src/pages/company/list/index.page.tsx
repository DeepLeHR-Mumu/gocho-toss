import type { NextPage } from "next";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useDeleteCompany } from "@api/company/useDeleteCompany";
import { useCompanyArr } from "@api/company/useCompanyArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { COMPANY_LIST_URL } from "@constant/internalURL";

import { mainContainer, pageTitle } from "@style/commonStyles";
import {
  sectionContainer,
  tableContainer,
  companyContainer,
  companyIdBox,
  companyNameBox,
  flexBox,
  fixButton,
  deleteButton,
} from "@pages/company/list/style";

const CompanyList: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const limit = 20;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(Number(router.query.page));

  const { mutate: mutateDelete } = useDeleteCompany();

  const companyDelete = (companyId: number) => {
    mutateDelete(
      { companyId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const {
    data: companyDataArr,
    isLoading,
    isError,
  } = useCompanyArr({ order: "recent", limit, offset: (page - 1) * limit });

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query]);

  useEffect(() => {
    if (companyDataArr) {
      setTotal(companyDataArr.count);
    }
  }, [companyDataArr]);

  const totalPage = Math.ceil(total / limit);

  if (!companyDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 목록</h2>
      <section css={sectionContainer}>
        <table css={tableContainer}>
          <tbody>
            {companyDataArr.companyDataArr.map((company) => {
              return (
                <tr key={company.id} css={companyContainer}>
                  <div css={flexBox}>
                    <td css={companyIdBox}>{company.id}</td>
                    <td css={companyNameBox}>{company.name}</td>
                  </div>
                  <div css={flexBox}>
                    <button type="button" css={fixButton}>
                      수정
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        return companyDelete(company.id);
                      }}
                      css={deleteButton}
                    >
                      삭제
                    </button>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <BottomPagination totalPage={totalPage} url={COMPANY_LIST_URL} />
    </main>
  );
};

export default CompanyList;
