import { FiChevronLeft, FiX } from "react-icons/fi";

import { ActionBarProps } from "./type";
import { cssObj } from "./style";

const ActionBar = ({ title, previousHandler, closeHandler, gaEvent }: ActionBarProps) => (
  <div css={cssObj.wrapper}>
    <FiChevronLeft css={cssObj.icon} onClick={previousHandler} />
    <h3 css={cssObj.title}>{title}</h3>
    <FiX
      css={cssObj.icon}
      onClick={() => {
        if (closeHandler) closeHandler();
        if (gaEvent) gaEvent();
      }}
    />
  </div>
);

export default ActionBar;
