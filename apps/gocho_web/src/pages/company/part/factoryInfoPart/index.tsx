import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import yesData from "shared-image/page/factory/yes_data.svg";
import noData from "shared-image/page/factory/no_data.svg";
import productIcon from "shared-image/page/factory/product_icon.svg";
import hireNumberIcon from "shared-image/page/factory/hireNumber_icon.svg";
import genderIcon from "shared-image/page/factory/gender_icon.svg";
import busTrueIcon from "shared-image/page/factory/bus_true_icon.svg";
import busFalseIcon from "shared-image/page/factory/bus_false_icon.svg";
import dormitoryIcon from "shared-image/page/factory/dormitory_icon.svg";
import xIcon from "shared-image/page/factory/x_icon.svg";
import oIcon from "shared-image/page/factory/o_icon.svg";

import { kakaoChannelUrl } from "shared-constant/help";
// import { KakaoMap } from "@pages/companies/component/kakaoMap";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { FactoryInfoPartProps } from "./type";
import {
  buttonContainer,
  iconBox,
  selectButton,
  infoContainer,
  addressWrapper,
  factoryName,
  addressBox,
  infoTextTop,
  addressTitle,
  address,
  infoWrapper,
  productInfo,
  flexBox,
  infoIcon,
  infoText,
  infoTitle,
  info,
  booleanIcon,
  noFactoryWarning,
  noFactoryBox,
  noFactoryDesc,
  noFactoryButton,
} from "./style";

export const FactoryInfoPart: FunctionComponent<FactoryInfoPartProps> = ({ companyData }) => {
  const [activeFactory, setActiveFactory] = useState<number>(companyData.factoryArr[0] && companyData.factoryArr[0].id);

  return (
    <div>
      <InvisibleH3 title="공장 정보" />
      <div css={buttonContainer}>
        <div css={iconBox}>
          <Image
            layout="fill"
            objectFit="contain"
            src={companyData.factoryArr.length === 0 ? noData : yesData}
            alt={companyData.factoryArr.length === 0 ? "공장정보가 없습니다." : "공장정보가 있습니다."}
          />
        </div>

        {companyData.factoryArr.length === 0 && <p css={noFactoryWarning}>등록된 공장이 없습니다</p>}

        {companyData.factoryArr.map((factory) => {
          return (
            <button
              type="button"
              key={`companyFactoryDetailInfo${factory.id}`}
              css={selectButton(activeFactory === factory.id)}
              onClick={() => {
                return setActiveFactory(factory.id);
              }}
              aria-label={`${factory.factoryName} 자세히보기`}
            >
              {factory.factoryName}
            </button>
          );
        })}
      </div>
      <div>
        {companyData.factoryArr.length === 0 && (
          <div css={noFactoryBox}>
            <p css={noFactoryDesc}>혹시 재직자/인사담당자 이신가요?</p>
            <Link href={kakaoChannelUrl} passHref>
              <a css={noFactoryButton} target="_blank">
                공장 정보 수정 요청하기 +
              </a>
            </Link>
          </div>
        )}

        {companyData.factoryArr.map((factory) => {
          const totalNumber = factory.maleNumber + factory.femaleNumber;

          return (
            factory.id === activeFactory && (
              <div css={infoContainer}>
                <div css={addressWrapper}>
                  <div css={factoryName}>{factory.factoryName}</div>
                  <div css={addressBox}>
                    <strong css={addressTitle}>주소</strong>
                    <p css={address}>{factory.address}</p>
                  </div>
                  {/* LATER : kakao factory map join */}
                  {/* <KakaoMap address={factory.address} /> */}
                </div>

                <div css={infoWrapper}>
                  <div css={productInfo}>
                    <div css={infoIcon}>
                      <Image layout="fill" objectFit="contain" src={productIcon} alt="공장 생산품 정보 아이콘" />
                    </div>
                    <div css={infoTextTop}>
                      <strong css={infoTitle}>생산품</strong>
                      <p css={info}>{factory.product}</p>
                    </div>
                  </div>

                  <div css={flexBox}>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={hireNumberIcon} alt="공장 임직원 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>임직원</strong>
                        <p css={info}>{totalNumber.toLocaleString("Ko-KR")}명</p>
                      </div>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={genderIcon} alt="공장 임직원 성비 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>남</strong>
                        <div css={info}>
                          {Math.round((factory.maleNumber / totalNumber) * 100)}
                          %&nbsp;
                        </div>
                        <strong css={infoTitle}>여</strong>
                        <p css={info}>{Math.round((factory.femaleNumber / totalNumber) * 100)}%</p>
                      </div>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={factory.bus.exists ? busTrueIcon : busFalseIcon}
                          alt={factory.bus.exists ? "통근버스 있음" : "통근버스 없음"}
                        />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>통근버스</strong>
                        <div css={booleanIcon}>
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src={factory.bus.exists ? oIcon : xIcon}
                            alt={factory.bus.exists ? "통근버스 있음" : "통근버스 없음"}
                          />
                        </div>
                      </div>
                      <p>{factory.bus.desc}</p>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={dormitoryIcon} alt="공장 기숙사 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>기숙사</strong>
                        <div css={booleanIcon}>
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src={factory.dormitory.exists ? oIcon : xIcon}
                            alt="공장 기숙사 정보 아이콘"
                          />
                        </div>
                      </div>
                      <p>{factory.dormitory.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
