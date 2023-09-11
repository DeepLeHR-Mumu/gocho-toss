import { Divider } from "shared-ui/deeple-ds";

import { CompanyRow } from "@/components";

import { CompanyInfoProps } from "./type";
import { cssObj } from "./style";

export const CompanyInfo = ({ contents, company }: CompanyInfoProps) => {
  const contentEntries = Object.entries(contents);

  return (
    <div css={cssObj.subContainer}>
      <CompanyRow {...company} />
      <Divider css={cssObj.divider} />
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
