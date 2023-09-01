import { FunctionComponent } from "react";

import { CompanyRow } from "@/components";
import { CompanyListProps } from "./type";

import { cssObj } from "./style";

export const CompanyList: FunctionComponent<CompanyListProps> = ({ companyData }) => {
  return (
    <div css={cssObj.companyListBox}>
      {companyData?.companyDataArr.map(({ id, industry, size, name, logoUrl }) => {
        return (
          <CompanyRow
            key={id}
            id={id}
            size={size}
            logo={logoUrl || ""}
            name={name}
            industry={industry}
            border
            follow={{
              state: false,
              onClick: () => {
                alert("팔로우하기");
              },
            }}
          />
        );
      })}
    </div>
  );
};
