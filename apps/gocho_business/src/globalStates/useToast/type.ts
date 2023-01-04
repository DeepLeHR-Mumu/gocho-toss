export interface ToastZustandlProps {
  currentToast: string | null;
  setToast: (status: string | null) => void;
}

export type ToastStringType = "메일이 전송됐습니다. 이메일을 확인해주세요.";
