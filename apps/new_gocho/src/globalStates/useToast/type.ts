interface Toast {
  id: number;
  message: string;
}

export interface ToastStateProps {
  toastStack: Toast[];
  setToastMessage: (message: string) => void;
}
