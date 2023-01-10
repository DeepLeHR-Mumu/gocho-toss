import { useCallback } from "react";
import create from "zustand";

import { setCurrentModalDef, UseModalProps } from "./type";

export const modalZustand = create<UseModalProps>((set) => ({
  currentModal: null,
  setModal: (status) => set(() => ({ currentModal: status })),
}));

export const useModal = () => {
  const { currentModal: _currentModal, setModal: _setCurrentModal } = modalZustand();

  const closeModal = useCallback(() => _setCurrentModal(null), [_setCurrentModal]);

  const currentModal = _currentModal;

  const setCurrentModal: setCurrentModalDef = useCallback(
    (modalName) => _setCurrentModal(modalName),
    [_setCurrentModal]
  );

  return { setCurrentModal, currentModal, closeModal };
};
