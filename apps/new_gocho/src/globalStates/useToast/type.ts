export type ToastMsgDef =
  | "신고가 접수되었습니다."
  | "유저가 차단 되었습니다."
  | "주소가 복사되었습니다!"
  | "기업리뷰가 업로드 되었습니다."
  | "공고리뷰가 업로드 되었습니다."
  | "리뷰가 삭제되었습니다."
  | "My필터가 저장되었습니다."
  | "저장된 My필터가 없습니다."
  | "해당 서비스는 로그인 후 이용 가능한 서비스 입니다."
  | "저장된 My필터를 불러왔습니다."
  | "프로필 변경이 완료되었습니다."
  | "비밀번호 변경이 완료되었습니다"
  | null;

export type ToastAuthMsgDef = "님 반갑습니다." | "님 환영합니다.";

export interface SetToastMessageDef {
  (toastMessage: string, nickname?: never): void;
  (toastMessage: ToastMsgDef, nickname?: never): void;
  (toastMessage: ToastAuthMsgDef, nickname: string): void;
}

export interface SetToastDef {
  (toastMessage: ToastAuthMsgDef | ToastMsgDef | string, nickname?: string | never): void;
}

export interface ToastAtomProps {
  toastMessage: ToastMsgDef | ToastAuthMsgDef | string;
  nickname?: string | never;
  setToastMessage: SetToastDef;
}
