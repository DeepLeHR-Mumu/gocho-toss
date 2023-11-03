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

    if (jdData && jdData.detail.place) {
      const { isUndefined, data, etc } = jdData.detail.place;

      if (isUndefined) {
        placeContents["근무지"] = <span>채용 후 결정</span>;
      }

      if (etc) {
        placeContents["근무지"] = <span>{etc} 근무지</span>;
      }

      if (data.length > 0) {
        const normalPlace = data.filter(
          (placeData): placeData is typeof placeData & { type: "일반" } => placeData.type === "일반"
        );
        const factoryPlace = data.filter(
          (placeData): placeData is typeof placeData & { type: "공장" } => placeData.type === "공장"
        );

        placeContents["근무지"] = (
          <div css={cssObj.placeWrapper}>
            {normalPlace
              .map((normalPlaceData) => (
                <p key={normalPlaceData.id} css={cssObj.normalPlace}>
                  {normalPlaceData.location.address}
                </p>
              ))
              .concat(
                factoryPlace.map((factoryPlaceData) => (
                  <div css={cssObj.factoryWrapper} key={factoryPlaceData.id}>
                    <button
                      type="button"
                      css={cssObj.factoryName}
                      onClick={() => setFactoryInfoModal({ factoryId: factoryPlaceData.factory.id })}
                    >
                      {factoryPlaceData.factory.name} <FiChevronRight css={cssObj.rightIcon} />
                    </button>
                    <p css={cssObj.factoryAddress}>{factoryPlaceData.factory.address}</p>
                  </div>
                ))
              )}
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
          <DetailSubContainer title="주요업무" contents={getTaskContents(jdData.detail)} />
          <DetailSubContainer
            title="자격요건"
            contents={{
              ...getJobQualificationContents(jdData.qualification),
            }}
          />
          <DetailSubContainer
            title="채용상세"
            contents={{
              ...getRecruitDetailContents(jdData.detail),
              ...getPlaceContents(),
            }}
          />
        </div>
        <div css={cssObj.container}>
          <DetailSubContainer title="복리후생" contents={getWelfareContents(jdData.company.welfare)} />
          <DetailSubContainer title="우대사항" contents={getPreferentialTreatmentContents(jdData.qualification)} />
        </div>
        <div css={cssObj.container}>
          <ReceptionGuide
            title="접수안내"
            contents={getReceptionGuideContents(jdData.apply)}
            processArr={jdData.apply.process}
            startTime={jdData.apply.startTime}
            endTime={jdData.apply.endTime}
            cut={jdData.apply.cut}
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
              logo: jdData.company.logoUrl,
              size: jdData.company.size,
              industry: jdData.company.industry,
              bookmark: { state: jdData.company.isBookmark },
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
