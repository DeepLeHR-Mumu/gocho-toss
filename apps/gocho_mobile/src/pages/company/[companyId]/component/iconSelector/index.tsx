import { FunctionComponent } from "react";
import Image from "next/image";

import moneyIcon from "shared-image/page/companyDetail/money.svg";
import healthIcon from "shared-image/page/companyDetail/health.svg";
import lifeIcon from "shared-image/page/companyDetail/life.svg";
import holidayIcon from "shared-image/page/companyDetail/holiday.svg";
import facilityIcon from "shared-image/page/companyDetail/facility.svg";
import vacationIcon from "shared-image/page/companyDetail/vacation.svg";
import growthIcon from "shared-image/page/companyDetail/growth.svg";
import etcIcon from "shared-image/page/companyDetail/etc.svg";

import { wrapper } from "./style";
import { IconSelectorProps } from "./type";
import { ActivatedMenuType } from "../../part/welfarePart/type";

export const IconSelector: FunctionComponent<IconSelectorProps> = ({ activatedMenu }) => {
  const selector = (menuString: ActivatedMenuType) => {
    if (menuString === "money") {
      return moneyIcon;
    }
    if (menuString === "health") {
      return healthIcon;
    }
    if (menuString === "life") {
      return lifeIcon;
    }
    if (menuString === "holiday") {
      return holidayIcon;
    }
    if (menuString === "facility") {
      return facilityIcon;
    }
    if (menuString === "vacation") {
      return vacationIcon;
    }
    if (menuString === "growth") {
      return growthIcon;
    }
    return etcIcon;
  };
  return (
    <div css={wrapper}>
      <Image alt="" src={selector(activatedMenu)} layout="fill" objectFit="contain" />
    </div>
  );
};
