import { FunctionComponent, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useCompanyDetail } from "shared-api/company";

import { NoRegisteredInfoBox } from "../../component/noRegisterdInfoBox";
import { UpdateInfoLink } from "../../component/updateInfoLink";
import { ActivatedMenuType } from "./type";
import { IconSelector } from "./component/iconSelector";
import { container, headerBox, iconBox, infoBox, informationWrapper, menu, sliderBox } from "./style";
import { setCarouselSetting } from "./util";

export const WelfarePart: FunctionComponent = () => {
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);
  const { companyId } = router.query;
  const [activatedTab, setActivatedTab] = useState<ActivatedMenuType>("money");

  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  useEffect(() => {
    if (!companyDetailData) {
      return;
    }
    if (companyDetailData.data.welfare.money) {
      setActivatedTab("money");
      return;
    }
    if (companyDetailData.data.welfare.health) {
      setActivatedTab("health");
      return;
    }
    if (companyDetailData.data.welfare.life) {
      setActivatedTab("life");
      return;
    }
    if (companyDetailData.data.welfare.holiday) {
      setActivatedTab("holiday");
      return;
    }
    if (companyDetailData.data.welfare.facility) {
      setActivatedTab("facility");
      return;
    }
    if (companyDetailData.data.welfare.vacation) {
      setActivatedTab("vacation");
      return;
    }
    if (companyDetailData.data.welfare.growth) {
      setActivatedTab("growth");
      return;
    }
    setActivatedTab("etc");
  }, [companyDetailData]);

  if (isLoading || !isSuccess) {
    // TODO 스켈레톤 넣자
    return <>Loading</>;
  }
  const { money, health, life, holiday, facility, vacation, growth, etc } = companyDetailData.data.welfare;
  if (!(money || health || life || holiday || facility || vacation || growth || etc)) {
    return (
      <section css={container}>
        <NoRegisteredInfoBox infoName="복지" />
      </section>
    );
  }
  return (
    <section css={container}>
      <div css={headerBox}>
        <button css={iconBox} type="button" onClick={sliderRef.current?.slickPrev} aria-label="이전 복지 정보 선택">
          <FiChevronLeft />
        </button>

        <div css={sliderBox}>
          <Slider {...setCarouselSetting()} ref={sliderRef}>
            {companyDetailData.data.welfare.money && (
              <button
                css={menu(activatedTab === "money")}
                type="button"
                onClick={() => {
                  setActivatedTab("money");
                }}
              >
                급여
              </button>
            )}
            {companyDetailData.data.welfare.health && (
              <button
                css={menu(activatedTab === "health")}
                type="button"
                onClick={() => {
                  setActivatedTab("health");
                }}
              >
                의료
              </button>
            )}
            {companyDetailData.data.welfare.life && (
              <button
                css={menu(activatedTab === "life")}
                type="button"
                onClick={() => {
                  setActivatedTab("life");
                }}
              >
                생활
              </button>
            )}
            {companyDetailData.data.welfare.holiday && (
              <button
                css={menu(activatedTab === "holiday")}
                type="button"
                onClick={() => {
                  setActivatedTab("holiday");
                }}
              >
                명절/경조사
              </button>
            )}
            {companyDetailData.data.welfare.facility && (
              <button
                css={menu(activatedTab === "facility")}
                type="button"
                onClick={() => {
                  setActivatedTab("facility");
                }}
              >
                시설
              </button>
            )}
            {companyDetailData.data.welfare.vacation && (
              <button
                css={menu(activatedTab === "vacation")}
                type="button"
                onClick={() => {
                  setActivatedTab("vacation");
                }}
              >
                휴일/휴가
              </button>
            )}
            {companyDetailData.data.welfare.growth && (
              <button
                css={menu(activatedTab === "growth")}
                type="button"
                onClick={() => {
                  setActivatedTab("growth");
                }}
              >
                자기계발
              </button>
            )}
            {companyDetailData.data.welfare.etc && (
              <button
                css={menu(activatedTab === "etc")}
                type="button"
                onClick={() => {
                  setActivatedTab("etc");
                }}
              >
                기타
              </button>
            )}
          </Slider>
        </div>

        <button css={iconBox} type="button" onClick={sliderRef.current?.slickNext} aria-label="다음 복지 정보 선택">
          <FiChevronRight />
        </button>
      </div>

      <div css={informationWrapper}>
        <IconSelector activatedMenu={activatedTab} />
        <ul css={infoBox}>
          {companyDetailData.data.welfare[activatedTab]?.map((welfare) => {
            return <li key={`${activatedTab}+${welfare}`}>{welfare}</li>;
          })}
        </ul>
      </div>
      <UpdateInfoLink infoName="복지" />
    </section>
  );
};
