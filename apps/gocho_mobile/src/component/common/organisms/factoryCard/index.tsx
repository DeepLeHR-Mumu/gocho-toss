import { FunctionComponent, useState } from "react";
import Image from "next/image";

import factoryIcon from "shared-image/page/factory/yes_data.svg";
import locationIcon from "shared-image/page/factory/factory_icon.svg";
import productIcon from "shared-image/page/factory/product_icon.svg";
import hireNumberIcon from "shared-image/page/factory/hireNumber_icon.svg";
import genderIcon from "shared-image/page/factory/gender_icon.svg";
import busTrueIcon from "shared-image/page/factory/bus_true_icon.svg";
import busFalseIcon from "shared-image/page/factory/bus_false_icon.svg";
import dormitoryIcon from "shared-image/page/factory/dormitory_icon.svg";
import xIcon from "shared-image/page/factory/x_icon.svg";
import oIcon from "shared-image/page/factory/o_icon.svg";
import { useToast } from "@recoil/hook/toast";

import { FiChevronUp, FiChevronDown, FiCopy, FiInfo, FiMapPin } from "react-icons/fi";
import {
  addressCSS,
  xoBox,
  factoryNameCSS,
  flexBox,
  headerContainer,
  iconBox,
  infoContainer,
  largeMenuNameBox,
  locationContainer,
  mapLink,
  menuContainer,
  menuIconBox,
  menuNameBox,
  numberCSS,
  productCSS,
  updownIconBox,
  wrapper,
  xoIcons,
  additionalInfoIcon,
  additionalInfoText,
  additionalContainer,
  titleBox,
  contentBox,
  infoBox,
} from "./style";
import { FactoryCardProps } from "./type";

export const FactoryCard: FunctionComponent<FactoryCardProps> = ({ factoryInfo }) => {
  const totalNumber = factoryInfo.maleNumber + factoryInfo.femaleNumber;
  const femaleRatio = Math.round((factoryInfo.femaleNumber / totalNumber) * 100);
  const maleRatio = Math.round((factoryInfo.maleNumber / totalNumber) * 100);
  const { setCurrentToast } = useToast();
  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <section css={wrapper}>
      <header css={headerContainer}>
        <div css={flexBox}>
          <div css={iconBox}>
            <Image src={factoryIcon} alt="" fill />
          </div>
          <button
            type="button"
            css={factoryNameCSS}
            onClick={() => {
              setIsCardOpen((prev) => {
                return !prev;
              });
            }}
          >
            {factoryInfo.factoryName}

            <span css={updownIconBox}>{isCardOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
          </button>
        </div>
      </header>

      {isCardOpen && (
        <>
          <section css={menuContainer}>
            <div css={titleBox}>
              <div css={menuIconBox}>
                <Image src={locationIcon} alt="" fill />
              </div>
              <p css={menuNameBox}>위치</p>
            </div>
            <div css={infoBox}>
              <address css={addressCSS}>{factoryInfo.address}</address>
              <div css={locationContainer}>
                <a css={mapLink} href={`https://map.kakao.com/?q=${factoryInfo.address}`}>
                  <FiMapPin />
                  지도 보기
                </a>
                <button
                  css={mapLink}
                  type="button"
                  onClick={() => {
                    setCurrentToast("주소가 복사되었습니다.");
                    return navigator.clipboard.writeText(factoryInfo.address);
                  }}
                >
                  <FiCopy />
                  복사하기
                </button>
              </div>
            </div>
          </section>

          <section css={menuContainer}>
            <div css={titleBox}>
              <div css={menuIconBox}>
                <Image src={productIcon} alt="" fill />
              </div>
              <p css={menuNameBox}>생산품</p>
            </div>
            <p css={productCSS}>{factoryInfo.product}</p>
          </section>

          <section css={infoContainer}>
            <div css={contentBox}>
              <div css={menuIconBox}>
                <Image src={hireNumberIcon} alt="" fill />
              </div>
              <p css={largeMenuNameBox}>
                직원 <span css={numberCSS}>{totalNumber}명</span>
              </p>
            </div>
            <div css={contentBox}>
              <div css={menuIconBox}>
                <Image src={genderIcon} alt="" fill />
              </div>
              <p css={largeMenuNameBox}>
                남 <span css={numberCSS}>{maleRatio}% </span> 여 <span css={numberCSS}>{femaleRatio}%</span>
              </p>
            </div>
            <div css={contentBox}>
              <div css={menuIconBox}>
                <Image src={factoryInfo.bus.exists ? busTrueIcon : busFalseIcon} alt="" fill />
              </div>
              <div css={xoBox}>
                <p>통근버스</p>
                <div css={xoIcons}>
                  <Image src={factoryInfo.bus.exists ? oIcon : xIcon} alt="" fill />
                </div>
              </div>
              {factoryInfo.dormitory.desc && (
                <div css={additionalContainer}>
                  <div css={additionalInfoIcon}>
                    <FiInfo />
                  </div>
                  <p css={additionalInfoText}>{factoryInfo.bus.desc}</p>
                </div>
              )}
            </div>
            <div css={contentBox}>
              <div css={menuIconBox}>
                <Image src={dormitoryIcon} alt="" fill />
              </div>
              <div css={xoBox}>
                <p>기숙사</p>
                <div css={xoIcons}>
                  <Image src={factoryInfo.bus.exists ? oIcon : xIcon} alt="" fill />
                </div>
              </div>
              {factoryInfo.dormitory.desc && (
                <div css={additionalContainer}>
                  <div css={additionalInfoIcon}>
                    <FiInfo />
                  </div>
                  <p css={additionalInfoText}>{factoryInfo.dormitory.desc}</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </section>
  );
};
