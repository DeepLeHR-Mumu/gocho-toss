import { FunctionComponent } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FiEdit, FiUser, FiUsers } from "react-icons/fi";
import { BiMinus, BiBus, BiBuildingHouse } from "react-icons/bi";

import { COLORS } from "shared-style/color";

import { useFactoryArr } from "@/apis/factory/useFactoryArr";
import { CommonInfoBox, CommonRoundButton, CommonStatusChip } from "@/components/common";

import { cssObj } from "./style";
import { FactoryCardPartProps } from "./type";

export const FactoryCardPart: FunctionComponent<FactoryCardPartProps> = ({ index }) => {
  const { data: factoryDataArr, isSuccess: factoryDataArrSuccess } = useFactoryArr(true);

  if (!factoryDataArrSuccess) return null;

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.topContainer}>
        <div css={cssObj.container}>
          <div css={cssObj.nameContainer}>
            <p css={cssObj.name}>{factoryDataArr?.[index].name}</p>
            <CommonStatusChip status={factoryDataArr?.[index].status} />
          </div>
          <div css={cssObj.addressContainer}>
            <AiOutlineEnvironment />
            {/* <p css={cssObj.name}>{factoryDataArr?.[index].address}</p> */}
            <p css={cssObj.address}>weuifohawoiefj;aoiwjef;oiawje;ofijaw;oiejf;aoiwejfioajweo;ifja;owiefjaoiwjef</p>
          </div>
          <div css={cssObj.productContainer}>
            <p css={cssObj.infoName}>생산품</p>
            {/* <p css={cssObj.product}>{factoryDataArr?.[index].product}</p> */}
            <p css={cssObj.product}>;oaawefaw9e8jfpoaiwejfopiawjefoiawje;ofijawoeifjiwjef;</p>
          </div>
        </div>
        <div css={cssObj.buttonContainer}>
          <CommonRoundButton
            text="공장수정"
            Icon={FiEdit}
            backgoundColor={COLORS.BLUE_FIRST50}
            onClickHandler={() => null}
          />
          <CommonRoundButton
            text="공장삭제"
            Icon={BiMinus}
            backgoundColor={COLORS.BLUE_FIRST50}
            onClickHandler={() => null}
          />
        </div>
      </div>
      <div css={cssObj.middleContainer}>
        <div css={cssObj.infoItem}>
          <CommonInfoBox infoName="임직원" infoData={`${factoryDataArr[index].employeeNumber} 명`} Icon={FiUsers} />
        </div>
        <div css={cssObj.infoItem}>
          <p>남녀 비율</p>
          <div css={cssObj.percentageBox}>
            <div>
              <p>남</p>
              <div>icon</div>
              <p>{factoryDataArr[index].maleNumber}</p>
            </div>
            <div>
              <p>여</p>
              <div>icon</div>
              <p>{factoryDataArr[index].femaleNumber}</p>
            </div>
          </div>
        </div>
        <div css={cssObj.infoItem}>
          <CommonInfoBox
            infoName="통근버스"
            infoData={`${factoryDataArr[index].bus.exists ? "O" : "X"}`}
            Icon={BiBus}
          />
          {factoryDataArr[index].dormitory.desc && <p css={cssObj.etcInfo}>{factoryDataArr[index].dormitory.desc}</p>}
        </div>
        <div css={cssObj.infoItem}>
          <CommonInfoBox
            infoName="통근버스"
            infoData={`${factoryDataArr[index].dormitory.exists ? "O" : "X"}`}
            Icon={BiBuildingHouse}
          />
          {/* {factoryDataArr[index].bus.desc && <p css={cssObj.etcInfo}>{factoryDataArr[index].bus.desc} </p>} */}
          <p css={cssObj.etcInfo}>
            wei[fjaoiejfpioawei[fjaoiejfpioawei[fjaoiejfpioawei[fjaoiejfpioawei[fjaoiejfpioawei[fjaoiejfpioawei[fjaoiejfpioa
          </p>
        </div>
      </div>
      <div css={cssObj.uploadInfoContainer}>
        <div css={cssObj.infoItem}>
          <CommonInfoBox
            infoName="등록자"
            infoData={`${factoryDataArr[index].uploader.name} (${factoryDataArr[index].uploader.department})`}
            Icon={FiUser}
          />
        </div>
        <div css={cssObj.infoItem}>
          <div css={cssObj.dateContainer}>
            <p css={cssObj.dateName}>공장등록일</p>
            <p css={cssObj.date}>{factoryDataArr[index].createdTime}</p>
          </div>
          <div css={cssObj.dateContainer}>
            <p css={cssObj.dateName}>최종수정일</p>
            <p css={cssObj.date}>{factoryDataArr[index].updatedTime ? factoryDataArr[index].updatedTime : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};