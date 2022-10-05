import { FunctionComponent } from "react";

import { useIsSpecPageBlocking } from "@recoil/hook/spec";
import { useModal } from "@recoil/hook/modal";

import { ModalComponent } from "@component/modal/modalBackground";

import { PageBlockingBoxProps } from "./type";
import { title, wrapper, descCSS, flexBox, noButton, yesButton } from "./style";

const PageBlockingBox: FunctionComponent<PageBlockingBoxProps> = ({ closeModal }) => {
  const { setIsBlocking } = useIsSpecPageBlocking();

  const doBlocking = () => {
    setIsBlocking(false);
    closeModal();
  };

  const doNotBlocking = () => {
    setIsBlocking(true);
    closeModal();
  };

  return (
    <div css={wrapper}>
      <strong css={title}>페이지를 나가시겠습니까?</strong>
      <p css={descCSS}>이전 / 다음 버튼으로 현재까지 입력한 스펙을 저장할 수 있습니다.</p>
      <div css={flexBox}>
        <button type="button" css={noButton} onClick={doBlocking}>
          아니오
        </button>
        <button type="button" css={yesButton} onClick={doNotBlocking}>
          네
        </button>
      </div>
    </div>
  );
};

export const PageBlockingModal: FunctionComponent = () => {
  const { closeModal } = useModal();

  return (
    <ModalComponent>
      <PageBlockingBox closeModal={closeModal} />
    </ModalComponent>
  );
};
