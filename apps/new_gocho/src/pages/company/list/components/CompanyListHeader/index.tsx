import { FunctionComponent, useState } from "react";

import { DropDown } from "shared-ui/deeple-ds";
import { FiChevronDown } from "react-icons/fi";
import { HeaderTitle } from "@/pages/company/components/HeaderTitle";

import { CompanyListHeaderProps } from "./type";

import { cssObj } from "./style";

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
          customTitle={
            <div css={cssObj.filterBox}>
              <p css={cssObj.filterText}>{title}</p>
              <p>
                <FiChevronDown css={cssObj.filterIcon} />
              </p>
            </div>
          }
          menu={{
            width: 180,
            options: filterOption.map(({ key, content, setState }) => ({
              key,
              focused: title === content,
              content,
              onClick: () => {
                setTitle(content);
                setState();
              },
            })),
          }}
          menuConfig={{
            closeAfterClickEvent: true,
          }}
        />
      </div>
    </div>
  );
};
