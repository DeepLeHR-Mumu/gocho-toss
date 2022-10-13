import { FunctionComponent } from "react";

import { MenuBoxes } from "./component/menuBoxes";
import { wrapper } from "./style";

export const SettingPart: FunctionComponent = () => {
  return (
    <section css={wrapper}>
      <MenuBoxes />
    </section>
  );
};
