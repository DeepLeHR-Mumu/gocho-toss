import { useRecoilState } from "recoil";
import { modalAtom } from "@recoil/atom";
import { contentModalDef, contentModalNameDef, modalNameDef } from "@recoil/atom/modal";
import { useCallback } from "react";

export interface setCurrentModalDef {
  (modalName: modalNameDef, modalContentObj?: never): void;
  (modalName: contentModalNameDef, modalContentObj: contentModalDef): void;
}
export const useModal = () => {
  const [_currentModal, _setCurrentModal] = useRecoilState(modalAtom);

  const closeModal = useCallback(() => {
    return _setCurrentModal(null);
  }, [_setCurrentModal]);

  const currentModal = _currentModal;

  const setCurrentModal: setCurrentModalDef = useCallback(
    (modalName, modalContentObj) => {
      if (modalContentObj)
        return _setCurrentModal({
          activatedModal: modalName,
          modalContentObj,
        });
      return _setCurrentModal({ activatedModal: modalName });
    },
    [_setCurrentModal]
  );

  return { setCurrentModal, currentModal, closeModal };
};
