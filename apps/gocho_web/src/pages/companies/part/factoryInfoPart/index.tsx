import { FunctionComponent, useState } from "react";
import Image from "next/image";

import yesData from "@public/images/global/factory/yes_data.svg";
import noData from "@public/images/global/factory/no_data.svg";
import productIcon from "@public/images/global/factory/product_icon.svg";
import hireNumberIcon from "@public/images/global/factory/hireNumber_icon.svg";
import genderIcon from "@public/images/global/factory/gender_icon.svg";
import busTrueIcon from "@public/images/global/factory/bus_true_icon.svg";
import busFalseIcon from "@public/images/global/factory/bus_false_icon.svg";
import dormitoryIcon from "@public/images/global/factory/dormitory_icon.svg";
import xIcon from "@public/images/global/factory/x_icon.svg";
import oIcon from "@public/images/global/factory/o_icon.svg";

import { FactoryInfoPartProps } from "./type";
import {
  buttonContainer,
  iconBox,
  selectButton,
  infoContainer,
  addressWrapper,
  factoryName,
  addressBox,
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
} from "./style";

export const FactoryInfoPart: FunctionComponent<FactoryInfoPartProps> = ({ companyData }) => {
  const [activeFactory, setActiveFactory] = useState<number>(companyData.factoryArr[0] && companyData.factoryArr[0].id);

  return (
    <div>
      <div css={buttonContainer}>
        <div css={iconBox}>
          <Image
            layout="fill"
            objectFit="contain"
            src={companyData.factoryArr.length === 0 ? noData : yesData}
            alt="공장 정보 존재할 때 출력되는 사진"
          />
        </div>

        {companyData.factoryArr.map((factory) => {
          return (
            <button
              type="button"
              key={`companyFactoryDetailInfo${factory.id}`}
              css={selectButton(activeFactory === factory.id)}
              onClick={() => {
                return setActiveFactory(factory.id);
              }}
            >
              {factory.id}
            </button>
          );
        })}
      </div>
      <div>
        {companyData.factoryArr.map((factory) => {
          const totalNumber = factory.maleNumber + factory.femaleNumber;

          return (
            factory.id === activeFactory && (
              <div css={infoContainer}>
                <div css={addressWrapper}>
                  <div css={factoryName}>{factory.id}</div>
                  <div css={addressBox}>
                    <h4 css={addressTitle}>주소</h4>
                    <p css={address}>{factory.address}</p>
                  </div>
                </div>
                <div css={infoWrapper}>
                  <div css={productInfo}>
                    <div css={infoIcon}>
                      <Image layout="fill" objectFit="contain" src={productIcon} alt="공장 생산품 정보 아이콘" />
                    </div>
                    <div css={infoText}>
                      <h4 css={infoTitle}>생산품</h4>
                      <div css={info}>{factory.product}</div>
                    </div>
                  </div>
                  <div css={flexBox}>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={hireNumberIcon} alt="공장 임직원 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <h4 css={infoTitle}>임직원</h4>
                        <div css={info}>{totalNumber}명</div>
                      </div>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={genderIcon} alt="공장 임직원 성비 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <h4 css={infoTitle}>남</h4>
                        <div css={info}>
                          {Math.round((factory.maleNumber / totalNumber) * 100)}
                          %&nbsp;
                        </div>
                        <h4 css={infoTitle}>여</h4>
                        <div css={info}>{Math.round((factory.femaleNumber / totalNumber) * 100)}%</div>
                      </div>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={factory.bus.exists ? busTrueIcon : busFalseIcon}
                          alt="공장 통근버스 정보 아이콘"
                        />
                      </div>
                      <div css={infoText}>
                        <h4 css={infoTitle}>통근버스</h4>
                      </div>
                      <div>{factory.bus.desc}</div>
                    </div>
                    <div>
                      <div css={infoIcon}>
                        <Image layout="fill" objectFit="contain" src={dormitoryIcon} alt="공장 기숙사 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <h4 css={infoTitle}>기숙사</h4>
                        <div css={booleanIcon}>
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src={factory.dormitory.exists ? oIcon : xIcon}
                            alt="공장 기숙사 정보 아이콘"
                          />
                        </div>
                      </div>
                      <div>{factory.dormitory.desc}</div>
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
