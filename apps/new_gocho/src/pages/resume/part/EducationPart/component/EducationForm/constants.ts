export const educationTypeArr = [
  {
    content: "고등학교",
  },
  {
    content: "대학교(2,3년제)",
  },
  {
    content: "대학교(4년제)",
  },
  {
    content: "기타",
  },
];

export const graduateTypeArr = [
  {
    content: "졸업",
  },
  {
    content: "졸업예정",
  },
  {
    content: "재학",
  },
  {
    content: "중퇴",
  },
];

export const etcGraduateTypeArr = [
  {
    content: "졸업",
  },
  {
    content: "재학",
  },
  {
    content: "중퇴",
  },
];

export const gradeArr = [
  {
    content: 4.0,
  },
  {
    content: 4.3,
  },
  {
    content: 4.5,
  },
];

export const highSchoolDefaultValue = {
  name: "",
  graduate_type: "",
  is_alternative_test: false,
  start_date: "",
  end_date: "",
  first_attendance: null,
  second_attendance: null,
  third_attendance: null,
  major: null,
  grade: null,
  etc: null,
};

export const collegeDefaultValue = {
  name: "",
  graduate_type: "",
  start_date: "",
  end_date: null,
  major: null,
  grade: null,
  max_grade: null,
  etc: null,
};

export const universityDefaultValue = {
  name: "",
  graduate_type: "",
  is_uturn: false,
  start_date: "",
  end_date: null,
  major: null,
  grade: null,
  max_grade: null,
  etc: null,
};

export const extraDefaultValue = {
  name: "",
  graduate_type: "",
  start_date: "",
  end_date: null,
  major: null,
  grade: null,
  max_grade: null,
  etc: null,
};
