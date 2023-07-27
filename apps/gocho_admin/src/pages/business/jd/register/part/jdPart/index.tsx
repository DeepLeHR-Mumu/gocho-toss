import { FunctionComponent } from "react";

import { dateConverter } from "shared-util";

import { JdPartProps } from "./type";
import { cssObj } from "./style";

export const JdPart: FunctionComponent<JdPartProps> = ({ jd }) => {
  const { date: startDate } = dateConverter(jd.startTime);
  const { date: endDate } = dateConverter(jd.endTime);

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>제목</strong>
        <p css={cssObj.dataBox}>{jd.title}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>게시 기간</strong>
        <div>
          <p css={cssObj.dataBox}>
            {startDate} ~ {endDate}
          </p>
          {!jd.cut && <p css={cssObj.dataBox}>상시공고</p>}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>채용 절차</strong>
        <div>
          {jd.processArr.map((process) => (
            <p key={`ProcessArr${process}`} css={cssObj.dataBox}>
              {process}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>지원 방법</strong>
        <div>
          {jd.applyRouteArr.map((applyRoute) => (
            <p key={`ApplyRouteArr${applyRoute}`} css={cssObj.dataBox}>
              {applyRoute}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>제출 서류</strong>
        <div>
          {jd.applyDocumentArr.map((document) => (
            <p key={`ApplyDocumentArr${document}`} css={cssObj.dataBox}>
              {document}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>지원 링크</strong>
        <p css={cssObj.dataBox}>{jd.applyUrl}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기타 사항</strong>
        <div>
          {jd.etcArr?.map((etc) => (
            <p key={`EtcArr${etc}`} css={cssObj.dataBox}>
              {etc}
            </p>
          ))}
        </div>
      </div>
      <div key={`Position${jd.id}`} css={cssObj.positionContainer}>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>직무 ID</strong>
          <p css={cssObj.dataBox}>{jd.id}</p>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>학력 조건</strong>
          <div>
            <p css={cssObj.dataBox}>{jd.eduSummary.middle && "중졸"}</p>
            <p css={cssObj.dataBox}>{jd.eduSummary.high && "고졸"}</p>
            <p css={cssObj.dataBox}>{jd.eduSummary.college && "초대졸"}</p>
            <p css={cssObj.dataBox}>{jd.eduSummary.four && "대졸"}</p>
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>경력 조건</strong>
          <p css={cssObj.dataBox}>{jd.requiredExp.type}</p>
          {jd.requiredExp.type === "경력" ||
            (jd.requiredExp.type === "신입/경력" && (
              <p css={cssObj.dataBox}>
                {jd.requiredExp.minYear}이상 {jd.requiredExp.maxYear} 이하
              </p>
            ))}
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>기타 조건</strong>
          <div>
            {jd.requiredEtcArr?.map((etc) => (
              <p key={`RequiredEtcArr${etc}`} css={cssObj.dataBox}>
                {etc}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>계약 형태</strong>
          <div>
            <p css={cssObj.dataBox}>{jd.contractType.type}</p>
            {jd.contractType.conversionRate && <p css={cssObj.dataBox}>전환율 {jd.contractType.conversionRate}</p>}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>채용 직무</strong>
          <div>
            <p css={cssObj.dataBox}>1차 직무:&nbsp;{jd.task.mainTask}</p>
            <p css={cssObj.dataBox}>
              2차 직무:&nbsp;
              {jd.task.subTaskArr?.map((subTask) => subTask)}
            </p>
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>세부 직무 내용</strong>
          <div>
            {jd.taskDetailArr?.map((taskDetail) => (
              <p key={`TaskDetailArr${taskDetail}`} css={cssObj.dataBox}>
                {taskDetail}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>교대 형태</strong>
          <div>
            {jd.rotationArr?.map((rotation) => (
              <p key={`RotationArr${rotation}`} css={cssObj.dataBox}>
                {rotation}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>근무지 형태</strong>
          <p css={cssObj.dataBox}>{jd.place.type}</p>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>근무지</strong>
          {jd.place.type !== "일반" && <p css={cssObj.dataBox}>{jd.place.etc}</p>}
          {jd.place.type === "일반" && (
            <>
              <div css={cssObj.placeContainer}>
                <p>일반 근무지:</p>
                {jd.place.addressArr?.map((address) => (
                  <p key={`AddressArr${address}`} css={cssObj.placeBox}>
                    {address}
                  </p>
                ))}
              </div>
              <div css={cssObj.placeContainer}>
                <p>공장 근무지:</p>
                {jd.place.factoryArr?.map((factory) => (
                  <p key={`FactoryArr${factory}`} css={cssObj.placeBox}>
                    {factory.factoryName}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>명수</strong>
          <p css={cssObj.dataBox}>{jd.hireCount}</p>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>급여</strong>
          <div>
            {jd.payArr?.map((pay) => (
              <p key={`PayArr${pay}`} css={cssObj.dataBox}>
                {pay}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>우대 자격증</strong>
          <div>
            {jd.preferredCertiArr?.map((certi) => (
              <p key={`PreferredCertiArr${certi}`} css={cssObj.dataBox}>
                {certi}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>기타 우대사항</strong>
          <div>
            {jd.preferredEtcArr?.map((etc) => (
              <p key={`PreferredEtcArr${etc}`} css={cssObj.dataBox}>
                {etc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
