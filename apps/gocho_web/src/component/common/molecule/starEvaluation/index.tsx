import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { FunctionComponent, useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { hoverLayer, container, starLayer } from "./style";
import { SettingProps, DisplayProps } from "./type";

export const StarEvaluation: FunctionComponent<SettingProps | DisplayProps> = ({
  size,
  parentScore,
  parentSetState,
}) => {
  const [score, setScore] = useState(0);
  const [visibleScore, setVisibleScore] = useState<null | number>(null);

  useEffect(() => {
    if (parentSetState) {
      parentSetState(score / 2);
    }
  }, [score, parentSetState]);

  useEffect(() => {
    if (parentScore === null) {
      setScore(0);
      return;
    }
    if (parentScore) {
      setScore(parentScore * 2);
    }
  }, [parentScore]);

  // TODO if로 다이어트
  // if 부모가 있을때
  // 부모가없을때
  return (
    <div css={container}>
      <div css={starLayer(size)}>
        {!visibleScore &&
          dummyArrCreator(5).map((val) => {
            const point = val + 1;
            const rounded = Math.round(score);
            if (point <= rounded / 2 && rounded / 2 !== 0.5) return <BsStarFill key={`filledStar${val + 1}`} />;

            if (point - rounded / 2 === 0.5) return <BsStarHalf key={`halfStar${val + 1}`} />;

            return <BsStar key={`emptyStar${val + 1}`} />;
          })}
        {visibleScore &&
          dummyArrCreator(5).map((val) => {
            const point = val + 1;

            if (point <= visibleScore / 2 && visibleScore / 2 !== 0.5)
              return <BsStarFill key={`filledStar${val + 1}`} />;

            if (point - visibleScore / 2 === 0.5) return <BsStarHalf key={`halfStar${val + 1}`} />;

            return <BsStar key={`emptyStar${val + 1}`} />;
          })}
      </div>
      {!parentScore && parentSetState && (
        <div css={hoverLayer}>
          {dummyArrCreator(10).map((val) => {
            const point = val + 1;
            return (
              <button
                key={`star${val}`}
                type="button"
                onClick={() => {
                  setScore(point);
                }}
                onPointerOver={() => {
                  setVisibleScore(point);
                }}
                onPointerLeave={() => {
                  setVisibleScore(null);
                }}
                aria-label={`${val / 2}로 별점 메기기`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
