import { FunctionComponent } from "react";
import Image from "next/image";

import factoryIcon from "shared-image/global/common/factory_icon.svg";

import { NoDataDesc } from "../common/component/noDataDesc";

import { DetailWorkPartProps } from "./type";
import { container, containerTitle, flexBox, subTitle, restPoint, desc } from "../common/style";
import { colorPoint, mainProductDesc, productContainer, factoryButton, flexDesc } from "./style";

export const DetailWorkPart: FunctionComponent<DetailWorkPartProps> = ({ freshPosition }) => {
  return (
    <section css={container}>
      <h4 css={containerTitle}>근무 조건</h4>
      <div css={flexBox}>
        <p css={subTitle}>채용 인원</p>
        <p css={desc}>{freshPosition.hireCount}명</p>
      </div>

      <div css={flexBox}>
        <p css={subTitle}>채용 직무</p>
        <div css={flexBox}>
          <p css={mainProductDesc}>{freshPosition.task.mainTask}</p>

          {freshPosition.task.subTaskArr && (
            <ul css={productContainer}>
              {freshPosition.task.subTaskArr.map((task) => {
                return <li key={`직무_${task}`}>{task}</li>;
              })}
            </ul>
          )}
        </div>
      </div>

      <div css={flexBox}>
        <p css={subTitle}>계약 형태</p>
        <p css={desc}>
          {freshPosition.contractType.type}{" "}
          {freshPosition.contractType.conversionRate && (
            <>
              전환율 <span css={colorPoint}>{freshPosition.contractType.conversionRate}%</span>
            </>
          )}
        </p>
      </div>

      <div css={flexBox}>
        <p css={subTitle}>세부 직무</p>
        <p css={desc}>
          {freshPosition.taskDetailArr.map((detail) => {
            return (
              <span css={restPoint} key={`직무상세_${detail}`}>
                {detail}
              </span>
            );
          })}
        </p>
      </div>

      <div css={flexBox}>
        <p css={subTitle}>근무지</p>
        <p css={flexDesc}>
          {freshPosition.placeArr.map((place) => {
            return (
              <span css={restPoint} key={`지역_${place}`}>
                {place}
              </span>
            );
          })}
        </p>
        {freshPosition.factoryArr &&
          freshPosition.factoryArr.map((factory) => {
            return (
              <p css={flexDesc} key={`공장_${factory.id}`}>
                <button css={factoryButton} type="button">
                  <Image src={factoryIcon} alt="" objectFit="contain" />
                  {/* LATER : 나중에 공장이름 나오면 바꿔주기 */}
                  factoryName
                </button>
                {factory.address}
              </p>
            );
          })}
      </div>

      <div css={flexBox}>
        <p css={subTitle}>교대형태</p>
        <p css={desc}>
          {freshPosition.rotationArr.map((rotation) => {
            if (rotation === "정보없음") {
              return <NoDataDesc key="정보없음" />;
            }
            return (
              <span css={restPoint} key={`교대_${rotation}`}>
                {rotation}
              </span>
            );
          })}
        </p>
      </div>

      <div css={flexBox}>
        <p css={subTitle}>급여</p>
        <p css={desc}>
          {freshPosition.payArr ? (
            freshPosition.payArr.map((pay) => {
              return (
                <span css={restPoint} key={`급여_${pay}`}>
                  {pay}
                </span>
              );
            })
          ) : (
            <NoDataDesc />
          )}
        </p>
      </div>
    </section>
  );
};
