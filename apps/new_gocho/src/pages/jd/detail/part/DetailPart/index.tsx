import { useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { FiChevronRight } from "react-icons/fi";

import { useJdDetail } from "@/apis/jd";
import { isQueryString } from "@/utils";
import { FactoryInfoModal } from "@/components/modal/FactoryInfoModal";
import { FactoryInfoModalProps } from "@/components/modal/FactoryInfoModal/type";
import { SkeletonBox } from "@/components";

import { DetailSubContainer } from "./component/DetailSubContainer";
import {
  getTaskContents,
  getJobQualificationContents,
  getRecruitDetailContents,
  getWelfareContents,
  getPreferentialTreatmentContents,
  getReceptionGuideContents,
  getCompanyInfoContents,
} from "./util";

import { DetailContents } from "./component/DetailSubContainer/type";
import { cssObj } from "./style";
import { ReceptionGuide } from "./component/ReceptionGuide";
import { CompanyInfo } from "./component/CompanyInfo";

export const DetailPart = () => {
  const [factoryInfoModal, setFactoryInfoModal] = useState<FactoryInfoModalProps | null>(null);
  const router = useRouter();
  const jdId = isQueryString(router.query.jdId) ? Number(router.query.jdId) : null;

  const { data: jdData } = useJdDetail({ id: jdId, isStatic: false });

  const getPlaceContents = (): DetailContents => {
    const placeContents: DetailContents = {};

    if (jdData && jdData.place) {
      const { address_arr, factory_arr, type, etc } = jdData.place;

      switch (type) {
        case "기타":
        case "해외":
          placeContents["근무지"] = <span>{etc}</span>;
          break;
        case "일반":
        default:
          placeContents["근무지"] = (
            <div css={cssObj.placeWrapper}>
              {address_arr.length !== 0 && <p>{address_arr.join(" / ")}</p>}
              {factory_arr.length !== 0 &&
                factory_arr.map((factory) => (
                  <div css={cssObj.factoryWrapper} key={factory.id}>
                    <button
                      type="button"
                      css={cssObj.factoryName}
                      onClick={() => {
                        setFactoryInfoModal({ ...factory });
                      }}
                    >
                      {factory.name} <FiChevronRight css={cssObj.rightIcon} />
                    </button>
                    <span css={cssObj.factoryAddress}>{factory.address}</span>
                  </div>
                ))}
            </div>
          );
      }
    }

    return placeContents;
  };

  if (!jdData) {
    return (
      <section css={cssObj.skeletonWrapper}>
        <SkeletonBox color="GRAY50" />
      </section>
    );
  }

  return (
    <>
      <section css={cssObj.wrapper}>
        <div css={cssObj.container}>
          <DetailSubContainer title="주요업무" contents={getTaskContents(jdData.task)} />
          <DetailSubContainer
            title="자격요건"
            contents={{
              ...getJobQualificationContents({
                possibleEdu: jdData.possible_edu,
                requiredEtcArr: jdData.required_etc_arr,
                requiredExp: jdData.required_exp,
              }),
            }}
          />
          <DetailSubContainer
            title="채용상세"
            contents={{
              ...getRecruitDetailContents({
                contractType: jdData.contract_type,
                payArr: jdData.pay_arr,
                hireNumber: jdData.hire_number,
                rotationArr: jdData.rotation_arr,
              }),
              ...getPlaceContents(),
            }}
          />
        </div>
        <div css={cssObj.container}>
          <DetailSubContainer title="복리후생" contents={getWelfareContents(jdData.company.welfare)} />
          <DetailSubContainer
            title="우대사항"
            contents={getPreferentialTreatmentContents({
              preferredCertiArr: jdData.preferred_certi_arr,
              preferredEtcArr: jdData.preferred_etc_arr,
            })}
          />
        </div>
        <div css={cssObj.container}>
          <ReceptionGuide
            title="접수안내"
            contents={getReceptionGuideContents({ applyRouteArr: jdData.apply_route_arr, etcArr: jdData.etc_arr })}
            processArr={jdData.process_arr}
            startTime={jdData.start_time}
            endTime={jdData.end_time}
            cut={jdData.cut}
          />
        </div>
        <div
          css={css`
            ${cssObj.container}
            padding: 0;
          `}
        >
          <CompanyInfo
            company={{
              ...jdData.company,
              logo: jdData.company.logo_url,
              size: jdData.company.size,
              industry: jdData.company.industry,
              bookmark: { state: jdData.company.is_bookmark },
            }}
            contents={getCompanyInfoContents({ ...jdData.company })}
          />
        </div>
      </section>
      {factoryInfoModal && (
        <FactoryInfoModal
          {...factoryInfoModal}
          close={() => {
            setFactoryInfoModal(null);
          }}
        />
      )}
    </>
  );
};
