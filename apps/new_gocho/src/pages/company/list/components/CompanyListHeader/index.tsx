import { FunctionComponent, useState } from "react";

import { DropDown } from "shared-ui/deeple-ds";

import { HeaderTitle } from "@/pages/company/components/common/HeaderTitle";

import { cssObj } from "./style";
import { CompanyListHeaderProps } from "./type";

export const CompanyListHeader: FunctionComponent<CompanyListHeaderProps> = ({
  category,
  defaultFilter,
  filterOption,
}) => {
  const [title, setTitle] = useState<string>(defaultFilter);

  return (
    <div css={cssObj.companyHeaderWrap}>
      {category ? <HeaderTitle title={category} /> : <HeaderTitle title="기업리스트" />}
      <div css={cssObj.filterBox}>
        <DropDown
          title={title}
          menu={{
            width: 180,
            options: filterOption.map(({ key, content, setState }) => {
              return {
                key,
                focused: false,
                content: <p>{content}</p>,
                onClick: () => {
                  setTitle(content);
                  setState();
                },
              };
            }),
          }}
        />
      </div>
    </div>
  );
};
