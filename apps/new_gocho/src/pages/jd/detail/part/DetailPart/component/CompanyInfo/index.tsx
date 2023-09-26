import { Divider } from "shared-ui/deeple-ds";

import { CompanyRow } from "@/components";

import { CompanyInfoProps } from "./type";
import { cssObj } from "./style";

export const CompanyInfo = ({ contents, company }: CompanyInfoProps) => {
  const contentEntries = Object.entries(contents);

  if (!company) {
    return <> </>;
  }

  return (
    <div css={cssObj.subContainer}>
      <CompanyRow company={company} border={false} />
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
