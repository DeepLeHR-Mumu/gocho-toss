import { FunctionComponent } from "react";

import { MoveCardButtonsProps } from "./type";
import { wrapper, prevButton, nextButton } from "./style";

export const MoveCardButtons: FunctionComponent<MoveCardButtonsProps> = ({
  postSubmit,
  movePrevCard,
  next = true,
  prev = true,
  prevTitle = "이전",
  nextTitle = "다음",
}) => {
  return (
    <div css={wrapper}>
      {prev && (
        <button css={prevButton} type="button" onClick={movePrevCard}>
          {prevTitle}
        </button>
      )}
      {next && (
        <button css={nextButton} type="submit" onClick={postSubmit}>
          {nextTitle}
        </button>
      )}
    </div>
  );
};
