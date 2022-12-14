import create from "zustand";

interface UseModalProps {
  currentModal: string | null;
  setModal: (status: string | null) => void;
}

export const useModal = create<UseModalProps>((set) => ({
    currentModal: null,
    setModal: (status) => set(() => ({ currentModal: status })),
  }));
