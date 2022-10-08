import { atom } from "recoil";

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
  | "My필터를 불러왔습니다.";

export type ToastAuthMsgDef = "님 반갑습니다." | "님 환영합니다.";

interface toastAtomDef {
  activatedMsg: ToastMsgDef | ToastAuthMsgDef;
  nickname?: string | never;
}

export const toastAtom = atom<toastAtomDef | null>({
  key: "toast",
  default: null,
});
