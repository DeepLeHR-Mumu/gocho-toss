export type ToastMsgDef =
  | "비밀번호가 변경되었습니다."
  | "계정이 삭제되었습니다."
  | "프로필 사진이 변경되었습니다."
  | "스펙이 등록되었습니다."
  | "평가를 완료하였습니다."
  | "게시글이 등록되었습니다."
  | "댓글이 등록되었습니다."
  | "My필터가 저장되었습니다"
  | "위치가 복사되었습니다."
  | "프로필 이미지가 변경되었습니다."
  | "My필터를 저장해주세요."
  | "로그인후 My 필터를 저장해주세요."
  | "로그인이 필요한 서비스입니다."
  | "My필터를 저장후 불러주세요."
  | "My필터를 불러왔습니다."
  | "스펙이 삭제되었습니다."
  | "접속해주셔서 감사합니다."
  | "검색어에 특수문자는 포함될 수 없습니다."
  | "이미 사용중인 닉네임 입니다."
  | "메일이 전송됐습니다. 이메일을 확인해주세요."
  | "가입되지 않은 이메일 입니다."
  | "카카오 로그인으로만 가입된 회원입니다."
  | "회원탈퇴가 되었습니다."
  | "게시글이 삭제되었습니다."
  | "게시글이 수정되었습니다."
  | "프로필 이미지를 선택해주세요."
  | "입력하신 이메일로 임시 비밀번호가 발급되었습니다"
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
