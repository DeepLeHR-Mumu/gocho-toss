import { ExecutivesProps } from "./type";
import { cssObj } from "./style";

export const Executives = ({ maleNumber, femaleNumber }: ExecutivesProps) => {
  const total = maleNumber + femaleNumber;
  const maleRatio = Math.floor((maleNumber / total) * 100);

  return total ? (
    <div css={cssObj.wrapper}>
      <div css={cssObj.simpleChartWrapper}>
        <div css={cssObj.maleBar(maleRatio)} />
        <div css={cssObj.femaleBar(100 - maleRatio)} />
      </div>
      <span css={cssObj.contentTitle}>임직원</span>
      <span css={cssObj.content}>{total}명</span>
    </div>
  ) : (
    <> </>
  );
};
