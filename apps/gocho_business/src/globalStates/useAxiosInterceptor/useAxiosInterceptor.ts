import create from "zustand";

interface UseIsRefreshLockProps {
  isLock: boolean;
  setIsLock: (status: boolean) => void;
}

export const useIsRefreshLock = create<UseIsRefreshLockProps>((set) => ({
  isLock: false,
  setIsLock: (status) => set(() => ({ isLock: status })),
}));
