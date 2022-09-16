import { FunctionComponent } from "react";
import { FiSmile, FiMeh, FiMessageSquare } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";
import { LinkButton } from "shared-ui/common/atom/button";
import { SPEC_URL } from "@constant/internalURL";
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
  notQualifiedBox,
  notQualifiedText,
} from "./style";

export const ResultInfoPart: FunctionComponent<ResultInfoPartProps> = ({ resultData }) => {
  if (resultData.isMine && resultData.evalCount < 5) {
    return (
      <div css={notQualifiedBox}>
        <div>
          <p css={notQualifiedText}>
            평가하기를 <span>{5 - resultData.evalCount}</span> 번만 하시면 내 스펙평가내역을 볼 수 있어요
          </p>
        </div>
      </div>
    );
  }
  return (
    <div css={container}>
      <section css={scoreContainer}>
        <h3 css={specTitle}>평균총점</h3>
        {resultData.score === null ? (
          <p css={overview}>
            <span>평가없음</span>
          </p>
        ) : (
          <p css={overview}>
            <span>{resultData.score}</span>
            <span>/ {resultData.scoreCount}</span>
          </p>
        )}
        <div>
          <StarEvaluation size="M" parentScore={resultData.score} />
        </div>
      </section>
      <section css={chipContainer}>
        <div css={chipBox}>
          <div css={title}>
            <div>
              <FiSmile />
            </div>
            <h3>획득한 강점 칩</h3>
          </div>
          {/* TODO === null */}
          {resultData.evals === null ? (
            <div css={noChipContainer}>
              <div css={noChipBox}>획득한 칩이 없습니다.</div>
            </div>
          ) : (
            <div css={chipList}>
              {resultData.evals?.strongPointArr.map((strong) => {
                return <ChipBox key={`강점 칩${strong[0]}`} string={strong[0]} number={strong[1]} />;
              })}
            </div>
          )}
        </div>
        <div css={chipBox}>
          <div css={title}>
            <div>
              <FiMeh />
            </div>
            <h3>획득한 약점 칩</h3>
          </div>
          <div css={chipList}>
            {resultData.evals === null ? (
              <div css={noChipContainer}>
                <div css={noChipBox}>획득한 칩이 없습니다.</div>
              </div>
            ) : (
              <div css={chipList}>
                {resultData.evals?.weakPointArr.map((weakness) => {
                  return <ChipBox key={`약점 칩${weakness[0]}`} string={weakness[0]} number={weakness[1]} />;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
      <section css={feedbackContainer}>
        <div css={title}>
          <div>
            <FiMessageSquare />
          </div>
          <h3>기타 피드백</h3>
        </div>
        {resultData.evals === null || resultData.evals.feedbackArr === null ? (
          <div css={noChipBox}>피드백이 없습니다</div>
        ) : (
          <div css={feedbackBox}>
            {resultData.evals?.feedbackArr?.map((feedback, index) => {
              // 변경될 여지가 거의 없는 값 -> index로 사용해도 무방
              // eslint-disable-next-line react/no-array-index-key
              return <p key={`${feedback}${index}`}>{feedback}</p>;
            })}
          </div>
        )}
      </section>

      <LinkButton
        variant="text"
        text="리스트로 돌아가기"
        linkTo={SPEC_URL}
        iconObj={{
          icon: BsChevronLeft,
          color: COLORS.BLUE_FIRST40,
          size: 0.8,
          position: "left",
        }}
      />
    </div>
  );
};
