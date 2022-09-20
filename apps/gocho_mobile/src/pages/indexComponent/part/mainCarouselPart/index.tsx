import { FunctionComponent, useState } from "react";
import Slider from "react-slick";

import { SlideCard } from "./component/sliderCard";
import { slideArr } from "./constant";
import { wrapper } from "./style";

import { setCarouselSetting } from "./util";

export const MainCarouselPart: FunctionComponent = () => {
  const [, setActiveIndex] = useState<number>(1);
  // const sliderRef = useRef<Slider>(null);
  return (
    <section css={wrapper}>
      <Slider {...setCarouselSetting(setActiveIndex)}>
        {slideArr.map((slide) => {
          return <SlideCard carouselData={slide} key={`$deosn't${slide}`} />;
        })}
      </Slider>
    </section>
  );
};
