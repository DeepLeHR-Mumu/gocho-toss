import { Divider } from "shared-ui/deeple-ds";

import { DetailSubContainerProps } from "./type";
import { cssObj } from "./style";

export const DetailSubContainer = ({ title, contents }: DetailSubContainerProps) => {
  const contentEntries = Object.entries(contents);

  return (
    <div css={cssObj.subContainer}>
      <h3 css={cssObj.title}>{title}</h3>
      <Divider />
      <div css={cssObj.contentWrapper}>
        {contentEntries.map(([subtitle, content], index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} css={cssObj.rowWrapper}>
              <span>{subtitle}</span>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
