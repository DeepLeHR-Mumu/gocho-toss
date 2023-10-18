import { FC } from "react";
import { FiChevronDown } from "react-icons/fi";

import { DropDown } from "shared-ui/deeple-ds";

import { cssObj } from "./style";
import { ResumeDropDownProps } from "./type";

export const ResumeDropDown: FC<ResumeDropDownProps> = ({
  placeholder,
  value = "",
  setValue,
  menuArr,
  onClickCallback,
}) => (
  <DropDown
    customTitle={
      <div css={cssObj.wrapper}>
        <p css={value.length === 0 ? cssObj.placeholder : cssObj.item}>{value.length === 0 ? placeholder : value}</p>
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
