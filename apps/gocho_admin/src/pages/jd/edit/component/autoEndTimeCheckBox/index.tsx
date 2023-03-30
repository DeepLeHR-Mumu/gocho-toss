import { FunctionComponent, useState } from "react";
import { FiCheck } from "react-icons/fi";

import { AutoEndTimeCheckBoxProps } from "./type";
import { cssObj } from "./style";

export const AutoEndTimeCheckBox: FunctionComponent<AutoEndTimeCheckBoxProps> = ({ onClickEvent, isChecked }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label htmlFor="alwaysEndTime" css={isFocus ? cssObj.focusLabel : cssObj.label}>
      <input
        type="checkbox"
        id="alwaysEndTime"
        css={cssObj.input}
        defaultChecked={isChecked}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onClick={onClickEvent}
      />
      <div css={cssObj.checkBox}>
        <FiCheck />
      </div>
      <p css={cssObj.desc}>상시공고</p>
    </label>
  );
};
