import { IconType } from "react-icons";
import { ColorDef } from "shared-type/style/color";

export interface CommonRoundButtonProps {
  text: string;
  onClickHandler: () => void;
  backgoundColor: ColorDef;
  Icon?: IconType;
}
