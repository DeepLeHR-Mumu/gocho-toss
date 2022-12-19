import { IconType } from "react-icons";

import { ColorDef } from "shared-type/style/color";

export interface CommonSquareButtonProps {
  text: string;
  iconObj?: { Icon: IconType; location: "right" | "left" };
  backgroundColor: ColorDef;
  fontColor: ColorDef;
  borderColor: ColorDef;
  onClickHandler: () => void;
}
