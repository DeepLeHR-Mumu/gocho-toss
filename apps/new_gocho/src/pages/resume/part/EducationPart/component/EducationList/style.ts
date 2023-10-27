import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,

  titleWrapper: css`
    display: flex;
    gap: 0.75rem;

    & > p {
      ${TEXT.TITLE5_M1620};
      border-right: 1px solid ${COLOR.GRAY200};
      padding-right: 0.75rem;

      :last-of-type {
        border: none;
      }
    }
  `,

  border: css`
    color: ${COLOR.GRAY200};
  `,

  describe: css`
    margin-bottom: 0.75rem;
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY700};
  `,

  attendanceBox: css`
    margin-bottom: 0.75rem;
  `,

  attendanceWrapper: css`
    display: flex;
    align-items: center;
    height: 4.5rem;
    width: 100%;

    overflow: hidden;

    background-color: ${COLOR.GRAY50};

    border-bottom: 1px solid ${COLOR.GRAY200};

    & > div {
      height: 4.5rem;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      color: ${COLOR.BLACK};
      ${TEXT.TITLE6_M1418};

      border-right: 1px solid ${COLOR.GRAY200};

      :last-of-type {
        border-right: none;
      }
    }
  `,

  gradeHeader: css`
    width: 2.25rem;
  `,

  dayHeader: css`
    width: 4.5rem;
  `,

  headerWrapper: css`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    & > div {
      height: 50%;
    }
  `,

  header: css`
    width: 6.75rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
    justify-content: center;

    display: flex;
    align-items: center;
  `,

  headerFlexBox: css`
    display: flex;
    justify-content: center;
    align-items: center;

    ${TEXT.BODY3_R1422};

    & > p {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.25rem;
      height: 2.25rem;
      text-align: center;
    }
  `,

  special: css`
    width: 17.75rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  inputWrapper: css`
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 3rem;

    border-bottom: 1px solid ${COLOR.GRAY200};

    ${TEXT.TITLE6_M1418};

    & > div {
      text-align: center;
      height: 3rem;

      ${TEXT.BODY3_R1422};
      border-right: 1px solid ${COLOR.GRAY200};
    }
  `,

  grade: css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${COLOR.GRAY200};

    height: 3rem;
    width: 2.25rem;
  `,

  dayInput: css`
    display: flex;
    align-items: center;
    justify-content: center;
    & > p {
      width: 4.5rem;
    }
  `,

  dataInput: css`
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
      width: 2.25rem;
    }
  `,

  specialInput: css`
    width: 17.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    ${TEXT.BODY3_R1422};
  `,
};
