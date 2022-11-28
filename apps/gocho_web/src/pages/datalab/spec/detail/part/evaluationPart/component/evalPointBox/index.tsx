import { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

import { closeButton } from "./style";
import { EvalPointBoxProps } from "./type";

export const EvalPointBox: FunctionComponent<EvalPointBoxProps> = ({ value, deleteFunction }) => {
  return (
    <button type="button" onClick={deleteFunction} css={closeButton} aria-label={`선택된 ${value} 제거`}>
      {value} <FiX />
    </button>
  );
};
