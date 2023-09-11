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
        {contentEntries.map(([subtitle, content]) => (
          <div key={`CompanyInfo${subtitle}`} css={cssObj.rowWrapper}>
            <span>{subtitle}</span>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
