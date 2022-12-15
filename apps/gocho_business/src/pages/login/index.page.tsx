import { NextPage } from "next";
import { FiEye } from "react-icons/fi";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";

import { container, wrapper } from "./style";

const LoginPage: NextPage = () => (
  <main css={wrapper}>
    <InvisibleH2 title="고초대졸닷컴 로그인하기" />
    <div css={container}>
      <div>{/* <Image /> */}</div>
      <strong>생산직 채용의 새로운 기준</strong>
      <form>
        <ul>
          <li>
            <input type="email" placeholder="아이디(이메일)" />
          </li>
          <li>
            <input type="password" placeholder="비밀번호" />
            <button type="button" aria-label="비밀번호 확인">
              <FiEye />
            </button>
          </li>
        </ul>
        <div>
          <label htmlFor="auto_login">
            <input type="checkbox" id="auto_login" />
            <p>자동 로그인</p>
          </label>
          <button type="button">비밀번호 찾기</button>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  </main>
);

export default LoginPage;
