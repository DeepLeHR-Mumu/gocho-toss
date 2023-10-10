import { FunctionComponent, useRef } from "react";
import { FiX, FiArrowUp } from "react-icons/fi";
import { useRouter } from "next/router";

import { useFocusTrap } from "shared-hooks";

import { SharedButton } from "shared-ui/common/sharedButton";
import { useModal } from "@/globalStates";
import { INTERNAL_URL } from "@/constants";

import { ModalComponent } from "../modalBackground";
import { cssObj } from "./style";

export const CompanyAuthModal: FunctionComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModal();
  const router = useRouter();

  useFocusTrap(modalRef);

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer} ref={modalRef} tabIndex={-1}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>개인정보 수집 및 이용동의</h3>
          <button
            type="button"
            css={cssObj.closeButton}
            onClick={() => {
              closeModal();
              router.push(INTERNAL_URL.HOME);
            }}
          >
            <FiX />
          </button>
        </div>
        <p css={cssObj.desc}>
          비즈니스 서비스의 원활한 이용과 도용 및 허위정보로 인한 <br />
          피해 방지를 위해 기업 인증 후 서비스 이용이 가능합니다.
        </p>
        <div css={cssObj.descWrapper}>
          <strong css={cssObj.descTitle}>기업 회원 인증을 하지 않은 경우 공고를 등록할 수 없습니다.</strong>
          <p css={cssObj.desc}>
            기업 인증을 위해서 신청일 기준 90일 이내 발급한 사업자등록증명원(주민번호 비공개)의 발급번호가 필요합니다.
          </p>
          <div css={cssObj.grid}>
            <div css={cssObj.numberTitle}>발급번호</div>
            <div css={cssObj.number}>0000-000-000-0000</div>
            <div css={cssObj.centerTitle}>
              <p>사 업 자 등 록 증 명</p>
              <p css={cssObj.smallDesc}>(법인사업자)</p>
            </div>
            <div css={cssObj.dueTitle}>처리기간</div>
            <div css={cssObj.due}>즉시</div>
          </div>
          <a
            href="https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=12100000016"
            css={cssObj.businessLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            사업자등록증명원 발급받기 <FiArrowUp />
          </a>
        </div>
        <div css={cssObj.buttonWrapper}>
          <SharedButton
            buttonType="fillBlue"
            text="인증하기"
            width={11.25}
            onClickHandler={() => {
              closeModal();
              router.push(INTERNAL_URL.COMPANY_AUTH);
            }}
          />
        </div>
      </div>
    </ModalComponent>
  );
};
