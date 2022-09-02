import { MenuType } from "../../type";

export interface MenuBoxesProps {
  currentMenu: MenuType;
  handleSettingModal: { (): void };
}
