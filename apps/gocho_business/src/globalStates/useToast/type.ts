export interface ToastZustandlProps {
  currentToast: string | null;
  setToast: (status: string | null) => void;
}

export type ToastStringType =
  | "재접속되었습니다"
  | "변경되었습니다"
  | "등록되었습니다"
  | "메일이 전송됐습니다. 이메일을 확인해주세요.";
