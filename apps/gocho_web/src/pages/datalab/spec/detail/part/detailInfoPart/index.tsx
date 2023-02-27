import { FunctionComponent } from "react";
import { BsStars } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import { DetailInfoPartProps } from "./type";

import { NotExistingBox } from "../component/notExistingBox";
import { DetailSpecBox } from "./component/detailSpecBox";
import { container, infoBox, title } from "./style";

export const DetailInfoPart: FunctionComponent<DetailInfoPartProps> = ({ detailData }) => {
  return (
    <section css={container}>
      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 어학
        </p>
        {detailData.language ? (
          detailData.language.map((langCerti) => {
            return (
              <DetailSpecBox
                key={langCerti.language}
                specStr={`${langCerti.language} ${langCerti.test} ${langCerti.score}`}
              />
            );
          })
        ) : (
          <NotExistingBox />
        )}
      </div>

      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 수상
        </p>
        {/* TODO: 추후 출력보고 코드 수정 필요 (award, career, etc) */}
        {detailData.award ? (
          detailData.award.map((element) => {
            return <DetailSpecBox key={`AwardDetail${element}`} specStr={element} wide />;
          })
        ) : (
          <NotExistingBox />
        )}
      </div>

      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 경력
        </p>
        {detailData.career ? (
          detailData.career.map((element) => {
            return <DetailSpecBox key={`CareerDetail${element}`} specStr={element} wide />;
          })
        ) : (
          <NotExistingBox />
        )}
      </div>

      <div css={infoBox}>
        <p css={title}>
          <AiOutlineEdit /> 기타
        </p>
        {detailData.etc ? (
          detailData.etc.map((element) => {
            return <DetailSpecBox key={`EtcDetail${element}`} specStr={element} wide />;
          })
        ) : (
          <NotExistingBox />
        )}
      </div>
    </section>
  );
};
