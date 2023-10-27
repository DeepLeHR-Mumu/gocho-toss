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
  max: 250,
};

export const dayOption = {
  min: 1,
  max: 250,
};

export const specialOption = {
  maxLength: 20,
};
