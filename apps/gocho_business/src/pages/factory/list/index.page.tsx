import { ReactElement, useEffect, useState } from "react";

import { NextPageWithLayout } from "@/types";
import { CompanyInfoPart, PageLayout, GlobalLayout, Footer } from "@/components";
import { factoryListPageFunnelEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { RegisterPart, FactoryCardListPart } from "./part";
import { cssObj } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  const [editingIndex, setEditingIndex] = useState<null | number>(null);
  const [rejectedMessage, setRejectedMessage] = useState<null | string>(null);

  useEffect(() => {
    if (editingIndex === null) {
      setRejectedMessage(null);
    }
  }, [editingIndex]);
  useEffect(() => {
    factoryListPageFunnelEvent();
  }, []);

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <h2 css={cssObj.title}>{editingIndex === null ? "공장 등록" : "공장 수정"}</h2>
        <p css={cssObj.pageDescription}>
          간단히 공장을 등록해보세요! 등록한 공장은 공고 업로드시 불러와 사용할 수 있습니다
        </p>

        {rejectedMessage && (
          <div css={cssObj.rejectedBox}>
            <p css={cssObj.rejectedTitle}>반려사유</p>
            <p css={cssObj.rejectedReason}>{rejectedMessage}</p>
          </div>
        )}

        <RegisterPart editingIndex={editingIndex} setEditingIndex={setEditingIndex} />
        <h2 css={cssObj.listTitle}>공장 목록</h2>
        <div css={cssObj.factoryPartContainer}>
          <section css={cssObj.cardContainer}>
            <FactoryCardListPart
              setEditingIndex={setEditingIndex}
              editingIndex={editingIndex}
              setRejectedMessage={setRejectedMessage}
            />
          </section>
        </div>
      </PageLayout>
    </main>
  );
};

FactoryListPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      <CompanyInfoPart />
      {page}
      <Footer />
    </GlobalLayout>
  </>
);

export default FactoryListPage;
