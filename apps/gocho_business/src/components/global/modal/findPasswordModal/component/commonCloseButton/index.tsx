import { FunctionComponent } from "react";
import Link from "next/link";
import { FiX, FiHome } from "react-icons/fi";

import { MAIN_URL } from "shared-constant";

import { closeButtonWrapper } from "./style";
import { ButtonProps } from "./type";

export const CommonCloseButton: FunctionComponent<ButtonProps> = ({ size, buttonClick, isHome }) => {
  if (isHome) {
    return (
      <Link href={MAIN_URL} passHref css={closeButtonWrapper(size)}>
        <FiHome />
      </Link>
    );
  }
  return (
    <button type="button" onClick={buttonClick} css={closeButtonWrapper(size)}>
      <FiX />
    </button>
  );
};