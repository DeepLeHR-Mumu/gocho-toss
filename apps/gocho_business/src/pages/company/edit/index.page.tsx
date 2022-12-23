import { ReactElement } from "react";
import { FiEdit, FiUsers } from "react-icons/fi";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { CommonStatusChip } from "@/components/common";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";

import { cssObj } from "../style";

const CompanyEditPage: NextPageWithLayout = () => (
  <main css={cssObj.wrapper}>
    <PageLayout>
      <form css={cssObj.container}>
        <header css={cssObj.header}>
          <div>
            <h2 css={cssObj.title}>기업정보</h2>
            <p css={cssObj.desc}>기업 정보에 변화가 있다면 작성 후 수정완료를 눌러주세요</p>
          </div>
          <div css={cssObj.flexBox}>
            <CommonStatusChip status="승인됨" />
            <button type="submit">
              <FiEdit /> 기업 정보 수정완료
            </button>
          </div>
        </header>
        <section css={cssObj.companyInfoBox}>
          <div css={cssObj.lineBox}>
            <strong css={cssObj.subTitle}>기업 형태</strong>
            <p css={cssObj.textValue}>대기업</p>
          </div>
          <div css={cssObj.flexNormalBox}>
            <div css={cssObj.lineBox}>
              <strong css={cssObj.subTitle}>설립일</strong>
              <p css={cssObj.textValue}>2022년 10월 22일</p>
            </div>
            <div css={cssObj.lineBox}>
              <strong css={cssObj.subTitle}>사업자 번호</strong>
              <p css={cssObj.textValue}>000-00-00000</p>
            </div>
          </div>
          <div css={cssObj.flexNormalBox}>
            <div css={cssObj.lineBox}>
              <strong css={cssObj.subTitle}>사원수</strong>
              <label htmlFor="employee_number">
                <FiUsers />
                <input
                  type="number"
                  onWheel={(event) => {
                    event.currentTarget.blur();
                  }}
                />
                명
              </label>
            </div>
          </div>
        </section>
      </form>
    </PageLayout>
  </main>
);

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default CompanyEditPage;
