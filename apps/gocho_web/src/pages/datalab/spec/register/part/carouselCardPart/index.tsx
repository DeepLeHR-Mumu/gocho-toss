import { FunctionComponent, useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";

import { scrollToTop } from "shared-ui/common/atom/scrollTop";
import { specRegisterStepEvent } from "shared-ga/spec";

// import { useProgress } from "@recoil/hook/spec";

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
import { wrapper } from "./style";

export const SpecWritePart: FunctionComponent = () => {
  const [isWriteMoreSpec, setIsWriteMoreSpec] = useState<boolean>(true);
  const [userLastEdu, setUserLastEdu] = useState<null | "고졸" | "초대졸">(null);
  const [currentIndex, setCurrenIndex] = useState(1);
  const [maximumIndex, setMaximumIndex] = useState(1);

  // const { setCurrentProgress } = useProgress();
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);

  const moveNextCard = (percent: number) => {
    sliderRef.current?.slickNext();
    scrollToTop();
    sessionStorage.setItem("progressPercent", `${percent}`);
    // setCurrentProgress(percent);
    setCurrenIndex((prev) => {
      return prev + 1;
    });
  };

  const movePrevCard = () => {
    scrollToTop();
    setCurrenIndex((prev) => {
      return prev - 1;
    });
    sliderRef.current?.slickPrev();
  };

  const writeMoreSpecHandler = () => {
    setIsWriteMoreSpec(false);
    router.push({
      hash: "lang",
    });
    setCurrenIndex((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    if (isWriteMoreSpec && maximumIndex > 5) {
      return;
    }
    specRegisterStepEvent(maximumIndex);
  }, [maximumIndex, isWriteMoreSpec]);

  useEffect(() => {
    if (currentIndex > maximumIndex) {
      setMaximumIndex(currentIndex);
    }
  }, [currentIndex, maximumIndex]);

  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting} ref={sliderRef}>
        <Spec1Basic moveNextCard={moveNextCard} />
        <Spec2lastEducation movePrevCard={movePrevCard} moveNextCard={moveNextCard} setUserLastEdu={setUserLastEdu} />
        {userLastEdu === "고졸" && <Spec3Highschool movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}
        {userLastEdu === "초대졸" && <Spec4University movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}
        <Spec5Certificate movePrevCard={movePrevCard} moveNextCard={moveNextCard} />

        {isWriteMoreSpec && (
          <Spec6MiddleEnd
            movePrevCard={movePrevCard}
            moveNextCard={moveNextCard}
            writeMoreSpecHandler={writeMoreSpecHandler}
          />
        )}
        {!isWriteMoreSpec && <Spec7Lang movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}
        {!isWriteMoreSpec && <Spec8AwardCareerEtc movePrevCard={movePrevCard} moveNextCard={moveNextCard} />}
        <Spec9Success />
      </Slider>
    </section>
  );
};
