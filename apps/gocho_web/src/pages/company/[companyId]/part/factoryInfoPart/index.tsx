import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
import { useCompanyDetail } from "shared-api/company";
import { kakaoChannelUrl } from "shared-constant";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

// import { KakaoMap } from "@pages/companies/component/kakaoMap";
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
  infoChildBox,
  subDesc,
  wrapper,
} from "./style";

export const FactoryInfoPart: FunctionComponent = () => {
  const [activeFactory, setActiveFactory] = useState<null | number>(null);
  const router = useRouter();

  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  useEffect(() => {
    if (companyDetailData && companyDetailData.factoryArr.length !== 0) {
      setActiveFactory(companyDetailData.factoryArr[0].id);
    }
  }, [companyDetailData]);

  if (!companyDetailData) {
    return <section css={wrapper} />;
  }

  return (
    <>
      <InvisibleH3 title="공장 정보" />
      <section css={buttonContainer}>
        <div css={iconBox}>
          <Image
            fill
            src={companyDetailData.factoryArr.length === 0 ? noData : yesData}
            alt={companyDetailData.factoryArr.length === 0 ? "공장정보가 없습니다." : "공장정보가 있습니다."}
          />
        </div>

        {companyDetailData.factoryArr.length === 0 && <p css={noFactoryWarning}>등록된 공장이 없습니다</p>}
        {companyDetailData.factoryArr.map((factory) => {
          return (
            <button
              type="button"
              key={`companyFactoryDetailInfo${factory.factoryName}`}
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
      </section>
      <div>
        {companyDetailData.factoryArr.length === 0 && (
          <div css={noFactoryBox}>
            <p css={noFactoryDesc}>혹시 재직자/인사담당자 이신가요?</p>
            <a css={noFactoryButton} target="_blank" href={kakaoChannelUrl} rel="noreferrer">
              공장 정보 수정 요청하기 +
            </a>
          </div>
        )}

        {companyDetailData.factoryArr.map((factory) => {
          const totalNumber = factory.maleNumber + factory.femaleNumber;

          return (
            factory.id === activeFactory && (
              <div css={infoContainer} key={`companyFactoryDetailInfo${factory.id}`}>
                <div css={addressWrapper}>
                  <div css={factoryName}>{factory.factoryName}</div>
                  <div css={addressBox}>
                    <strong css={addressTitle}>주소</strong>
                    <p css={address}>{factory.address}</p>
                  </div>
                  {/* TODO: kakao factory map join */}
                  {/* <KakaoMap address={factory.address} /> */}
                </div>

                <div css={infoWrapper}>
                  <div css={productInfo}>
                    <div css={infoIcon}>
                      <Image fill src={productIcon} alt="공장 생산품 정보 아이콘" />
                    </div>
                    <div css={infoTextTop}>
                      <strong css={infoTitle}>생산품</strong>
                      <p css={info}>{factory.product}</p>
                    </div>
                  </div>

                  <div css={flexBox}>
                    <div css={infoChildBox}>
                      <div css={infoIcon}>
                        <Image fill src={hireNumberIcon} alt="공장 임직원 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>임직원</strong>
                        <p css={info}>{totalNumber.toLocaleString("Ko-KR")}명</p>
                      </div>
                    </div>
                    <div css={infoChildBox}>
                      <div css={infoIcon}>
                        <Image fill src={genderIcon} alt="공장 임직원 성비 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>
                          남
                          <div css={info}>
                            {totalNumber !== 0 ? Math.round((factory.maleNumber / totalNumber) * 100) : 0}%
                          </div>
                        </strong>
                        <strong css={infoTitle}>
                          여
                          <p css={info}>
                            {totalNumber !== 0 ? Math.round((factory.femaleNumber / totalNumber) * 100) : 0}%
                          </p>
                        </strong>
                      </div>
                    </div>
                    <div css={infoChildBox}>
                      <div css={infoIcon}>
                        <Image
                          fill
                          src={factory.bus.exists ? busTrueIcon : busFalseIcon}
                          alt={factory.bus.exists ? "통근버스 있음" : "통근버스 없음"}
                        />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>통근버스</strong>
                        <div css={booleanIcon}>
                          <Image
                            fill
                            src={factory.bus.exists ? oIcon : xIcon}
                            alt={factory.bus.exists ? "통근버스 있음" : "통근버스 없음"}
                          />
                        </div>
                      </div>
                      <p css={subDesc}>{factory.bus.desc}</p>
                    </div>
                    <div css={infoChildBox}>
                      <div css={infoIcon}>
                        <Image fill src={dormitoryIcon} alt="공장 기숙사 정보 아이콘" />
                      </div>
                      <div css={infoText}>
                        <strong css={infoTitle}>기숙사</strong>
                        <div css={booleanIcon}>
                          <Image fill src={factory.dormitory.exists ? oIcon : xIcon} alt="공장 기숙사 정보 아이콘" />
                        </div>
                      </div>
                      <p css={subDesc}>{factory.dormitory.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};
