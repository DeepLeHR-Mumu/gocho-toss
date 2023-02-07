export const BLANK_POSITION = {
  middle: false,
  high: false,
  college: false,
  four: false,
  required_exp: "",
  min_year: null,
  max_year: null,
  required_etc_arr: [{ value: "" }],
  contract_type: "",
  conversion_rate: null,
  task_main: "",
  task_sub_arr: [],
  task_detail_arr: [{ value: "" }],
  rotation_arr: [],
  rotation_etc: null,
  place: {
    type: "일반",
    address_arr: null,
    factory_arr: null,
    etc: null,
  },
  hire_number: null,
  pay_arr: [{ value: "" }],
  preferred_certi_arr: null,
  preferred_etc_arr: [{ value: "" }],
};

export const JD_EDIT_MESSAGE_OBJ = {
  EDIT: "최종 공고 수정 요청 하시겠습니까?\n영업일 기준 검수 완료까지 1시간 정도 소요됩니다.",
  DELETE: "삭제 시 해당 공고는\n더 이상 고초대졸닷컴에 노출되지 않으며, 삭제 복구는 불가능합니다.",
  END: "마감 시 해당 공고는 만료공고로 이동하여\n더 이상 현재 공고 페이지에 노출되지 않으며, 재개는 불가능합니다.",
  LEAVE: "변경사항이 있습니다. 페이지를 나가시겠습니까?",
};
