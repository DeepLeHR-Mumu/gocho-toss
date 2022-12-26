import { ReactElement } from "react";
import { FiEdit, FiMap, FiMapPin, FiUsers } from "react-icons/fi";
import { BiUserVoice } from "react-icons/bi";

// import { CommonRadioButton } from "shared-ui/common/atom/commonRadioButton";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { CommonStatusChip } from "@/components/common";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";

// import { WelfareForm } from "./component/welfareForm";
import { cssObj } from "./style";

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
          <div css={cssObj.lineBox()}>
            <strong css={cssObj.subTitle}>기업 형태</strong>
            <p css={cssObj.textValue}>대기업</p>
          </div>
          <div css={cssObj.flexStartBox}>
            <div css={cssObj.lineBox(30)}>
              <strong css={cssObj.subTitle}>설립일</strong>
              <p css={cssObj.textValue}>2022년 10월 22일</p>
            </div>
            <div css={cssObj.lineBox()}>
              <strong css={cssObj.subTitle}>사업자 번호</strong>
              <p css={cssObj.textValue}>000-00-00000</p>
            </div>
          </div>
          <div css={cssObj.flexStartBox}>
            <div css={cssObj.lineBox(30)}>
              <strong css={cssObj.subTitle}>사원수</strong>
              <label htmlFor="employee_number" css={cssObj.employeeNumber}>
                <FiUsers />
                <input
                  type="number"
                  onWheel={(event) => {
                    event.currentTarget.blur();
                  }}
                  css={cssObj.inputLine}
                />
                <p css={cssObj.unit}>명</p>
              </label>
            </div>
            <div css={cssObj.lineBox(70)}>
              <strong css={cssObj.subTitle}>기업 한줄 소개</strong>
              <input type="text" placeholder="기업 한줄 소개" css={cssObj.inputLine} />
            </div>
          </div>
          <div css={cssObj.lineBox()}>
            <strong css={cssObj.subTitle}>기업 본사 주소</strong>
            <label htmlFor="address" css={cssObj.address}>
              <button type="button" css={cssObj.findAddressButton}>
                <FiMap /> 주소찾기
              </button>
              <div css={cssObj.inputLineBox}>
                <FiMapPin />
                <input type="text" placeholder="placeHolder" />
              </div>
            </label>
            <div css={cssObj.mapBox}>map</div>
          </div>
          <div css={cssObj.lineBox(80)}>
            <strong css={cssObj.subTitle}>노조</strong>
            <div css={cssObj.nozoBox}>
              <BiUserVoice />
              {/* <CommonRadioButton registerObj={} desc='있음' /> */}
              {/* <CommonRadioButton registerObj={} desc='없음' /> */}
            </div>
            <input type="text" placeholder="보충설명(선택)" css={cssObj.inputLine} />
          </div>
          <div css={cssObj.lineBox(80)}>
            <strong css={cssObj.subTitle}>연봉 정보</strong>
            <div css={cssObj.flexBox}>
              <div css={cssObj.payBox}>
                <strong css={cssObj.infoTitle}>평균 초봉</strong>
                <div css={cssObj.flexCenterBox}>
                  <input type="number" placeholder="평균 초봉" css={cssObj.inputLine} />
                  <p css={cssObj.textValue}>만원</p>
                </div>
              </div>
              <div css={cssObj.payBox}>
                <strong css={cssObj.infoTitle}>평균 연봉</strong>
                <div css={cssObj.flexCenterBox}>
                  <input type="number" placeholder="평균 연봉" css={cssObj.inputLine} />
                  <p css={cssObj.textValue}>만원</p>
                </div>
              </div>
            </div>
            <div css={cssObj.lineBox()}>
              <strong css={cssObj.infoTitle}>기타 연봉 정보</strong>
              <input type="text" placeholder="상여금, 성과급 등의 정보를 적어주세요" css={cssObj.inputLine} />
            </div>
          </div>
          {/* 복지 정보 시작 */}
          <div css={cssObj.lineBox()}>
            <strong css={cssObj.subTitle}>복지(선택)</strong>
            <div css={cssObj.welfareBox}>
              {/* <WelfareForm />
              <WelfareForm />
              <WelfareForm />
              <WelfareForm />
              <WelfareForm />
              <WelfareForm />
              <WelfareForm />
              <WelfareForm /> */}
            </div>
          </div>
        </section>
        <button type="submit">기업 정보 수정완료</button>
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
