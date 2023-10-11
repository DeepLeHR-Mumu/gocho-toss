import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { Spinner } from "shared-ui/common/spinner";
import factory from "@/public/image/factory.svg";
import { AuthName } from "@/apis/manager/useManagerProfile/type";
import { INTERNAL_URL } from "@/constants";
import { useManagerProfile } from "@/apis";

import { AuthStatePartProps } from "./type";
import { cssObj } from "./style";

const Gov24Link: FunctionComponent = () => {
  const gov24url = "https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=12100000016";

  return (
    <a href={gov24url} target="_blank" rel="noreferrer">
      사업자등록증명원 발급받기 <FiArrowUpRight />
    </a>
  );
};
export const AuthStatePart: FunctionComponent<AuthStatePartProps> = ({ onClick }) => {
  const { data: userInfoData } = useManagerProfile();
  const router = useRouter();

  if (!userInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const getAuthState = (authState: AuthName) => {
    switch (authState) {
      case "미인증":
        return "미완료";
      case "인증반려":
        return "반려";
      case "인증완료":
        return "완료";
      case "인증대기":
        return "검수중";
      default:
        return "";
    }
  };

  const getAuthDescription = (authState: AuthName) => {
    switch (authState) {
      case "미인증":
        return "아래 인증 절차를 따라 인증을 진행해 주세요";
      case "인증반려":
        return "기업 회원 인증이 반려되었습니다.";
      case "인증완료":
      case "인증대기":
        return `신청인 ${userInfoData.name}`;
      default:
        return "";
    }
  };

  const authName = userInfoData.status.name;
  const descriptionState = userInfoData.status.name === "인증반려" || userInfoData.status.name === "인증대기";

  return (
    <div css={cssObj.partContainer}>
      <div css={cssObj.contentTitle()}>인증 상태</div>
      <div css={cssObj.authStateContainer(authName)}>
        <div css={cssObj.flexRow}>
          <Image src={factory} alt="" css={cssObj.factoryIcon} /> {/** FIXME 여기 뭐 더 해야되는 걸로 아는데 */}
          <div>
            <h4>기업 회원 인증 {getAuthState(authName)}</h4>
            <p>{getAuthDescription(authName)}</p>
          </div>
        </div>
        {authName === "인증반려" && (
          <div css={cssObj.flexColumn}>
            <hr />
            <div css={cssObj.flexRow}>
              <h5>반려 사유 {userInfoData.status.reason.length}건</h5>
              <span>*아래 반려 사유를 확인하시고 재인증해 주세요.</span>
            </div>
            <ul>
              {userInfoData.status.reason.map((eachReason, index) => (
                // key 값으로 index 를 제외하고는 사용할 수 있는 것이 없어보임.
                // eslint-disable-next-line
                <li key={index}>{eachReason}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ul css={cssObj.additionalDescription}>
        {!descriptionState && (
          <li>
            기업 인증 시 [사업자등록증명원]이 필요합니다.(사업자등록증 X) <Gov24Link />
          </li>
        )}
        <li>사업자등록증명원(주민번호 비공개)은 신청일 기준 90일 이내의 문서여야 합니다.</li>
        <li>
          검수는 영업일 기준 최대 2일 까지 검수기간이 소요될 수 있습니다.
          <a href={INTERNAL_URL.HELP} onClick={() => router.push(INTERNAL_URL.HELP)}>
            고객센터
          </a>
        </li>
        <li>
          기업 인증은 비즈니스 서비스의 원활한 이용과 도용 및 허위정보로 인한 피해를 방지하기 위해 진행하고 있습니다.
        </li>
        <li>
          공고 등록 등의 서비스를 이용하기 위해서는 기업 인증을 필수로 진행해야 합니다. (직업안정법 시행령 제 28조 1항)
        </li>
        <li>가입 정보(사업자 정보)와 사업자등록증명원의 내용이 다르면 신청이 반려될 수 있습니다.</li>
        {descriptionState && <Gov24Link />}
      </ul>
      {authName !== "인증완료" && (
        <>
          <div css={cssObj.contentTitle(true)}>인증 절차</div>
          <div css={cssObj.authProcessContainer}>
            <div css={cssObj.eachProcess}>
              <div>1</div>
              <p>기업 인증 신청</p>
              <p>상세 기업 정보, 사업자등록증명원</p>
              <p>및 담당자 정보 입력</p>
            </div>
            <div css={cssObj.eachProcess}>
              <div>2</div>
              <p>검수 및 심사</p>
              <p>제출된 기업 상세 정보</p>
              <p>검토 및 확인</p>
            </div>
            <div css={cssObj.eachProcess}>
              <div>3</div>
              <p>인증 완료</p>
              <p>고초대졸닷컴 내 기업 노출 및</p>
              <p>공고 등록 가능</p>
            </div>
            <div css={cssObj.line} />
          </div>
          <div css={cssObj.footerContainer}>
            <button type="button" disabled={authName === "인증대기"} css={cssObj.authButton} onClick={onClick}>
              기업 인증하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};
