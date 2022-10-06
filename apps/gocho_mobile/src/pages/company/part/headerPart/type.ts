import { Dispatch, SetStateAction } from "react";

export interface HeaderPartProps {
  setActivatedMenu: Dispatch<SetStateAction<"companyInfo" | "jdList">>;
  activatedMenu: "companyInfo" | "jdList";
}
