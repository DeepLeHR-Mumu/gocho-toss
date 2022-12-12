import create from "zustand";

interface UseModalProps {
  isOpen: boolean;
  controlModal: (status: boolean) => void;
}

export const useModal = create<UseModalProps>((set) => {
  return {
    isOpen: false,
    controlModal: (status) => {
      return set(() => {
        return { isOpen: status };
      });
    },
  };
});
