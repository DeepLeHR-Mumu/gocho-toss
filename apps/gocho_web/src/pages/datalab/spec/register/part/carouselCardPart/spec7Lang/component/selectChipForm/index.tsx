import { FunctionComponent } from "react";
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
  noLangDesc,
} from "./style";

export const SelectChipForm: FunctionComponent<SelectChipFormProps> = ({
  value,
  selectArr,
  index,
  desc,
  registerObj,
  showActiveObj,
}) => {
  const handleHideBox = () => {
    showActiveObj.setIsShowActive(false);
    showActiveObj.setActive(null);
  };

  const isShowLangArrBox = Boolean(showActiveObj.active === `${desc}_${index}`);
  if (isShowLangArrBox) showActiveObj.setIsShowActive(isShowLangArrBox);

  return (
    <div css={chipContainer}>
      <button
        type="button"
        css={chipButton(value)}
        onClick={() => {
          showActiveObj.setActive(`${desc}_${index}`);
        }}
      >
        {value || desc}
        <BsChevronDown />
      </button>
      <div css={langArrBox(isShowLangArrBox)}>
        <h4 css={langTitle}>
          {desc}
          <button type="button" onClick={handleHideBox}>
            <BsChevronUp />
          </button>
        </h4>
        <ul css={langArrContainer}>
          {selectArr?.length === 0 && <p css={noLangDesc}>언어를 먼저 선택해주세요</p>}
          {selectArr !== undefined &&
            selectArr.map((select) => {
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
