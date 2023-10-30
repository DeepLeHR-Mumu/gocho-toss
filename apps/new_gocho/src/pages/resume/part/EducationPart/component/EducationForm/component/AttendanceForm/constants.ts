import { Attendance, Grade } from "./type";

export const attendanceKeyArr: Grade[] = ["first_attendance", "second_attendance", "third_attendance"];

export const attendanceValueArr: Attendance[] = [
  "disease_school_absent",
  "disease_tardy",
  "disease_leave",
  "disease_subject_absent",
  "unauthorized_school_absent",
  "unauthorized_tardy",
  "unauthorized_leave",
  "unauthorized_subject_absent",
  "extra_school_absent",
  "extra_tardy",
  "extra_leave",
  "extra_subject_absent",
];

export const attendanceHeaderArr = ["결석", "지각", "조퇴", "결과"];

export const attendanceHeaderItem = {
  disease: "질병",
  unauthorized: "무단",
  extra: "기타",
};

export const totalDayOption = {
  min: 190,
  max: {
    value: 250,
    message: "수업일수의 최댓값은 250일이에요",
  },
};

export const dayOption = {
  min: 1,
  max: {
    value: 250,
    message: "수업일수의 최댓값은 250일이에요",
  },
};

export const specialOption = {
  maxLength: {
    value: 20,
    message: "특기사항은 20자 이하로 작성해주세요",
  },
};
