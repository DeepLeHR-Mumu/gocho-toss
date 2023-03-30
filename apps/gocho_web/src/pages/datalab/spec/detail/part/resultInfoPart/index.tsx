import { FunctionComponent } from "react";
import { FiSmile, FiMeh, FiMessageSquare, FiUser } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";
import { LinkButton } from "shared-ui/common/atom/button";
import { SPEC_LIST_URL } from "shared-constant";
import { COLORS } from "shared-style/color";

import { ChipBox } from "./component/chipBox";
import { ResultInfoPartProps } from "./type";
import {
  chipBox,
  chipContainer,
  chipList,
  title,
  container,
  overview,
  scoreContainer,
  specTitle,
  feedbackContainer,
  feedbackBox,
  noChipContainer,
  noChipBox,
  notQualifiedText,
  notQualifiedBox,
  linkBoxCSS,
} from "./style";

export const ResultInfoPart: FunctionComponent<ResultInfoPartProps> = ({ resultData }) => {
  if (resultData.isMine && resultData.evalCount < 5) {
    return (
      <div css={notQualifiedBox}>
        <p css={notQualifiedText}>
          평가하기를 <span>{5 - resultData.evalCount}</span> 번만 하시면 내 스펙평가내역을 볼 수 있어요
        </p>
        <div css={linkBoxCSS}>
          <LinkButton
            variant="outlined"
            text="리스트로 돌아가기"
            linkTo={SPEC_LIST_URL}
            iconObj={{
              icon: BsChevronLeft,
              color: COLORS.BLUE_FIRST40,
              size: 0.8,
              position: "left",
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div css={container}>
      <section css={scoreContainer}>
        <p css={specTitle}>
          <FiUser />
          평균총점 / 평가횟수
        </p>
        {resultData.score === null ? (
          <p css={overview}>평가없음</p>
        ) : (
          <p css={overview}>
            {resultData.score.toFixed(2)}
            <span> / {resultData.scoreCount}</span>
          </p>
        )}
        <StarEvaluation size="M" parentScore={resultData.score} />
      </section>

      <section css={chipContainer}>
        <div css={chipBox}>
          <p css={title}>
            <FiSmile /> 획득한 강점 칩
          </p>
          {Object.keys(resultData.evals?.strongPointArr || {}).length === 0 ? (
            <p css={noChipContainer}>획득한 칩이 없습니다.</p>
          ) : (
            <div css={chipList}>
              {Object.keys(resultData.evals?.strongPointArr || {}).map((key) => {
                return (
                  <ChipBox key={`Strong${key}`} string={key} number={resultData.evals?.strongPointArr[key] || 0} />
                );
              })}
            </div>
          )}
        </div>
        <div css={chipBox}>
          <p css={title}>
            <FiMeh /> 획득한 약점 칩
          </p>

          <div css={chipList}>
            {Object.keys(resultData.evals?.weakPointArr || {}).length === 0 ? (
              <p css={noChipContainer}>획득한 칩이 없습니다.</p>
            ) : (
              <div css={chipList}>
                {Object.keys(resultData.evals?.weakPointArr || {}).map((key) => {
                  return (
                    <ChipBox key={`Strong${key}`} string={key} number={resultData.evals?.weakPointArr[key] || 0} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <section css={feedbackContainer}>
        <p css={title}>
          <FiMessageSquare /> 기타 피드백
        </p>

        {resultData.evals?.feedbackArr === undefined || resultData.evals?.feedbackArr?.length === 0 ? (
          <p css={noChipBox}>피드백이 없습니다</p>
        ) : (
          <ul css={feedbackBox}>
            {resultData.evals?.feedbackArr?.map((feedback, index) => {
              // 변경될 여지가 거의 없는 값 -> index로 사용해도 무방
              // eslint-disable-next-line react/no-array-index-key
              return <li key={`${feedback}${index}`}>{feedback}</li>;
            })}
          </ul>
        )}
      </section>

      <div css={linkBoxCSS}>
        <LinkButton
          variant="text"
          text="리스트로 돌아가기"
          linkTo={SPEC_LIST_URL}
          iconObj={{
            icon: BsChevronLeft,
            color: COLORS.BLUE_FIRST40,
            size: 1,
            position: "left",
          }}
        />
      </div>
    </div>
  );
};
