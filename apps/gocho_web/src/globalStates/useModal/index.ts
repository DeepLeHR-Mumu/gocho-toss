import { useCallback } from "react";
import { create } from "zustand";

import { setCurrentModalDef, UseModalProps } from "./type";

export const modalZustand = create<UseModalProps>((set) => {
  return {
    modal: null,
    contentObj: undefined,
    setModal: (modal, contentObj = undefined) => {
      set(() => {
        return {
          modal,
          contentObj,
        };
      });
    },
  };
});

export const useModal = () => {
  const { modal: _currentModal, setModal: _setModal } = modalZustand();

  const closeModal = useCallback(() => {
    return _setModal(null);
  }, [_setModal]);

  const setModal: setCurrentModalDef = useCallback(
    (modal, contentObj) => {
      _setModal(modal, contentObj);
    },
    [_setModal]
  );
  const modal = _currentModal;

  return { setModal, modal, closeModal };
};
