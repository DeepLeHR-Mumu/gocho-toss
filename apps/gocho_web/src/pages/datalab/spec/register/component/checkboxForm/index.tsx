import { FunctionComponent, useState } from "react";

import { CheckboxFormProps, handleToggleDef } from "./type";
import { radioContainer, radioDisplay, moreButton, hide } from "./style";

export const CheckboxForm: FunctionComponent<CheckboxFormProps> = ({
  itemArr,
  backgroundStyle = "blue01",
  maxCount,
  moreActive = false,
  registerObj,
}) => {
  const [checkedArr, setCheckedArr] = useState<number[]>([]);
  const [isMore, setIsMore] = useState<boolean>(moreActive);

  const handleToggle: handleToggleDef = (onChangeEvent, index) => {
    const duplicateIndex = checkedArr.find((item) => {
      return item === index;
    });

    if (index === duplicateIndex) {
      const filterCheckArr = checkedArr.filter((list) => {
        return list !== index;
      });
      return setCheckedArr(filterCheckArr);
    }

    if (maxCount <= checkedArr.length) {
      // eslint-disable-next-line no-param-reassign
      onChangeEvent.target.checked = false;
      return false;
    }

    return setCheckedArr((prev) => {
      return [...prev, index];
    });
  };

  return (
    <div>
      <div css={radioContainer}>
        {itemArr.map((item, index) => {
          const hasIndex = checkedArr.includes(index);
          return (
            index < (isMore ? 10 : itemArr.length) && (
              <div key={item}>
                <input
                  css={hide}
                  id={`${item}${index}`}
                  type="checkbox"
                  value={item}
                  {...registerObj}
                  onChange={(onChangeEvent) => {
                    registerObj.onChange(onChangeEvent);
                    handleToggle(onChangeEvent, index);
                  }}
                />
                <label htmlFor={`${item}${index}`}>
                  <p css={radioDisplay(hasIndex, backgroundStyle)}>#{item}</p>
                </label>
              </div>
            )
          );
        })}
      </div>
      {isMore && (
        <button
          css={moreButton}
          onClick={() => {
            setIsMore(false);
          }}
          type="button"
        >
          + 더보기
        </button>
      )}
    </div>
  );
};
