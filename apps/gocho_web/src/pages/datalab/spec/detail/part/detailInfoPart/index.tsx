import { FunctionComponent } from "react";
import { BsStars } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import { DetailInfoPartProps } from "./type";

import { DetailSpecBox } from "./component/detailSpecBox";
import { container, infoBox, title } from "./style";

export const DetailInfoPart: FunctionComponent<DetailInfoPartProps> = ({ detailData }) => {
  const languageArr = detailData.language?.map((lang) => {
    return `${lang.language} ${lang.test} ${lang.score}`;
  });

  return (
    <section css={container}>
      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 어학
        </p>
        <DetailSpecBox dataArr={languageArr} />
      </div>

      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 수상
        </p>
        <DetailSpecBox dataArr={detailData.award} />
      </div>

      <div css={infoBox}>
        <p css={title}>
          <BsStars /> 경력
        </p>
        <DetailSpecBox dataArr={detailData.career} />
      </div>

      <div css={infoBox}>
        <p css={title}>
          <AiOutlineEdit /> 기타
        </p>
        <DetailSpecBox dataArr={detailData.etc} />
      </div>
    </section>
  );
};
