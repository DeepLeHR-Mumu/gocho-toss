import { useRef } from "react";
import Slider from "react-slick";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { NextPage } from "next";
import Link from "next/link";

import { AuthNav } from "@/components/global/authNav";
import { INTERNAL_URL } from "@/constants";

import { FindCompanyPart, IdPasswordPart } from "./part";
import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

const Signup: NextPage = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.backIcon}>
            <FiArrowLeft />
          </Link>
          <p css={cssObj.title}>회원가입</p>
          <Link href={INTERNAL_URL.HOME} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          <FindCompanyPart sliderRef={sliderRef} />
          <IdPasswordPart sliderRef={sliderRef} />
        </Slider>
      </section>
    </main>
  );
};

export default Signup;
