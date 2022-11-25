import { FunctionComponent } from "react";
import { FiSmile, FiMeh, FiMessageSquare, FiUser } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";
import { LinkButton } from "shared-ui/common/atom/button";
import { SPEC_LIST_URL } from "shared-constant/internalURL";
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
          평균총점
        </p>
        {resultData.score === null ? (
          <p css={overview}>평가없음</p>
        ) : (
          <p css={overview}>
            {resultData.score}
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
          {/* TODO === null */}
          {resultData.evals === null ? (
            <p css={noChipContainer}>획득한 칩이 없습니다.</p>
          ) : (
            <ul css={chipList}>
              {resultData.evals?.strongPointArr.map((strong) => {
                return <ChipBox key={`강점 칩${strong[0]}`} string={strong[0]} number={strong[1]} />;
              })}
            </ul>
          )}
        </div>
        <div css={chipBox}>
          <p css={title}>
            <FiMeh /> 획득한 약점 칩
          </p>

          <div css={chipList}>
            {resultData.evals === null ? (
              <p css={noChipContainer}>획득한 칩이 없습니다.</p>
            ) : (
              <ul css={chipList}>
                {resultData.evals?.weakPointArr.map((weakness) => {
                  return <ChipBox key={`약점 칩${weakness[0]}`} string={weakness[0]} number={weakness[1]} />;
                })}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section css={feedbackContainer}>
        <p css={title}>
          <FiMessageSquare /> 기타 피드백
        </p>

        {resultData.evals === null || resultData.evals.feedbackArr === null ? (
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
            size: 0.8,
            position: "left",
          }}
        />
      </div>
    </div>
  );
};
