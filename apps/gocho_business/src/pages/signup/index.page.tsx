import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FiX } from "react-icons/fi";
import { NextPage } from "next";
import Link from "next/link";

import { Spinner } from "shared-ui/common/spinner";
import { AuthNav } from "@/components/global/authNav";
import { INTERNAL_URL } from "@/constants";

import { FindCompanyPart, IdPasswordPart, AuthPart } from "./part";
import { setCarouselSetting } from "./util";
import { cssObj } from "./style";

const Signup: NextPage = () => {
  const [renderInputs, setRenderInputs] = useState(false);

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setRenderInputs(true);
  }, []);

  if (!renderInputs) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <main>
      <AuthNav />
      <section css={cssObj.sectionContainer}>
        <div css={cssObj.titleContainer}>
          <p css={cssObj.title}>회원가입</p>
          <Link href={INTERNAL_URL.LOGIN} passHref css={cssObj.closeIcon}>
            <FiX />
          </Link>
        </div>
        <Slider {...setCarouselSetting} ref={sliderRef}>
          <FindCompanyPart sliderRef={sliderRef} />
          <IdPasswordPart sliderRef={sliderRef} />
          <AuthPart sliderRef={sliderRef} />
        </Slider>
      </section>
    </main>
  );
};

export default Signup;
