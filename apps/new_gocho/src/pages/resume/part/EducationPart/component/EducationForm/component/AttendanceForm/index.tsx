import { FC } from "react";

import { cssObj } from "./style";
import { AttendanceFormProps } from "./type";
import {
  attendanceHeaderArr,
  attendanceHeaderItem,
  attendanceKeyArr,
  attendanceValueArr,
  dayOption,
  specialOption,
  totalDayOption,
} from "./constants";

export const AttendanceForm: FC<AttendanceFormProps> = ({ register }) => (
  <div>
    <div css={cssObj.wrapper}>
      <div css={cssObj.gradeHeader}>학년</div>
      <div css={cssObj.dayHeader}>수업일수</div>
      {attendanceHeaderArr.map((attendanceHeader) => (
        <div key={attendanceHeader} css={cssObj.headerWrapper}>
          <div css={cssObj.header}>{attendanceHeader}</div>
          <div css={cssObj.headerFlexBox}>
            <div>{attendanceHeaderItem.disease}</div>
            <div>{attendanceHeaderItem.unauthorized}</div>
            <div>{attendanceHeaderItem.extra}</div>
          </div>
        </div>
      ))}
      <div css={cssObj.special}>특기사항</div>
    </div>

    {attendanceKeyArr.map((gradeAttendance, index) => {
      const grade = index + 1;

      return (
        <div css={cssObj.inputWrapper} key={grade}>
          <div css={cssObj.grade}>{grade}</div>
          <input
            css={cssObj.dayInput}
            type="number"
            placeholder="000"
            {...register(`${gradeAttendance}.total_class_days`, totalDayOption)}
          />
          {attendanceValueArr.map((attendance) => (
            <input
              key={attendance}
              css={cssObj.dataInput}
              // min={0}
              // max={250}
              type="number"
              placeholder="-"
              {...register(`${gradeAttendance}.${attendance}`, dayOption)}
            />
          ))}
          <textarea
            css={cssObj.specialInput}
            rows={2}
            wrap="soft"
            maxLength={20}
            placeholder="입력"
            {...register(`${gradeAttendance}.description`, specialOption)}
          />
        </div>
      );
    })}
  </div>
);
