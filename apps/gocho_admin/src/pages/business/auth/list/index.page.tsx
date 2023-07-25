import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

import { GlobalLayout, ModalComponent } from "@/component";
import { NextPageWithLayout } from "@/types";
import { mainContainer, pageTitle } from "@/style";
import { useManagerArr, useAuthAccept, useAuthReject } from "@/api";

import { cssObj } from "./style";

const BusinessAuthList: NextPageWithLayout = () => {
  const router = useRouter();
  const [modal, setModal] = useState<{ state: boolean; managerId: number | null; reason: string }>({
    state: false,
    managerId: null,
    reason: "",
  });

  const { data: managerDataObj } = useManagerArr({ status: "all", size: 6, page: Number(router.query.page) });
  const { mutate: authAcceptMutate } = useAuthAccept();
  const { mutate: authRejectMutate } = useAuthReject();

  const accept = (managerId: number) => {
    if (window.confirm("정말 승인하시겠습니까?")) {
      authAcceptMutate({ managerId }, { onSuccess: () => window.alert("성공"), onError: () => window.alert("실패") });
    }
  };

  const reject = (managerId: number) => {
    if (window.confirm("정말 반려하시겠습니까?")) {
      authRejectMutate(
        { managerId, reason: modal.reason },
        { onSuccess: () => window.alert("성공"), onError: () => window.alert("실패") }
      );
    }
  };

  return (
    <>
      <main css={mainContainer}>
        <div css={cssObj.titleContainer}>
          <h2 css={pageTitle}>기업 인증 요청 목록</h2>
        </div>
        <section css={cssObj.sectionContainer}>
          <table css={cssObj.tableContainer}>
            <thead>
              <tr css={cssObj.factoryContainer}>
                <th>회원 이름</th>
                <th>회사 이름</th>
                <th>공장 이름</th>
                <th>첫 인증 여부</th>
                <th>승인 / 반려</th>
              </tr>
            </thead>
            <tbody>
              {managerDataObj?.managerDataArr.map((manager) => (
                <tr key={manager.id}>
                  <td>{manager.name}</td>
                  <td>{manager.company.name}</td>
                  <td>{manager.status.name}</td>
                  <td>{manager.isFirst ? "O" : "X"}</td>
                  <td css={cssObj.flexRow}>
                    <button
                      type="button"
                      css={cssObj.customButton}
                      onClick={() => {
                        accept(manager.id);
                      }}
                    >
                      승인
                    </button>
                    <button
                      type="button"
                      css={cssObj.customButton}
                      onClick={() => setModal((prev) => ({ ...prev, state: true, managerId: manager.id }))}
                    >
                      반려
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      {modal.state && (
        <ModalComponent>
          <div css={cssObj.modalContainer}>
            <h3>반려사유</h3>
            <textarea
              value={modal.reason}
              onChange={(e) => setModal((prev) => ({ ...prev, reason: e.target.value }))}
            />
            <div css={cssObj.flexRow}>
              <button
                type="button"
                css={cssObj.customButton}
                onClick={() => setModal({ state: false, managerId: null, reason: "" })}
              >
                취소
              </button>
              <button
                type="button"
                css={cssObj.customButton}
                onClick={() => modal.managerId !== null && reject(modal.managerId)}
              >
                반려하기
              </button>
            </div>
          </div>
        </ModalComponent>
      )}
    </>
  );
};

BusinessAuthList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessAuthList;
