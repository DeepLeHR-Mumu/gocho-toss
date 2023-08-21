import { FiChevronLeft, FiX } from "react-icons/fi";

import { ActionBarProps } from "./type";
import { cssObj } from "./style";

const ActionBar = ({ title, previousHandler, closeHandler }: ActionBarProps) => {
  return (
    <div css={cssObj.wrapper}>
      <FiChevronLeft css={cssObj.icon} onClick={previousHandler} />
      <h3 css={cssObj.title}>{title}</h3>
      <FiX css={cssObj.icon} onClick={closeHandler} />
    </div>
  );
};

export default ActionBar;
