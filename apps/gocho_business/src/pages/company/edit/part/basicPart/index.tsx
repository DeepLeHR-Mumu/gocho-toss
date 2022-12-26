import { FunctionComponent } from "react";
import { BiUserVoice } from "react-icons/bi";
import { FiMap, FiMapPin, FiUsers } from "react-icons/fi";

// import { CommonRadioButton } from "shared-ui/common/atom/commonRadioButton";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";

import { cssObj } from "./style";

interface BasicPartProps {
  userInfoData: {
    id: number;
    companyId: number;
    companyName: string;
    companyLogo: string;
    email: string;
    name: string;
    department: string;
    iat: number;
    exp: number;
  };
}

export const BasicPart: FunctionComponent<BasicPartProps> = ({ userInfoData }) => {
  const { data: companyData, isLoading: isCompanyDataLoading } = useCompanyDetail(true, {
    companyId: userInfoData.companyId,
  });

  if (!companyData || isCompanyDataLoading) {
    return null;
  }

  return (
    <div css={cssObj.wrapper}>
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
    </div>
  );
};
