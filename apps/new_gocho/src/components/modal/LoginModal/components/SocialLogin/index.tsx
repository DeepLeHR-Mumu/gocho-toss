import Image from "next/image";
import { FiX } from "react-icons/fi";
import { Button } from "shared-ui/deeple-ds";

import logoColor from "shared-image/global/deepLeLogo/largeColor.svg";
import logoColorForMobile from "@/public/logoColor.svg";

import { useGetDeviceType } from "@/globalStates";
import kakao from "@/public/kakao.svg";

import { SocialLoginProps } from "./type";
import { cssObj } from "./style";

const SocialLogin = ({ closeHandler, toEmailLogin }: SocialLoginProps) => {
  const { isMobile, browserSize } = useGetDeviceType();

  return (
    <div
      css={cssObj.wrapper}
      style={isMobile ? { width: `${browserSize.innerWidth}px`, height: `${browserSize.innerHeight}px` } : {}}
    >
      <FiX css={cssObj.closeIcon} onClick={closeHandler} />
      {isMobile ? (
        <>
          <div css={cssObj.mobileTitleWrapper}>
            <h3 css={cssObj.title}>생산직 채용의</h3>
            <h3 css={cssObj.title}>새로운 기준</h3>
          </div>
          <Image src={logoColorForMobile} alt="고초대졸_로고" width={230} height={36} css={cssObj.logo} />
          <span css={cssObj.subtitle}>가장 빠르고 정확한 생산직, 기술직 엄선 매칭 플랫폼</span>
          <div css={cssObj.tooltip}>3초만에 쉽게 가입하기</div>
          <Button size="large" css={cssObj.kakaoButton}>
            <Image src={kakao} alt="카카오" css={cssObj.kakaoLogo} />
            카카오로 로그인
          </Button>
          <Button size="small" css={cssObj.emailLogin} onClick={toEmailLogin}>
            이메일로 로그인
          </Button>
          <p css={cssObj.mobileDescription}>회원가입 시 이용약관과 개인정보처리방침에</p>
          <p css={cssObj.mobileDescription}>동의한 것으로 인정됩니다.</p>
        </>
      ) : (
        <>
          <h3 css={cssObj.title}>생산직 채용의 새로운 기준</h3>
          <Image src={logoColor} alt="고초대졸_로고" width={280} height={36} css={cssObj.logo} />
          <span css={cssObj.subtitle}>가장 빠르고 정확한 생산직, 기술직 엄선 매칭 플랫폼</span>
          <div css={cssObj.tooltip}>3초만에 쉽게 가입하기</div>
          <Button size="large" css={cssObj.kakaoButton}>
            <Image src={kakao} alt="카카오" css={cssObj.kakaoLogo} />
            카카오로 로그인
          </Button>
          <Button size="small" css={cssObj.emailLogin} onClick={toEmailLogin}>
            이메일로 로그인
          </Button>
        </>
      )}
    </div>
  );
};

export default SocialLogin;
