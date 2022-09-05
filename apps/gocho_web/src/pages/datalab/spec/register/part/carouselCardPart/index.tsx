import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";

import { useProgress, useLastEdu } from "@recoil/hook/spec";

import { Spec1Basic } from "./spec1Basic";
import { Spec2lastEducation } from "./spec2LastEducation";
import { Spec3Highschool } from "./spec3Highschool";
import { Spec4University } from "./spec4University";
import { Spec5Certificate } from "./spec5Certificate";
import { Spec6MiddleEnd } from "./spec6MiddleEnd";
import { Spec7Lang } from "./spec7Lang";
import { Spec8AwardCareerEtc } from "./spec8AwardCareerEtc";
import { Spec9Success } from "./spec9Success";

import { setCarouselSetting, scrollTop } from "./util";
import { moveNextCardDef } from "./type";
import { wrapper } from "./style";

export const SpecWritePart: FunctionComponent = () => {
  const [isSpec6MiddleEnd, setIsSpec6MiddleEnd] = useState<boolean>(true);
  const { setCurrentProgress } = useProgress();
  const { currentLastEdu } = useLastEdu();
  const sliderRef = useRef<Slider>(null);

  const moveNextCard: moveNextCardDef = (percent) => {
    scrollTop();
    setCurrentProgress(percent);
    sliderRef.current?.slickNext();
  };

  const movePrevCard = () => {
    scrollTop();
    sliderRef.current?.slickPrev();
  };

  const handleKeepWriteSpec = () => {
    setIsSpec6MiddleEnd(false);
  };

  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting} ref={sliderRef}>
        <Spec1Basic moveNextCard={moveNextCard} />

        <Spec2lastEducation movePrevCard={movePrevCard} moveNextCard={moveNextCard} />

        {currentLastEdu === "고졸" ? (
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
