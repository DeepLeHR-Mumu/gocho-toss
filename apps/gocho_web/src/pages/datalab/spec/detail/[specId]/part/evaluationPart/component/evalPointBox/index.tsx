import { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

import { closeButton, wrapper } from "./style";
import { EvalPointBoxProps } from "./type";

export const EvalPointBox: FunctionComponent<EvalPointBoxProps> = ({ value, deleteFunction }) => {
  return (
    <div css={wrapper}>
      {value}
      <button type="button" onClick={deleteFunction} css={closeButton}>
        <FiX />
      </button>
    </div>
  );
};
