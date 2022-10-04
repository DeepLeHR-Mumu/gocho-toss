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
} from "./style";
import { FactoryCardProps } from "./type";

export const FactoryCard: FunctionComponent<FactoryCardProps> = ({ factoryInfo }) => {
  const totalNumber = factoryInfo.maleNumber + factoryInfo.femaleNumber;
  const femaleRatio = Math.round((factoryInfo.femaleNumber / totalNumber) * 100);
  const maleRatio = Math.round((factoryInfo.maleNumber / totalNumber) * 100);

  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <section css={wrapper}>
      <header css={headerContainer}>
        <div css={flexBox}>
          <div css={iconBox}>
            <Image src={factoryIcon} layout="fill" objectFit="contain" />
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
            <p>{factoryInfo.name}</p>
          </button>
        </div>
        <button
          type="button"
          css={updownIconBox}
          onClick={() => {
            setIsCardOpen((prev) => {
              return !prev;
            });
          }}
        >
          {isCardOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </header>
      {isCardOpen && (
        <>
          <section css={menuContainer}>
            <div>
              <div css={menuIconBox}>
                <Image src={locationIcon} layout="fill" objectFit="contain" />
              </div>
              <div css={menuNameBox}>위치</div>
            </div>
            <div>
              <address css={addressCSS}>{factoryInfo.address}</address>
              <div css={locationContainer}>
                <a css={mapLink} href={`https://map.kakao.com/?q=${factoryInfo.address}`}>
                  <div>
                    <FiMapPin />
                  </div>
                  지도 보기
                </a>
                <button
                  css={mapLink}
                  type="button"
                  onClick={() => {
                    return navigator.clipboard.writeText(factoryInfo.address);
                  }}
                >
                  <div>
                    <FiCopy />
                  </div>
                  복사하기
                </button>
              </div>
            </div>
          </section>
          <section css={menuContainer}>
            <div>
              <div css={menuIconBox}>
                <Image src={productIcon} layout="fill" objectFit="contain" />
              </div>
              <p css={menuNameBox}>생산품</p>
            </div>
            <div css={productCSS}>
              <p>{factoryInfo.product}</p>
            </div>
          </section>
          <section css={infoContainer}>
            <div>
              <div css={menuIconBox}>
                <Image src={hireNumberIcon} layout="fill" objectFit="contain" />
              </div>
              <p css={largeMenuNameBox}>
                임직원 <span css={numberCSS}>{totalNumber}명</span>
              </p>
            </div>
            <div>
              <div css={menuIconBox}>
                <Image src={genderIcon} layout="fill" objectFit="contain" />
              </div>
              <p css={largeMenuNameBox}>
                남 <span css={numberCSS}>{maleRatio}%</span> 여 <span css={numberCSS}>{femaleRatio}%</span>
              </p>
            </div>
            <div>
              <div css={menuIconBox}>
                <Image src={factoryInfo.bus.exists ? busTrueIcon : busFalseIcon} layout="fill" objectFit="contain" />
              </div>
              <div css={xoBox}>
                <p>통근버스</p>
                <div css={xoIcons}>
                  <Image src={factoryInfo.bus.exists ? oIcon : xIcon} layout="fill" objectFit="contain" />
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
            <div>
              <div css={menuIconBox}>
                <Image src={dormitoryIcon} layout="fill" objectFit="contain" />
              </div>
              <div css={xoBox}>
                <p>기숙사</p>
                <div css={xoIcons}>
                  <Image src={factoryInfo.bus.exists ? oIcon : xIcon} layout="fill" objectFit="contain" />
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
