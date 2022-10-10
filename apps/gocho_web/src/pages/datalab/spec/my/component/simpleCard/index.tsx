import { FunctionComponent } from "react";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";
import { dateConverter } from "shared-util/date";
import { MySpecCard } from "../mySpecCard";

import { SimpleCardProps } from "./type";
import { cardBox, countCSS, dateCSS, listCSS, moreButton, evalBox, scoreText, noEval } from "./style";

export const SimpleCard: FunctionComponent<SimpleCardProps> = ({
  index,
  evalCount,
  currentActiveIndex,
  setActiveCardIndex,
  mySpecData,
}) => {
  const isActive = Boolean(index === currentActiveIndex);
  const mustEvalCount = 5;

  const handleShowMore = () => {
    setActiveCardIndex(index);
  };

  const hasEvalCount = Boolean(evalCount >= mustEvalCount);

  const { year, month, date } = dateConverter(mySpecData.createdTime);

  if (isActive) {
    return <MySpecCard mySpecData={mySpecData} />;
  }

  return (
    <div css={cardBox}>
      <ul css={listCSS}>
        <li css={dateCSS}>{`${year}∙${month}∙${date}`}</li>
        <li>
          {hasEvalCount ? (
            <div css={evalBox}>
              <p css={scoreText(mySpecData.score)}>{mySpecData.score ? mySpecData.score : "평가없음"}</p>
              <StarEvaluation size="S" parentScore={mySpecData.score} />
            </div>
          ) : (
            <p css={noEval}>{mustEvalCount - evalCount}번 더 평가해주세요.</p>
          )}
        </li>
        <li css={countCSS}>{mySpecData.scoreCount}</li>
        <li>
          <button
            css={moreButton}
            type="button"
            onClick={() => {
              if (hasEvalCount) {
                handleShowMore();
              }
            }}
            aria-label="평가 자세히 보기"
          >
            자세히보기
          </button>
        </li>
      </ul>
    </div>
  );
};
