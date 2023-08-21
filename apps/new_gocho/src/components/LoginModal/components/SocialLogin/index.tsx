import Image from "next/image";
import { FiX } from "react-icons/fi";
import { Button } from "shared-ui/deeple-ds";
import LogoColor from "shared-image/global/deepLeLogo/largeColor.svg";

import kakao from "@/public/kakao.svg";

import { SocialLoginProps } from "./type";
import { cssObj } from "./style";

const SocialLogin = ({ toEmailLogin }: SocialLoginProps) => {
  return (
    <div css={cssObj.wrapper}>
      <FiX css={cssObj.closeIcon} />
      <h3 css={cssObj.title}>생산직 채용의 새로운 기준</h3>
      <Image src={LogoColor} alt="고초대졸_로고" width={280} height={36} css={cssObj.logo} />
      <span css={cssObj.subtitle}>가장 빠르고 정확한 생산직, 기술직 엄선 매칭 플랫폼</span>
      <div css={cssObj.tooltip}>3초만에 쉽게 가입하기</div>
      <Button size="large" css={cssObj.kakaoButton}>
        <Image src={kakao} alt="카카오" css={cssObj.kakaoLogo} />
        카카오로 로그인
      </Button>
      <Button size="small" css={cssObj.emailLogin} onClick={toEmailLogin}>
        이메일로 로그인
      </Button>
    </div>
  );
};

export default SocialLogin;
