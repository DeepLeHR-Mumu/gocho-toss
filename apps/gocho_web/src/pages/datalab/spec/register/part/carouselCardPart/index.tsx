import { FunctionComponent, useRef, useState, useEffect } from "react";
import Slider from "react-slick";

import { useProgress, useIsSpecPageBlocking } from "@recoil/hook/spec";

import { scrollToTop } from "shared-ui/common/atom/scrollTop";
import { specRegisterStepEvent } from "shared-ga/spec";

import { Spec1Basic } from "./spec1Basic";
import { Spec2lastEducation } from "./spec2LastEducation";
import { Spec3Highschool } from "./spec3Highschool";
import { Spec4University } from "./spec4University";
import { Spec5Certificate } from "./spec5Certificate";
import { Spec6MiddleEnd } from "./spec6MiddleEnd";
import { Spec7Lang } from "./spec7Lang";
import { Spec8AwardCareerEtc } from "./spec8AwardCareerEtc";
import { Spec9Success } from "./spec9Success";
import { setCarouselSetting } from "./util";
import { moveNextCardDef } from "./type";
import { wrapper } from "./style";

export const SpecWritePart: FunctionComponent = () => {
  const [isSpec6MiddleEnd, setIsSpec6MiddleEnd] = useState<boolean>(true);
  const [userLastEdu, setUserLastEdu] = useState<null | "고졸" | "초대졸">(null);
  const [currentIndex, setCurrenIndex] = useState(1);
  const [maximumIndex, setMaximumIndex] = useState(1);
  const { setIsBlocking } = useIsSpecPageBlocking();

  const sliderRef = useRef<Slider>(null);
  const { setCurrentProgress } = useProgress();

  useEffect(() => {
    setIsBlocking(false);
  }, [setIsBlocking]);

  const moveNextCard: moveNextCardDef = (percent) => {
    scrollToTop();
    setCurrentProgress(percent);
    setCurrenIndex((prev) => {
      return prev + 1;
    });
    sliderRef.current?.slickNext();
  };

  const movePrevCard = () => {
    scrollToTop();
    setCurrenIndex((prev) => {
      return prev - 1;
    });
    sliderRef.current?.slickPrev();
  };

  const handleKeepWriteSpec = () => {
    setIsSpec6MiddleEnd(false);
    setCurrenIndex((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    if (isSpec6MiddleEnd && maximumIndex > 5) {
      return;
    }
    specRegisterStepEvent(maximumIndex);
  }, [maximumIndex, isSpec6MiddleEnd]);

  useEffect(() => {
    if (currentIndex > maximumIndex) {
      setMaximumIndex(currentIndex);
    }
  }, [currentIndex, maximumIndex]);

  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting} ref={sliderRef}>
        <Spec7Lang movePrevCard={movePrevCard} moveNextCard={moveNextCard} />

        <Spec1Basic moveNextCard={moveNextCard} />

        <Spec2lastEducation
          movePrevCard={movePrevCard}
          moveNextCard={moveNextCard}
          userLastEdu={userLastEdu}
          setUserLastEdu={setUserLastEdu}
        />

        {userLastEdu === "고졸" ? (
          <Spec3Highschool movePrevCard={movePrevCard} moveNextCard={moveNextCard} />
        ) : (
          <Spec4University movePrevCard={movePrevCard} moveNextCard={moveNextCard} />
        )}

        <Spec5Certificate movePrevCard={movePrevCard} moveNextCard={moveNextCard} />

        {isSpec6MiddleEnd && (
          <Spec6MiddleEnd
            movePrevCard={movePrevCard}
            moveNextCard={moveNextCard}
            handleKeepWriteSpec={handleKeepWriteSpec}
          />
        )}

        {!isSpec6MiddleEnd && <Spec7Lang movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}

        {!isSpec6MiddleEnd && <Spec8AwardCareerEtc movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}

        <Spec9Success />
      </Slider>
    </section>
  );
};
