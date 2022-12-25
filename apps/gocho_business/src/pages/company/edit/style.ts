import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
  `,
  container: css``,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,
  desc: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
  flexBox: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  flexStartBox: css`
    display: flex;
    align-items: flex-start;
  `,
  flexCenterBox: css`
    display: flex;
    align-items: center;
  `,
  companyInfoBox: css`
    padding: 2rem;
  `,
  lineBox: (width?: number) => {
    if (width) {
      return css`
        width: ${width}%;
        margin-bottom: 1.5rem;
      `;
    }
    return css`
      margin-bottom: 1.5rem;
    `;
  },
  subTitle: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
    margin-bottom: 0.5rem;
    display: inline-block;
  `,
  textValue: css`
    font-size: 1rem;
    font-weight: 400;
    padding: 0.75rem 1rem;
    color: ${COLORS.GRAY10};
  `,
  employeeNumber: css`
    display: flex;
    align-items: center;
    width: 90%;
    > svg {
      font-size: 2rem;
      margin-right: 0.5rem;
      color: ${COLORS.GRAY10};
    }
  `,
  inputLine: css`
    border: 1px solid ${COLORS.GRAY10};
    padding: 0.75rem 1rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,
  unit: css`
    font-size: 1rem;
    font-weight: 400;
    padding: 0.25rem;
  `,
  address: css`
    display: flex;
    align-items: center;
    width: 90%;
  `,
  findAddressButton: css`
    background-color: ${COLORS.GRAY80};
    color: ${COLORS.GRAY10};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    border-radius: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 0.5rem;
    > svg {
      margin-right: 0.5rem;
    }
  `,
  inputLineBox: css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    > svg {
      font-size: 1.25rem;
      color: ${COLORS.GRAY10};
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translate(0, -50%);
    }
    > input[type="text"] {
      border: 1px solid ${COLORS.GRAY10};
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      font-size: 1rem;
      width: 100%;
      font-weight: 400;
      color: ${COLORS.GRAY10};

      ::placeholder {
        color: ${COLORS.GRAY30};
      }
    }
  `,
  mapBox: css`
    background-color: #666;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    width: 25rem;
    height: 15rem;
  `,
  nozoBox: css`
    margin-bottom: 0.5rem;
    > svg {
      font-size: 2rem;
      color: ${COLORS.GRAY10};
      margin-right: 0.75rem;
    }
  `,
  payBox: css`
    width: 45%;
    margin-bottom: 0.5rem;
  `,
  infoTitle: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
  welfareBox: css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  `,
};
