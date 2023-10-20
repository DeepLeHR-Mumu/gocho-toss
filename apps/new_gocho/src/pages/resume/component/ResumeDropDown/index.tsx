import { FiChevronDown } from "react-icons/fi";

import { DropDown } from "shared-ui/deeple-ds";

import { cssObj } from "./style";
import { ResumeDropDownProps } from "./type";

export const ResumeDropDown = <T extends string | number>({
  placeholder,
  value,
  setValue,
  menuArr,
  onClickCallback,
}: ResumeDropDownProps<T>) => (
  <DropDown
    customTitle={
      <div css={cssObj.wrapper}>
        <p css={!value ? cssObj.placeholder : cssObj.item}>{!value ? placeholder : value}</p>
        <FiChevronDown />
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
