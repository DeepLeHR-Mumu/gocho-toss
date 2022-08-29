import { FunctionComponent, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { SelectChipFormProps } from "./type";
import {
  chipButton,
  chipContainer,
  hide,
  labelCSS,
  langArrBox,
  langArrContainer,
  langTitle,
} from "./style";

export const SelectChipForm: FunctionComponent<SelectChipFormProps> = ({
  value,
  selectArr,
  index,
  desc,
  registerObj,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleShowBox = () => {
    setIsClick(true);
  };

  const handleHideBox = () => {
    setIsClick(false);
  };

  return (
    <div css={chipContainer}>
      <button type="button" css={chipButton(value)} onClick={handleShowBox}>
        {value || desc}
        <BsChevronDown />
      </button>
      <div css={langArrBox(isClick)}>
        <h4 css={langTitle}>
          {desc}
          <button type="button" onClick={handleHideBox}>
            <BsChevronUp />
          </button>
        </h4>
        <ul css={langArrContainer}>
          {selectArr.map((select) => {
            return (
              <li key={select}>
                <input
                  css={hide}
                  type="radio"
                  id={`language.${index}.${select}`}
                  value={select}
                  {...registerObj}
                  onChange={(onChangeEvent) => {
                    registerObj.onChange(onChangeEvent);
                    handleHideBox();
                  }}
                />
                <label htmlFor={`language.${index}.${select}`} css={labelCSS}>
                  <p>{select}</p>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
