import { useRecoilState } from "recoil";
import { modalAtom } from "@recoil/atom";
import { modalNameDef } from "@recoil/atom/modal";
import { useCallback } from "react";

interface setCurrentModalDef {
  (modalName: modalNameDef): void;
}

export const useModal = () => {
  const [_currentModal, _setCurrentModal] = useRecoilState(modalAtom);

  const closeModal = useCallback(() => {
    return _setCurrentModal(null);
  }, [_setCurrentModal]);

  const currentModal = _currentModal;

  const setCurrentModal: setCurrentModalDef = useCallback(
    (modalName) => {
      return _setCurrentModal({ activatedModal: modalName });
    },
    [_setCurrentModal]
  );

  return { setCurrentModal, currentModal, closeModal };
};
