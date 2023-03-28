import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal, pageBlockModalDef } from "@/globalStates";

import { PageBlockingBoxProps } from "./type";
import { title, wrapper, descCSS, flexBox, noButton, yesButton } from "./style";

const PageBlockingBox: FunctionComponent<PageBlockingBoxProps> = ({ dataObj, closeModal }) => {
  const router = useRouter();

  const doBlocking = () => {
    closeModal();
    if (dataObj.afterAction) {
      dataObj.afterAction();
    }
  };

  const doNotBlocking = () => {
    // LATER : 다른 페이지에도 사용시 props로 전달하기
    sessionStorage.removeItem("specObj");
    router.push(dataObj.url);
    closeModal();
  };

  return (
    <div css={wrapper}>
      <strong css={title}>페이지를 나가시겠습니까?</strong>
      <p css={descCSS}>{dataObj.text}</p>
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
  const { closeModal, contentObj } = useModal();

  return (
    <ModalComponent>
      <PageBlockingBox closeModal={closeModal} dataObj={contentObj as pageBlockModalDef} />
    </ModalComponent>
  );
};
