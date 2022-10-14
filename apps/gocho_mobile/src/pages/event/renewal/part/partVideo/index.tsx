import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import mainBackground02 from "shared-image/event/renewal/main_background_02.jpg";
import drawLine from "shared-image/event/renewal/draw_line.svg";
import drawPoint from "shared-image/event/renewal/draw_point.svg";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import {
  backgroundBox,
  checkBox,
  desc,
  descPoint,
  infoBox,
  infoTitle,
  lineBox,
  linkCSS,
  listBox,
  pointBox,
  positionBox,
  unCheckBox,
  videoBox,
  wrapper,
} from "./style";

export const PartVideo: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <div css={positionBox}>
        <div css={videoBox}>
          <video loop muted autoPlay>
            <source src="https://cdn.gocho-back.com/temp/mobile_event.mp4" type="video/mp4" />
          </video>
        </div>

        <ul css={infoBox}>
          <li>
            <strong css={infoTitle}>
              채용 플랫폼 유일 공장 정보 제공
              <div css={pointBox}>
                <Image src={drawPoint} alt="" objectFit="contain" layout="fixed" />
              </div>
            </strong>

            <div css={lineBox}>
              <Image src={drawLine} alt="" objectFit="contain" layout="responsive" />
            </div>
            <p css={desc}>40만건에 해당하는 공장 정보를 손수 가공하여 구직 과정에 필요한 정보를 정리했습니다!</p>
          </li>
          <li>
            <p css={desc}>
              생산품부터 통근버스, 기숙사까지 기업정보가 아닌
              <span css={descPoint}>실제로 근무하게 될 공장</span>에 대한 정보를 살펴보아요!
            </p>
            <Link href={`${JOBS_DETAIL_URL}/5360`} passHref>
              <a css={linkCSS}>
                <FiArrowRight /> 공장정보 보러가기
              </a>
            </Link>
          </li>
        </ul>

        <ul css={listBox}>
          <li>
            <span css={checkBox}>
              <FiCheck />
            </span>
            고초대졸 회원가입하기
          </li>
          <li>
            <span css={checkBox}>
              <FiCheck />
            </span>
            공고 검색하기
          </li>
          <li>
            <span css={unCheckBox} /> 스펙평가 받기
          </li>
          <li>
            <span css={checkBox}>
              <FiCheck />
            </span>
            취업꿀팁 살펴보기
          </li>
          <li>
            <span css={unCheckBox} /> 자격증 준비하기
          </li>
          <li>
            <span css={unCheckBox} /> 추노준비
          </li>
          <li>
            <span css={unCheckBox} /> 취직 성공하기
          </li>
        </ul>
      </div>

      <div css={backgroundBox}>
        <Image src={mainBackground02} alt="" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};
