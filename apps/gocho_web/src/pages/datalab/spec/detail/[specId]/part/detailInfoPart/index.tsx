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
        {detailData.award ? <DetailSpecBox specStr={detailData.award} wide /> : <NotExistingBox />}
      </div>

      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 경력
        </p>
        {detailData.career ? <DetailSpecBox specStr={detailData.career} wide /> : <NotExistingBox />}
      </div>

      <div css={infoBox}>
        <p css={title}>
          <AiOutlineEdit /> 기타
        </p>
        {detailData.etc ? <DetailSpecBox specStr={detailData.etc} wide /> : <NotExistingBox />}
      </div>
    </section>
  );
};
