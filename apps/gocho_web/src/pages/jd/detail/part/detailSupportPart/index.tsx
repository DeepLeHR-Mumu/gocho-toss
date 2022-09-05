import { FunctionComponent } from "react";
import Image from "next/image";
import { FiInfo } from "react-icons/fi";

import logoSrc from "@public/images/global/deepLeLogo/largeColor.svg";

import { getJobTitleCreator } from "../common/util";

import { getPossibleEduArr } from "./util";
import { DetailSupportPartProps } from "./type";
import { container, containerTitle, flexBox, flexBetweenBox, subTitle, desc, restPoint } from "../common/style";
import {
  wrapper,
  logoImageBox,
  title,
  containerSubTitle,
  isColorPoint,
  isPossibleEduDesc,
  isPossibleEduIcon,
  eduContainer,
  eduImageBox,
} from "./style";
import { NoDataDesc } from "../common/component/noDataDesc";

export const DetailSupportPart: FunctionComponent<DetailSupportPartProps> = ({ freshPosition }) => {
  return (
    <section css={wrapper}>
      <div css={logoImageBox}>
        <Image src={logoSrc} alt="고초대졸닷컴" objectFit="contain" />
      </div>
      <h3 css={title}>{getJobTitleCreator(freshPosition)}</h3>

      <section css={container}>
        <h4 css={containerTitle}>
          지원 조건
          <p css={containerSubTitle}>
            <FiInfo />

            <span css={isColorPoint(true)}>
              <p>
                <strong css={isPossibleEduIcon(true)} /> 지원가능
              </p>
            </span>
            <span css={isColorPoint(false)}>
              <p>
                <strong css={isPossibleEduIcon(false)} /> 지원불가
              </p>
            </span>
          </p>
        </h4>
        <div css={flexBox}>
          <div>
            <div css={flexBetweenBox}>
              <h5 css={subTitle}>학력</h5>

              <ul css={eduContainer}>
                {getPossibleEduArr(freshPosition.possibleEdu).map((edu) => {
                  return (
                    <li key={edu.desc}>
                      <div css={eduImageBox(edu.isPossible)} />
                      <p css={isPossibleEduDesc(edu.isPossible)}>{edu.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div css={flexBetweenBox}>
              <h5 css={subTitle}>경력</h5>
              <p css={desc}>
                {freshPosition.requiredExp.type}

                {freshPosition.requiredExp.maxYear >= 1 && ` ${freshPosition.requiredExp.maxYear}년 이상`}

                {freshPosition.requiredExp.minYear >= 1 && ` ${freshPosition.requiredExp.minYear}년 이하`}
              </p>
            </div>
          </div>
          <div css={flexBetweenBox}>
            <h5 css={subTitle}>기타</h5>
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
        </div>
      </section>
    </section>
  );
};
