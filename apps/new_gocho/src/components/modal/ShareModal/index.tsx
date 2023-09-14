import { useState, useEffect } from "react";
import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";

import { ModalWithTitle } from "@/components/common/ModalWithTitle";
import { copyToClipboard } from "@/utils";

import { ShareModalProps } from "./type";
import { cssObj } from "./style";

export const ShareModal = ({ close }: ShareModalProps) => {
  const [link, setLink] = useState("");
  const { setToastMessage } = useToast();

  const copyURL = () => {
    copyToClipboard(window.document.location.href);
    setToastMessage("주소가 복사되었습니다!");
  };

  useEffect(() => {
    if (window) {
      setLink(window.document.location.href);
    }
  }, []);

  return (
    <ModalWithTitle title="공유하기" closeHandler={close}>
      <div css={cssObj.wrapper}>
        <p css={cssObj.link}>{link}</p>
        <Button type="button" color="outline" size="small" css={cssObj.copyButton} onClick={copyURL}>
          복사
        </Button>
      </div>
    </ModalWithTitle>
  );
};
