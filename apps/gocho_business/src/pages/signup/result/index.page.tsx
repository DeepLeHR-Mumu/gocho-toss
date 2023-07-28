import { NextPage } from "next";
import { FiCheckCircle } from "react-icons/fi";

import { cssObj } from "./style";

const Signup: NextPage = () => (
  <div css={cssObj.container}>
    <FiCheckCircle css={cssObj.check} />
    <span css={cssObj.text}>PASS 인증 처리를 완료했습니다.</span>
    <span css={cssObj.text}>기존 화면으로 돌아가 회원가입 절차를 진행해 주세요.</span>
  </div>
);

export default Signup;
