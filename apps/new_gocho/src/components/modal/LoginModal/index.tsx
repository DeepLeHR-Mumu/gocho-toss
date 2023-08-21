import { useRef, useState } from "react";
import Slider from "react-slick";
import { Modal } from "shared-ui/deeple-ds";

import SocialLogin from "./components/SocialLogin";
import EmailLogin from "./components/EmailLogin";
import FindPassword from "./components/FindPassword";
import SignUp from "./components/SignUp";

import { cssObj } from "./style";

export const LoginModal = () => {
  type SliderState = "signup" | "password";
  const [current, setCurrent] = useState<SliderState>("signup");
  const sliderRef = useRef<Slider>(null);

  const sliderConfig = {
    dots: false,
    autoplay: false,
    arrows: false,
    infinite: false,
    touchMove: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesPerView: "auto",
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const toFindPassword = () => {
    setCurrent("password");
    next();
  };

  const toSignUp = () => {
    setCurrent("signup");
    next();
  };

  return (
    <Modal>
      <div css={cssObj.wrapper}>
        <Slider {...sliderConfig} ref={sliderRef}>
          <SocialLogin toEmailLogin={next} />
          <EmailLogin previousHandler={prev} toFindPassword={toFindPassword} toSignUp={toSignUp} />
          {current === "signup" && <SignUp previousHandler={prev} />}
          {current === "password" && <FindPassword previousHandler={prev} />}
        </Slider>
      </div>
    </Modal>
  );
};
