import { FunctionComponent } from "react";

import { dateConverter } from "shared-util";

import { JdPartProps } from "./type";
import { cssObj } from "./style";

export const JdPart: FunctionComponent<JdPartProps> = ({ jd }) => {
  const { date: startDate } = dateConverter(jd.apply.startTime);
  const { date: endDate } = dateConverter(jd.apply.endTime);

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
          {!jd.apply.cut && <p css={cssObj.dataBox}>상시공고</p>}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>채용 절차</strong>
        <div>
          {jd.apply.process.map((process) => (
            <p key={`ProcessArr${process}`} css={cssObj.dataBox}>
              {process}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>제출 서류</strong>
        <div>
          {jd.apply.document.map((document) => (
            <p key={`ApplyDocumentArr${document}`} css={cssObj.dataBox}>
              {document}
            </p>
          ))}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>지원 링크</strong>
        <p css={cssObj.dataBox}>{jd.apply.route.email}</p>
        <p css={cssObj.dataBox}>{jd.apply.route.link}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기타 사항</strong>
        <div>
          {jd.apply.etc.map((etc) => (
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
            <p css={cssObj.dataBox}>{jd.qualification.highschool && "고졸"}</p>
            <p css={cssObj.dataBox}>{jd.qualification.college && "초대졸"}</p>
            <p css={cssObj.dataBox}>{jd.qualification.university && "대졸"}</p>
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>경력 조건</strong>
          <p css={cssObj.dataBox}>{jd.qualification.requiredExperience}</p>
          {jd.qualification.requiredExperience === "경력" ||
            (jd.qualification.requiredExperience === "신입/경력" && (
              <p css={cssObj.dataBox}>
                {jd.qualification.requiredMinYear}이상 {jd.qualification.requiredMaxYear} 이하
              </p>
            ))}
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>기타 조건</strong>
          <div>
            {jd.qualification.requiredEtc?.map((etc) => (
              <p key={`RequiredEtcArr${etc}`} css={cssObj.dataBox}>
                {etc}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>계약 형태</strong>
          <div>
            <p css={cssObj.dataBox}>{jd.detail.contractType}</p>
            {jd.detail.conversionRate && <p css={cssObj.dataBox}>전환율 {jd.detail.conversionRate}</p>}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>채용 직무</strong>
          <div>
            <p css={cssObj.dataBox}>1차 직무:&nbsp;{jd.detail.taskMain}</p>
            <p css={cssObj.dataBox}>
              2차 직무:&nbsp;
              {jd.detail.taskSubArr?.map((subTask) => subTask)}
            </p>
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>세부 직무 내용</strong>
          <div>
            {jd.detail.taskDescription?.map((taskDetail) => (
              <p key={`TaskDetailArr${taskDetail}`} css={cssObj.dataBox}>
                {taskDetail}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>교대 형태</strong>
          <div>
            {jd.detail.shift?.map((rotation) => (
              <p key={`RotationArr${rotation}`} css={cssObj.dataBox}>
                {rotation}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>근무지</strong>
          {jd.detail.place.etc === null && <p css={cssObj.dataBox}>{jd.detail.place.etc}</p>}
          {jd.detail.place.etc !== null && (
            <div>
              {jd.detail.place.data?.map((placeObj) => {
                if (placeObj.type === "일반") {
                  return (
                    <p key={`AddressArr${placeObj.location?.address}`} css={cssObj.dataBox}>
                      일반 근무지: {placeObj.location?.address}
                    </p>
                  );
                }
                return (
                  <p key={`FactoryArr${placeObj.factory?.name}`} css={cssObj.dataBox}>
                    공장 근무지: {placeObj.factory?.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>명수</strong>
          <p css={cssObj.dataBox}>{jd.detail.hireNumber}</p>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>급여</strong>
          <div>
            {jd.detail.pay?.map((pay) => (
              <p key={`PayArr${pay}`} css={cssObj.dataBox}>
                {pay}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>우대 자격증</strong>
          <div>
            {jd.qualification.preferredCertification?.map((certi) => (
              <p key={`PreferredCertiArr${certi}`} css={cssObj.dataBox}>
                {certi}
              </p>
            ))}
          </div>
        </div>
        <div css={cssObj.dataContainer}>
          <strong css={cssObj.dataTitle}>기타 우대사항</strong>
          <div>
            {jd.qualification.preferredCertification?.map((etc) => (
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
