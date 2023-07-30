import { RefObject } from "react";
import Slider from "react-slick";

export interface AuthPartProps {
  sliderRef: RefObject<Slider>;
}

export interface PostSubmitValues {
  department: string;
  position: string;
  manager_agreement: {
    terms: boolean;
    privacy: boolean;
  };
}

export interface DecryptedUserInfo {
  // 주로 M, S 만 사용될 것 같다. M 은 휴대폰인증, S 는 PASS 인증
  authtype: "M" | "C" | "X" | "F" | "S";
  birthdate: string;
  di: string;
  enctime: string;
  gender: "1" | "0"; // 1은 남성, 0은 여성
  // 1: SKT, 2: KT, 3: LGU+, 5: SKT 알뜰, 6: KT 알뜰, 7: LGU+ 알뜰
  mobileco: "1" | "2" | "3" | "5" | "6" | "7";
  mobileno: string;
  name: "�ֿ���";
  nationalinfo: "0" | "1"; // 0은 내국인, 1은 외국인
  receivedata: null;
  requestno: string;
  responseno: string;
  resultcode: "0000";
  sitecode: string;
  utf8_name: string;
}
