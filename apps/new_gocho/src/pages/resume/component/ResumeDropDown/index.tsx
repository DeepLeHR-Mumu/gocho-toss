import { FiChevronDown } from "react-icons/fi";

import { DropDown, Input } from "shared-ui/deeple-ds";

import { cssObj } from "./style";
import { ResumeDropDownProps } from "./type";

export const ResumeDropDown = <T extends string | number>({
  placeholder,
  value,
  setValue,
  menuArr,
  isReqired = false,
  onClickCallback,
}: ResumeDropDownProps<T>) => (
  <DropDown
    customTitle={
      <div>
        <Input placeholder={placeholder} required={isReqired} value={value || ""} suffix={<FiChevronDown />} />
      </div>
    }
    menuConfig={{ direction: "top-left", closeAfterClickEvent: true, flexibleHeight: true }}
    menu={{
      width: 200,
      options: menuArr.map(({ content }) => ({
        focused: value === content,
        content: <p css={cssObj.item}>{content}</p>,
        onClick: () => {
          setValue(content);
          if (onClickCallback) onClickCallback();
        },
      })),
    }}
  />
);
