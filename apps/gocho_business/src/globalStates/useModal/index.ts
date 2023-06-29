import { useCallback } from "react";
import { create } from "zustand";

import { setCurrentModalDef, UseModalProps } from "./type";

export const modalZustand = create<UseModalProps>((set) => ({
  modal: null,
  contentObj: undefined,
  setModal: (modal, contentObj = undefined) => {
    set(() => ({
      modal,
      contentObj,
    }));
  },
}));

export const useModal = () => {
  const { modal: _currentModal, contentObj: _contentObj, setModal: _setModal } = modalZustand();

  const closeModal = useCallback(() => _setModal(null), [_setModal]);

  const setModal: setCurrentModalDef = useCallback(
    (modal, contentObj) => {
      _setModal(modal, contentObj);
    },
    [_setModal]
  );
  const modal = _currentModal;

  const contentObj = _contentObj;
  return { setModal, modal, contentObj, closeModal };
};
