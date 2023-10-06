import { FiLink2, FiMail } from "react-icons/fi";

import { useToast } from "@/globalStates";
import { ModalWithTitle } from "@/components/common/ModalWithTitle";
import { copyToClipboard } from "@/utils";

import { EmailApplyModalProps } from "./type";
import { cssObj } from "./style";

export const EmailApplyModal = ({ email, close }: EmailApplyModalProps) => {
  const { setToastMessage } = useToast();

  const copyEmail = () => {
    copyToClipboard(email);
    setToastMessage("이메일이 복사되었습니다!");
  };

  const openEmail = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <ModalWithTitle title="지원하기" closeHandler={close}>
      <div css={cssObj.wrapper}>
        <div>
          <button css={cssObj.button("copy")} type="button" onClick={copyEmail}>
            <FiLink2 />
          </button>
          <p css={cssObj.desc}>이메일 복사</p>
        </div>
        <div>
          <button css={cssObj.button("link")} type="button" onClick={openEmail}>
            <FiMail />
          </button>
          <p css={cssObj.desc}>이메일 지원</p>
        </div>
      </div>
    </ModalWithTitle>
  );
};
