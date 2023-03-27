import { FunctionComponent } from "react";
import { FiX, FiHome } from "react-icons/fi";

import { MAIN_URL } from "shared-constant";

import { closeButtonWrapper } from "./style";
import { ButtonProps } from "./type";

export const CloseButton: FunctionComponent<ButtonProps> = ({ size, buttonClick, isHome }) => {
  if (isHome) {
    return (
      <a href={MAIN_URL} css={closeButtonWrapper(size)}>
        <FiHome />
      </a>
    );
  }
  return (
    <button type="button" onClick={buttonClick} css={closeButtonWrapper(size)}>
      <FiX />
    </button>
  );
};
