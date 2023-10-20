import { FC } from "react";

import { cssObj } from "./style";
import { AttendanceFormProps } from "./type";

export const AttendanceForm: FC<AttendanceFormProps> = ({ register }) => (
  <div>
    <div css={cssObj.wrapper}>
      <div css={cssObj.gradeHeader}>학년</div>
      <div css={cssObj.dayHeader}>수업일수</div>

      <div css={cssObj.headerWrapper}>
        <div css={cssObj.header}>결석</div>
        <div css={cssObj.headerFlexBox}>
          <div>질병</div>
          <div>무단</div>
          <div>기타</div>
        </div>
      </div>

      <div css={cssObj.headerWrapper}>
        <div css={cssObj.header}>지각</div>
        <div css={cssObj.headerFlexBox}>
          <div>질병</div>
          <div>무단</div>
          <div>기타</div>
        </div>
      </div>
      <div css={cssObj.headerWrapper}>
        <div css={cssObj.header}>조퇴</div>
        <div css={cssObj.headerFlexBox}>
          <div>질병</div>
          <div>무단</div>
          <div>기타</div>
        </div>
      </div>
      <div css={cssObj.headerWrapper}>
        <div css={cssObj.header}>결과</div>
        <div css={cssObj.headerFlexBox}>
          <div>질병</div>
          <div>무단</div>
          <div>기타</div>
        </div>
      </div>

      <div css={cssObj.special}>특기사항</div>
    </div>
    <div css={cssObj.inputWrapper}>
      <div css={cssObj.grade}>1</div>
      <input
        css={cssObj.dayInput}
        type="number"
        placeholder="000"
        {...register("first_attendance.total_class_days", {
          min: 190,
          max: 250,
        })}
      />

      {/* 결석 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 지각 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 조퇴 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_tardy", {
          min: 0,
          max: 250,
        })}
      />

      {/* 결과 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_leave", {
          min: 0,
          max: 250,
        })}
      />

      {/* 특기사항 */}
      <input
        css={cssObj.specialInput}
        placeholder="입력"
        {...register("first_attendance.description", {
          maxLength: 20,
        })}
      />
    </div>
    <div css={cssObj.inputWrapper}>
      <div css={cssObj.grade}>2</div>
      <input
        css={cssObj.dayInput}
        type="number"
        placeholder="000"
        {...register("second_attendance.total_class_days", {
          min: 190,
          max: 250,
        })}
      />

      {/* 결석 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 지각 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 조퇴 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_tardy", {
          min: 0,
          max: 250,
        })}
      />

      {/* 결과 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.disease_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.unauthorized_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("second_attendance.extra_leave", {
          min: 0,
          max: 250,
        })}
      />

      {/* 특기사항 */}
      <input
        css={cssObj.specialInput}
        placeholder="입력"
        {...register("second_attendance.description", {
          maxLength: 20,
        })}
      />
    </div>
    <div css={cssObj.inputWrapper}>
      <div css={cssObj.grade}>3</div>
      <input
        css={cssObj.dayInput}
        type="number"
        placeholder="000"
        {...register("second_attendance.total_class_days", {
          min: 190,
          max: 250,
        })}
      />

      {/* 결석 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.disease_school_absent", {
          min: 1,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.unauthorized_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.extra_school_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 지각 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.disease_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.unauthorized_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.extra_subject_absent", {
          min: 0,
          max: 250,
        })}
      />

      {/* 조퇴 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.disease_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.unauthorized_tardy", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.extra_tardy", {
          min: 0,
          max: 250,
        })}
      />

      {/* 결과 */}
      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.disease_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.unauthorized_leave", {
          min: 0,
          max: 250,
        })}
      />

      <input
        css={cssObj.dataInput}
        type="number"
        placeholder="0"
        {...register("third_attendance.extra_leave", {
          min: 0,
          max: 250,
        })}
      />

      {/* 특기사항 */}
      <input
        css={cssObj.specialInput}
        placeholder="입력"
        {...register("third_attendance.description", {
          maxLength: 20,
        })}
      />
    </div>
  </div>
);
