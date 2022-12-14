import create from "zustand";

interface UseModalProps {
  currentModal: string | null;
  setModal: (status: string | null) => void;
}

export const useModal = create<UseModalProps>((set) => {
  return {
    currentModal: null,
    setModal: (status) => {
      return set(() => {
        return { currentModal: status };
      });
    },
  };
});
