import { FunctionComponent } from "react";
import dayjs from "dayjs";
import { AiOutlineEnvironment, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { FiEdit, FiUser, FiUsers } from "react-icons/fi";
import { BiMinus, BiBus, BiBuildingHouse } from "react-icons/bi";

import { COLORS } from "shared-style/color";
import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useDeleteFactory, useFactoryArr } from "@/apis";
import { CommonInfoBox, CommonStatusChip } from "@/components/common";
import { factoryDeleteConfirmEvent, factoryDeleteDoneEvent } from "@/ga/factoryList";

import { cssObj } from "./style";
import { FactoryCardListPartProps } from "./type";
import { FACTORY_MESSAGE_OBJ } from "../registerPart/constant";

export const FactoryCardListPart: FunctionComponent<FactoryCardListPartProps> = ({
  setEditingIndex,
  editingIndex,
  setRejectedMessage,
}) => {
  const { data: factoryDataArr } = useFactoryArr();
  const { mutate: deleteFactoryMutation } = useDeleteFactory();

  if (!factoryDataArr)
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );

  if (factoryDataArr.length === 0)
    return (
      <div css={cssObj.noDataWrapper}>
        <p css={cssObj.noDataMessage}>등록된 공장이 없습니다</p>
      </div>
    );
  return (
    <>
      {factoryDataArr.map((factoryData, index) => {
        const totalEmployeeCount = factoryData.maleNumber + factoryData.femaleNumber;
        const malePercentage =
          factoryData.maleNumber === 0 ? 0 : Math.round((100 * factoryData.maleNumber) / totalEmployeeCount);
        const femalePercentage =
          factoryData.femaleNumber === 0 ? 0 : Math.round((100 * factoryData.femaleNumber) / totalEmployeeCount);

        return (
          <div css={cssObj.wrapper} key={factoryData.id} data-testid="factory/list/factoryCardListPart">
            {editingIndex === index && (
              <div css={cssObj.editingBox}>
                <p css={cssObj.editingText}>현재 선택됨</p>
                <p css={cssObj.editingText}>수정중</p>
              </div>
            )}
            {(factoryData.status.name === "등록반려" || factoryData.status.name === "수정반려") && (
              <div css={cssObj.rejectedBox}>
                <strong css={cssObj.rejectedTitle}>반려 사유</strong>
                <p css={cssObj.rejectedMessage}>{factoryData.status.reason}</p>
              </div>
            )}
            <div css={cssObj.topContainer}>
              <div css={cssObj.container(factoryData.uploader.isMine)}>
                <div css={cssObj.nameContainer}>
                  <p css={cssObj.name}>{factoryData.name}</p>
                  <CommonStatusChip status={factoryData.status.name} />
                </div>
                <div css={cssObj.addressContainer}>
                  <AiOutlineEnvironment />
                  <p css={cssObj.address}>{factoryData.address}</p>
                </div>
                <div css={cssObj.productContainer}>
                  <p css={cssObj.productTitle}>생산품</p>
                  <p css={cssObj.product}>{factoryData.product}</p>
                </div>
              </div>
              {factoryData.uploader.isMine && (
                <div css={cssObj.buttonContainer}>
                  <SharedButton
                    text="공장수정"
                    iconObj={{ icon: FiEdit, location: "left" }}
                    backgroundColor={COLORS.GRAY80}
                    onClickHandler={() => {
                      setEditingIndex(index);
                      setRejectedMessage(factoryData.status.reason);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    radius="circle"
                    fontColor={COLORS.GRAY10}
                    size="medium"
                  />
                  <SharedButton
                    text="공장삭제"
                    iconObj={{ icon: BiMinus, location: "left" }}
                    backgroundColor={COLORS.GRAY80}
                    onClickHandler={() => {
                      factoryDeleteConfirmEvent();
                      if (window.confirm(FACTORY_MESSAGE_OBJ.DELETE)) {
                        deleteFactoryMutation(
                          { factoryId: factoryData.id },
                          {
                            onSuccess: () => {
                              factoryDeleteDoneEvent();
                            },
                          }
                        );
                      }
                    }}
                    radius="circle"
                    fontColor={COLORS.GRAY10}
                    size="medium"
                  />
                </div>
              )}
            </div>

            <div css={cssObj.middleContainer}>
              <div css={cssObj.infoItem}>
                <CommonInfoBox
                  infoName="임직원"
                  infoData={`${Intl.NumberFormat("kr").format(factoryData.maleNumber + factoryData.femaleNumber)} 명`}
                  Icon={FiUsers}
                />
              </div>
              <div css={cssObj.genderRatioInfoBox}>
                <p css={cssObj.infoName}>남녀 비율</p>
                <div css={cssObj.percentageContainer}>
                  <div css={cssObj.percentageBox}>
                    <div css={cssObj.iconBox}>
                      <AiOutlineMan />
                    </div>
                    <p css={cssObj.percentage}>{malePercentage}%</p>
                  </div>
                  <div css={cssObj.percentageBox}>
                    <div css={cssObj.iconBox}>
                      <AiOutlineWoman />
                    </div>
                    <p css={cssObj.percentage}>{femalePercentage}%</p>
                  </div>
                </div>
              </div>
              <div css={cssObj.infoItem}>
                <CommonInfoBox infoName="통근버스" infoData={`${factoryData.bus.exists ? "O" : "X"}`} Icon={BiBus} />
                {factoryData.dormitory.desc && <p css={cssObj.etcInfo}>{factoryData.bus.desc}</p>}
              </div>
              <div css={cssObj.infoItem}>
                <CommonInfoBox
                  infoName="기숙사"
                  infoData={`${factoryData.dormitory.exists ? "O" : "X"}`}
                  Icon={BiBuildingHouse}
                />
                {factoryData.bus.desc && <p css={cssObj.etcInfo}>{factoryData.dormitory.desc} </p>}
              </div>
            </div>
            <div css={cssObj.uploadInfoContainer}>
              <div css={cssObj.infoItem}>
                <CommonInfoBox
                  infoName="등록자"
                  infoData={`${factoryData.uploader.name} (${factoryData.uploader.department})`}
                  Icon={FiUser}
                />
              </div>
              <div css={cssObj.uploadedDateContainer}>
                <div css={cssObj.dateContainer}>
                  <p css={cssObj.dateName}>공장등록일</p>
                  <p css={cssObj.date}>{dayjs(factoryData.createdTime).format("YY.MM.DD HH:mm")}</p>
                </div>
                <div css={cssObj.dateContainer}>
                  <p css={cssObj.dateName}>최종수정일</p>
                  <p css={cssObj.date}>
                    {factoryData.updatedTime ? dayjs(factoryData.updatedTime).format("YY.MM.DD HH:mm") : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
