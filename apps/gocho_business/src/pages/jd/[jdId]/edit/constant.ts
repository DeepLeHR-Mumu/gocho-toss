export const JD_EDIT_MESSAGE_OBJ = {
  EDIT: "최종 공고 수정 요청 하시겠습니까?\n영업일 기준 검수 완료까지 1시간 정도 소요됩니다.",
  DELETE: "삭제 시 해당 공고는\n더 이상 고초대졸닷컴에 노출되지 않으며, 삭제 복구는 불가능합니다.",
  END: "마감 시 해당 공고는 만료공고로 이동하여\n더 이상 현재 공고 페이지에 노출되지 않으며, 재개는 불가능합니다.",
  LEAVE: "변경사항이 있습니다. 페이지를 나가시겠습니까?",
};

export const ROTATION_ARR = [
  { data: "주간", name: "주간" },
  { data: "야간", name: "야간" },
  { data: "교대", name: "교대" },
  { data: "기타", name: "기타" },
  { data: "주간2교대", name: "주간2교대" },
  { data: "2교대", name: "2교대" },
  { data: "3교대", name: "3교대" },
  { data: "2;1", name: "2조 1교대" },
  { data: "2;2", name: "2조 2교대" },
  { data: "3;1", name: "3조 1교대" },
  { data: "3;2", name: "3조 2교대" },
  { data: "3;3", name: "3조 3교대" },
  { data: "4;2", name: "4조 2교대" },
  { data: "4;3", name: "4조 3교대" },
  { data: "4;4", name: "4조 4교대" },
  { data: "5;3", name: "5조 3교대" },
  { data: "5;4", name: "5조 4교대" },
] as const;
