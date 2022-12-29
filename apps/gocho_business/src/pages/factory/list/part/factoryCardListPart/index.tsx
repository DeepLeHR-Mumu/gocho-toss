import { FunctionComponent } from "react";
import dayjs from "dayjs";
import { AiOutlineEnvironment, AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { FiEdit, FiUser, FiUsers } from "react-icons/fi";
import { BiMinus, BiBus, BiBuildingHouse } from "react-icons/bi";

import { COLORS } from "shared-style/color";

import { useDeleteFactory } from "@/apis/factory/useDeleteFactory";
import { useFactoryArr } from "@/apis/factory/useFactoryArr";
import { CommonInfoBox, CommonRoundButton, CommonStatusChip } from "@/components/common";

import { cssObj } from "./style";
import { FactoryCardListPartProps } from "./type";
import { FACTORY_MESSSAGE_OBJ } from "../registerPart/constant";

export const FactoryCardListPart: FunctionComponent<FactoryCardListPartProps> = ({ setEditingIndex, editingIndex }) => {
  const { data: factoryDataArr, isSuccess: factoryDataArrSuccess, isLoading: factoryDataArrLoading } = useFactoryArr();
  const { mutate: deleteFactoryMutation } = useDeleteFactory();

  if (!factoryDataArrSuccess || factoryDataArrLoading) return null;

  if (factoryDataArr.length === 0)
    return (
      <div css={cssObj.noDataWrapper}>
        <p css={cssObj.noDataMessage}>등록된 공고가 없습니다</p>
      </div>
    );
  return (
    <>
      {factoryDataArr.map((factoryData, index) => {
        const totalEmployeeCount = factoryData.maleNumber + factoryData.femaleNumber;
        const malePercentage = Math.round((100 * factoryData.maleNumber) / totalEmployeeCount);
        const femalePercentage = Math.round((100 * factoryData.femaleNumber) / totalEmployeeCount);

        return (
          <div css={cssObj.wrapper} key={factoryData.id} data-testid="factory/list/factoryCardListPart">
            {editingIndex === index && (
              <div css={cssObj.editingBox}>
                <p>수정중</p>
              </div>
            )}
            <div css={cssObj.topContainer}>
              <div css={cssObj.container}>
                <div css={cssObj.nameContainer}>
                  <p css={cssObj.name}>{factoryData.name}</p>
                  <CommonStatusChip status={factoryData.status.name} />
                </div>
                <div css={cssObj.addressContainer}>
                  <AiOutlineEnvironment />
                  <p css={cssObj.address}>{factoryData.address}</p>
                </div>
                <div css={cssObj.productContainer}>
                  <p css={cssObj.infoName}>생산품</p>
                  <p css={cssObj.product}>{factoryData.product}</p>
                </div>
              </div>
              <div css={cssObj.buttonContainer}>
                <CommonRoundButton
                  text="공장수정"
                  Icon={FiEdit}
                  backgoundColor={COLORS.BLUE_FIRST50}
                  onClickHandler={() => setEditingIndex(index)}
                />
                <CommonRoundButton
                  text="공장삭제"
                  Icon={BiMinus}
                  backgoundColor={COLORS.BLUE_FIRST50}
                  onClickHandler={() => {
                    if (window.confirm(FACTORY_MESSSAGE_OBJ.DELETE)) {
                      deleteFactoryMutation({ factoryId: factoryData.id });
                    }
                  }}
                />
              </div>
            </div>

            <div css={cssObj.middleContainer}>
              <div css={cssObj.infoItem}>
                <CommonInfoBox
                  infoName="임직원"
                  infoData={`${factoryData.maleNumber + factoryData.femaleNumber} 명`}
                  Icon={FiUsers}
                />
              </div>
              <div css={cssObj.infoItem}>
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
                {factoryData.dormitory.desc && <p css={cssObj.etcInfo}>{factoryData.dormitory.desc}</p>}
              </div>
              <div css={cssObj.infoItem}>
                <CommonInfoBox
                  infoName="기숙사"
                  infoData={`${factoryData.dormitory.exists ? "O" : "X"}`}
                  Icon={BiBuildingHouse}
                />
                {factoryData.bus.desc && <p css={cssObj.etcInfo}>{factoryData.bus.desc} </p>}
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
              <div css={cssObj.infoItem}>
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
