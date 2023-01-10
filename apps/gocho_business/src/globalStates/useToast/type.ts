export interface ToastZustandlProps {
  currentToast: string | null;
  setToast: (status: string | null) => void;
}

export type ToastStringType = "변경되었습니다" | "토스트 메시지" | "등록되었습니다";
