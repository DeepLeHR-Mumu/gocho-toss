import { FunctionComponent } from "react";
import Image from "next/image";

import factoryIcon from "shared-image/global/common/factory_icon.svg";

import { useModal } from "@recoil/hook/modal";
import { NoDataDesc } from "../common/component/noDataDesc";

import { DetailWorkPartProps, ShowFactoryModalDef } from "./type";
import { container, containerTitle, flexBox, flexBetweenBox, subTitle, restPoint, desc } from "../common/style";
import { colorPoint, mainProductDesc, productContainer, workPlaceContainer, factoryButton, flexDesc } from "./style";

export const DetailWorkPart: FunctionComponent<DetailWorkPartProps> = ({ freshPosition }) => {
  const { setCurrentModal } = useModal();

  const showFactoryModal: ShowFactoryModalDef = (factoryObj) => {
    setCurrentModal("factoryModal", factoryObj);
  };

  return (
    <section css={container}>
      <h4 css={containerTitle}>근무 조건</h4>
      <div css={flexBox}>
        <div>
          <div css={flexBetweenBox}>
            <p css={subTitle}>채용 인원</p>
            <p css={desc}>{freshPosition.hireCount}명</p>
          </div>

          <div css={flexBetweenBox}>
            <p css={subTitle}>채용 직무</p>
            <div css={flexBetweenBox}>
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
        </div>

        <div>
          <div css={flexBetweenBox}>
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

          <div css={flexBetweenBox}>
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
        </div>
      </div>

      <div css={workPlaceContainer}>
        <div css={flexBetweenBox}>
          <p css={subTitle}>근무지</p>
          <div>
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
                  <div css={flexDesc} key={`${factory.factoryName}_${factory.id}`}>
                    <button
                      css={factoryButton}
                      type="button"
                      onClick={() => {
                        showFactoryModal(factory);
                      }}
                    >
                      <Image src={factoryIcon} alt="" objectFit="contain" />
                      {factory.factoryName}
                    </button>
                    {factory.address}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div css={flexBox}>
        <div>
          <div css={flexBetweenBox}>
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
        </div>

        <div>
          <div css={flexBetweenBox}>
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
        </div>
      </div>
    </section>
  );
};
