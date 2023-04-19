import { FunctionComponent } from "react";
import Image from "next/image";
import { FiInfo } from "react-icons/fi";

import logoSrc from "shared-image/global/deepLeLogo/largeColor.svg";
import graduateColor from "shared-image/global/common/graduate_color.svg";
import graduateGray from "shared-image/global/common/graduate_gray.svg";

import { getJobTitleCreator } from "../common/util";
import { NoDataDesc } from "../common/component/noDataDesc";
import { getPossibleEduArr } from "./util";
import { DetailSupportPartProps } from "./type";
import { container, containerTitle, flexBox, subTitle, desc, restPoint } from "../common/style";
import {
  logoImageBox,
  title,
  containerSubTitle,
  isColorPoint,
  isPossibleEduDesc,
  isPossibleEduIcon,
  eduContainer,
  eduImageBox,
  flexText,
  subDesc,
} from "./style";

export const DetailSupportPart: FunctionComponent<DetailSupportPartProps> = ({ freshPosition }) => {
  return (
    <section>
      <div css={logoImageBox}>
        <Image src={logoSrc} alt="" />
      </div>
      <h3 css={title}>{getJobTitleCreator(freshPosition)}</h3>

      <section css={container}>
        <div css={flexText}>
          <h4 css={containerTitle}>지원 조건</h4>
          <p css={containerSubTitle}>
            <FiInfo />
            <span css={isColorPoint(true)}>
              <strong css={isPossibleEduIcon}>
                <Image src={graduateColor} alt="" fill />
              </strong>
              지원가능
            </span>
            <span css={isColorPoint(false)}>
              <strong css={isPossibleEduIcon}>
                <Image src={graduateGray} alt="" fill />
              </strong>
              지원불가
            </span>
          </p>
        </div>
        <div css={flexBox}>
          <p css={subTitle}>학력</p>
          <ul css={eduContainer}>
            {getPossibleEduArr(freshPosition.possibleEdu).map((edu) => {
              return (
                <li key={edu.desc}>
                  <div css={eduImageBox}>
                    <Image src={edu.isPossible ? graduateColor : graduateGray} alt="" />
                  </div>
                  <p css={isPossibleEduDesc(edu.isPossible)}>{edu.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div css={flexBox}>
          <p css={subTitle}>경력</p>
          <p css={desc}>
            {freshPosition.requiredExp.type}

            {freshPosition.requiredExp.type === "경력" && (
              <span css={subDesc}>
                {freshPosition.requiredExp.minYear &&
                  freshPosition.requiredExp.minYear >= 1 &&
                  ` ${freshPosition.requiredExp.minYear}년 이상`}
                {freshPosition.requiredExp.maxYear &&
                  freshPosition.requiredExp.maxYear >= 1 &&
                  ` ${freshPosition.requiredExp.maxYear}년 이하`}
              </span>
            )}
            {freshPosition.requiredExp.type === "신입/경력" && (
              <span css={subDesc}>
                경력인 경우
                {freshPosition.requiredExp.minYear &&
                  freshPosition.requiredExp.minYear >= 1 &&
                  ` ${freshPosition.requiredExp.minYear}년 이상`}
                {freshPosition.requiredExp.maxYear &&
                  freshPosition.requiredExp.maxYear >= 1 &&
                  ` ${freshPosition.requiredExp.maxYear}년 이하`}
              </span>
            )}
          </p>
        </div>
        <div css={flexBox}>
          <p css={subTitle}>기타</p>
          {freshPosition.requiredEtcArr ? (
            <p css={desc}>
              {freshPosition.requiredEtcArr.map((etc) => {
                return (
                  <span css={restPoint} key={etc}>
                    {etc}
                  </span>
                );
              })}
            </p>
          ) : (
            <NoDataDesc />
          )}
        </div>
      </section>
    </section>
  );
};
