import { FunctionComponent } from "react";
import { BsStars } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

import { DetailInfoPartProps } from "./type";

import { NotExistingBox } from "../component/notExistingBox";
import { DetailSpecBox } from "./component/detailSpecBox";
import { container, divider, title } from "./style";

export const DetailInfoPart: FunctionComponent<DetailInfoPartProps> = ({
  detailData,
}) => {
  return (
    <div>
      <section css={container}>
        <div css={title}>
          <div>
            <BsStars />
          </div>
          <h3>어학</h3>
        </div>
        {detailData.language ? (
          detailData.language.map((langCerti) => {
            return (
              <DetailSpecBox
                key={langCerti.language}
                specStr={`${langCerti.language}${langCerti.test}${langCerti.score}`}
              />
            );
          })
        ) : (
          <NotExistingBox />
        )}
      </section>
      <section css={container}>
        <div css={title}>
          <div>
            <BsStars />
          </div>
          <h3>수상</h3>
        </div>
        {detailData.award ? (
          <DetailSpecBox specStr={detailData.award} wide />
        ) : (
          <NotExistingBox />
        )}
      </section>
      <section css={container}>
        <div css={title}>
          <div>
            <BsStars />
          </div>
          <h3>경력</h3>
        </div>
        {detailData.career ? (
          <DetailSpecBox specStr={detailData.career} wide />
        ) : (
          <NotExistingBox />
        )}
      </section>
      <section css={container}>
        <div css={title}>
          <div>
            <AiOutlineEdit />
          </div>
          <h3>기타</h3>
        </div>
        {detailData.etc ? (
          <DetailSpecBox specStr={detailData.etc} wide />
        ) : (
          <NotExistingBox />
        )}
        <hr css={divider} />
      </section>
    </div>
  );
};
