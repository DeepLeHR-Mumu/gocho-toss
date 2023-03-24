import { FunctionComponent } from "react";

import { NotExistingBox } from "../../../component/notExistingBox";
import { specStrCSS, wrapper } from "./style";
import { DetailSpecBoxProps } from "./type";

export const DetailSpecBox: FunctionComponent<DetailSpecBoxProps> = ({ dataArr }) => {
  if (dataArr?.length === 0 || !dataArr) {
    return <NotExistingBox />;
  }
  return (
    <div css={wrapper}>
      {dataArr.map((text) => {
        return (
          <p css={specStrCSS} key={text}>
            {text}
          </p>
        );
      })}
    </div>
  );
};
