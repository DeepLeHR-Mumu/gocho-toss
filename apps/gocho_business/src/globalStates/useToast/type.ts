export interface ToastZustandlProps {
  currentToast: string | null;
  setToast: (status: string | null) => void;
}

export type ToastStringType = "토스트 메시지";