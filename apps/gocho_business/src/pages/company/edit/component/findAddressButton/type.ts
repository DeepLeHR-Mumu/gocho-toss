import { IconType } from "react-icons";
import { ColorDef } from "shared-type/style/color";

export interface FindAddresButtonProps {
  text: string;
  onClickHandler: () => void;
  isDisabled?: boolean;
  backgroundColor: ColorDef;
  Icon?: IconType;
}