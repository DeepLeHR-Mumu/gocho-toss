import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

import { GlobalLayout, LoadingScreen, Pagination } from "@/component";
import { NextPageWithLayout } from "@/types";
import { mainContainer, pageTitle } from "@/style";
import { useManagerArr, useAuthAccept, useAuthReject } from "@/api";
import { INTERNAL_URL } from "@/constant";

import { AuthInfoModal } from "./component";
import { cssObj } from "./style";

const BusinessAuthList: NextPageWithLayout = () => {
  const router = useRouter();
  const [modal, setModal] = useState<{ state: boolean; managerId: number | null }>({
    state: false,
    managerId: null,
  });

  const {
    data: managerDataObj,
    isLoading,
    refetch: refetchManagerArr,
  } = useManagerArr({
    status: "waiting",
    size: 6,
    page: Number(router.query.page),
  });
  const { mutate: authAcceptMutate } = useAuthAccept();
  const { mutate: authRejectMutate } = useAuthReject();

  const closeModal = () => setModal({ state: false, managerId: null });

  const accept = (managerId: number) => {
    if (window.confirm("정말 승인하시겠습니까?")) {
      authAcceptMutate(
        { managerId },
        {
          onSuccess: () => {
            refetchManagerArr();
            closeModal();
            window.alert("승인되었습니다.");
          },
          onError: () => window.alert("실패"),
        }
      );
    }
  };

  const reject = (managerId: number, reason: string | null) => {
    if (window.confirm("정말 반려하시겠습니까?")) {
      authRejectMutate(
        { managerId, reason },
        {
          onSuccess: () => {
            refetchManagerArr();
            closeModal();
            window.alert("반려되었습니다.");
          },
          onError: () => window.alert("실패"),
        }
      );
    }
  };

  if (!managerDataObj || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <main css={mainContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={pageTitle}>회원 인증 요청 목록</h2>
        </div>
        <section css={cssObj.sectionContainer}>
          <table css={cssObj.tableContainer}>
            <thead>
              <tr css={cssObj.factoryContainer}>
                <th>회원 이름</th>
                <th>회사 이름</th>
                <th>상태</th>
                <th>첫 인증 여부</th>
                <th>승인 / 반려</th>
              </tr>
            </thead>
            <tbody>
              {managerDataObj.managerDataArr.map((manager) => (
                <tr key={manager.id}>
                  <td>{manager.name}</td>
                  <td>{manager.company.name}</td>
                  <td>{manager.status.name}</td>
                  <td>{manager.isFirst ? "O" : "X"}</td>
                  <td css={cssObj.flexRow}>
                    <button
                      type="button"
                      css={cssObj.customButton}
                      onClick={() =>
                        setModal((prev) => ({
                          ...prev,
                          state: true,
                          managerId: manager.id,
                          isFirst: manager.isFirst,
                        }))
                      }
                    >
                      기업 확인
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <Pagination totalPage={managerDataObj.pageResult.totalPages} url={INTERNAL_URL.BUSINESS_USER_AUTH_LIST_URL} />
      </main>
      {modal.state && modal.managerId && (
        <AuthInfoModal managerId={modal.managerId} accept={accept} reject={reject} close={closeModal} />
      )}
    </>
  );
};

BusinessAuthList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessAuthList;
