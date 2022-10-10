import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useModal } from "@recoil/hook/modal";

import { pageBlockModalDef } from "@recoil/atom/modal";
import { ModalComponent } from "@component/modal/modalBackground";

import { PageBlockingBoxProps } from "./type";
import { title, wrapper, descCSS, flexBox, noButton, yesButton } from "./style";

const PageBlockingBox: FunctionComponent<PageBlockingBoxProps> = ({ urlObj, closeModal }) => {
  const router = useRouter();

  const doBlocking = () => {
    closeModal();
  };

  const doNotBlocking = () => {
    // LATER : 다른 페이지에도 사용시 props로 전달하기
    sessionStorage.removeItem("specObj");
    router.push(urlObj.url);
    closeModal();
  };

  return (
    <div css={wrapper}>
      <strong css={title}>페이지를 나가시겠습니까?</strong>
      <p css={descCSS}>작성 중인 스펙이 초기화됩니다. 나가시겠습니까?</p>
      <div css={flexBox}>
        <button type="button" css={noButton} onClick={doBlocking}>
          아니오
        </button>
        <button type="button" css={yesButton} onClick={doNotBlocking}>
          나가기
        </button>
      </div>
    </div>
  );
};

export const PageBlockingModal: FunctionComponent = () => {
  const { closeModal, currentModal } = useModal();

  return (
    <ModalComponent>
      <PageBlockingBox closeModal={closeModal} urlObj={currentModal?.modalContentObj as pageBlockModalDef} />
    </ModalComponent>
  );
};
