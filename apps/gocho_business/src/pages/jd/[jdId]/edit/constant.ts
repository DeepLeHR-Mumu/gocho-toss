export const BLANK_JD = {
  detail: {
    task_main: "",
    task_sub: [],
    task_description: [{ value: "" }],
    contract_type: "",
    conversion_rate: null,
    hire_number: null,
    pay: [{ value: "" }],
    shift: [],
    place: {
      is_rotate: false,
      is_abroad: false,
      is_later: false,
      data: [],
    },
  },
  qualification: {
    highschool: false,
    college: false,
    university: false,
    required_etc: [{ value: "" }],
    required_experience: "",
    required_min_year: undefined,
    required_max_year: undefined,
    preferred_certification: [],
    preferred_etc: [{ value: "" }],
  },
  apply: {
    start_time: "",
    end_time: "",
    document: [{ value: "" }],
    etc: [{ value: "" }],
    process: [{ value: "" }, { value: "" }],
    route: { is_direct: false, link: null, email: null },
    cut: false,
  },
};

export const JD_EDIT_MESSAGE_OBJ = {
  EDIT: "최종 공고 수정 요청 하시겠습니까?\n영업일 기준 검수 완료까지 1시간 정도 소요됩니다.",
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
