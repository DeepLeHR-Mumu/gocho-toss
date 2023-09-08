import { JdListGrid } from "./component/JdListGrid";
import { cssObj } from "./style";

export const JdPart = () => {
  return (
    <section css={cssObj.wrapper}>
      <JdListGrid filter="valid" />
      <JdListGrid filter="expired" />
    </section>
  );
};
