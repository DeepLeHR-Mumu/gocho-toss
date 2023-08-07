import { useEffect } from "react";
import Image from "next/image";

import logo from "public/image/deepleLogo/bizTextColor.svg";
import mobile from "public/image/mobile.svg";

import { cssObj } from "./style";

const Mobile = () => {
  useEffect(() => {
    const headerArr = document.getElementsByTagName("header");

    if (headerArr.length > 0) {
      const globalNav = headerArr[0];
      globalNav.style.display = "none";
    }
  }, []);

  return (
    <main css={cssObj.container}>
      <div css={cssObj.flexColumn}>
        <Image src={mobile} alt="mobile" width={80} height={80} />
        <Image src={logo} alt="logo" width={238} height={32} />
        <p css={cssObj.description}>
          고초대졸 비즈니스는 PC버전만 지원하고 있습니다. <br /> PC에서 편하게 이용해 보세요!
        </p>
        <span css={cssObj.inquiry}>문의 : cs@deeplehr.com</span>
      </div>
    </main>
  );
};

export default Mobile;
