import { FunctionComponent } from "react";
import Image from "next/image";
import { FiCopy, FiInfo } from "react-icons/fi";

import factoryIcon from "shared-image/page/factory/factory_icon.svg";
import productIcon from "shared-image/page/factory/product_icon.svg";
import genderIcon from "shared-image/page/factory/gender_icon.svg";
import OIcon from "shared-image/page/factory/o_icon.svg";
import XIcon from "shared-image/page/factory/x_icon.svg";
import dormitoryIcon from "shared-image/page/factory/dormitory_icon.svg";
import hireNumberIcon from "shared-image/page/factory/hireNumber_icon.svg";
import busTrueIcon from "shared-image/page/factory/bus_true_icon.svg";
import busFalseIcon from "shared-image/page/factory/bus_false_icon.svg";

import { CloseButton } from "@component/common/atom/closeButton";
import { factoryObjDef, useModal, useToast } from "@/globalStates";

import { copyString } from "./util";
import {
  addressBox,
  body,
  boxDesc,
  boxTitle,
  busBox,
  closeButtonCSS,
  factoryNameCSS,
  dormitoryBox,
  flexBox,
  genderBox,
  headerCSS,
  hireNumberBox,
  imageBox,
  infoDesc,
  oxIconBox,
  productBox,
  titleCSS,
  wrapper,
  copyButton,
} from "./style";

export const FactoryModal: FunctionComponent = () => {
  const { contentObj, closeModal } = useModal();
  const { setToastMessage } = useToast();

  const { address, maleNumber, femaleNumber, product, bus, dormitory, name } = contentObj as factoryObjDef;

  const hireNumber = maleNumber + femaleNumber;

  const handleCopyAddress = () => {
    copyString(address);
    setToastMessage("위치가 복사되었습니다.");
  };

  return (
    <article css={wrapper}>
      <header css={headerCSS}>
        <h3 css={titleCSS}>공장 정보</h3>
        <div css={closeButtonCSS}>
          <CloseButton size="M" buttonClick={closeModal} />
        </div>
      </header>

      <div css={body}>
        <h4 css={factoryNameCSS}>{name}</h4>

        <div css={flexBox("center")}>
          <div css={addressBox}>
            <div css={imageBox}>
              <Image src={factoryIcon} alt="공장 위치" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>위치</h5>
              <p css={boxDesc}>
                {address}
                <button type="button" css={copyButton} onClick={handleCopyAddress}>
                  <FiCopy />
                </button>
              </p>
            </div>
          </div>
          <div css={productBox}>
            <div css={imageBox}>
              <Image src={productIcon} alt="생산품" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>생산품</h5>
              <p css={boxDesc}>{product}</p>
            </div>
          </div>
        </div>

        <div css={flexBox("center")}>
          <div css={hireNumberBox}>
            <div css={imageBox}>
              <Image src={hireNumberIcon} alt="임직원" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>임직원</h5>
              <p css={boxDesc}>{hireNumber.toLocaleString("ko-KR")}명</p>
            </div>
          </div>

          <div css={genderBox}>
            <div css={imageBox}>
              <Image src={genderIcon} alt="남녀비율" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>남</h5>
              <p css={boxDesc}>{Math.round((maleNumber * 100) / hireNumber)}%</p>
              <h5 css={boxTitle}>여</h5>
              <p css={boxDesc}>{Math.round((femaleNumber * 100) / hireNumber)}%</p>
            </div>
          </div>

          <div css={busBox}>
            <div css={imageBox}>
              <Image src={bus.exists ? busTrueIcon : busFalseIcon} alt="통근버스" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>통근버스</h5>
              <div css={oxIconBox}>
                <Image src={bus.exists ? OIcon : XIcon} alt="" fill />
              </div>
            </div>
            {bus.desc && (
              <p css={infoDesc}>
                <FiInfo /> {bus.desc}
              </p>
            )}
          </div>

          <div css={dormitoryBox}>
            <div css={imageBox}>
              <Image src={dormitoryIcon} alt="기숙사" fill />
            </div>
            <div css={flexBox("center")}>
              <h5 css={boxTitle}>기숙사</h5>
              <div css={oxIconBox}>
                <Image
                  src={dormitory.exists ? OIcon : XIcon}
                  alt={dormitory.exists ? "기숙사 존재유" : "기숙사 존재무"}
                  fill
                />
              </div>
            </div>
            {dormitory.desc && (
              <p css={infoDesc}>
                <FiInfo /> {dormitory.desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
