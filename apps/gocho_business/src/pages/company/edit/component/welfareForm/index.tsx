import { FunctionComponent, useState } from "react";
import { FiCornerDownLeft, FiMinus } from "react-icons/fi";

import { WelfareFormProps, WelfareKey } from "./type";
import { cssObj } from "./style";

export const WelfareForm: FunctionComponent<WelfareFormProps> = ({ setValue, title, desc, registerObj, valueArr }) => {
  const [listArr, setListArr] = useState<string[] | null>(valueArr || []);
  const [valueText, setValueText] = useState<string>("");

  const deleteKeyHandler = (index: number) => {
    setListArr((prevListArr) => {
      const filterArr = prevListArr && prevListArr.filter((_, filterIndex) => filterIndex !== index);
      if (filterArr?.length === 0) {
        setValue(registerObj.name as WelfareKey, null);
        return null;
      }
      setValue(registerObj.name as WelfareKey, filterArr);
      return filterArr;
    });
  };

  const addValueHandler = (text: string) => {
    if (valueText !== "") {
      setListArr((prevListArr) => {
        if (!prevListArr) {
          setValue(registerObj.name as WelfareKey, [text]);
          return [text];
        }
        setValue(registerObj.name as WelfareKey, [...prevListArr, text]);
        return [...prevListArr, text];
      });
      setValueText("");
    }
  };

  return (
    <div css={cssObj.wrapper}>
      <strong css={cssObj.title}>{title}</strong>
      <div css={cssObj.writeBox}>
        <input
          type="text"
          placeholder="직접 입력하여 추가"
          css={cssObj.inputLine}
          value={valueText}
          onChange={(onChangeEvent) => {
            setValueText(onChangeEvent.target.value);
          }}
          onKeyDown={(onKeyDownEvent) => {
            if (onKeyDownEvent.keyCode === 229) return;

            if (onKeyDownEvent.key === "Enter") {
              onKeyDownEvent.preventDefault();
              addValueHandler(valueText);
            }
          }}
        />
        <button
          type="button"
          aria-label={`${valueText} 추가하기`}
          css={cssObj.enterButton}
          onClick={() => {
            addValueHandler(valueText);
          }}
        >
          <FiCornerDownLeft />
        </button>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.desc}>{desc}</p>
        {listArr?.length === 0 ? (
          <p css={cssObj.noData}>입력한 복지가 없습니다</p>
        ) : (
          <ul css={cssObj.listBox}>
            {listArr?.map((data, index) => {
              const random = Math.floor(Math.random() * 10000);

              return (
                <li key={`${title}_${data}_${random}`}>
                  <p css={cssObj.valueDesc}>{data}</p>
                  <button
                    type="button"
                    aria-label={`${data} 제거하기`}
                    css={cssObj.deleteButton}
                    onClick={() => {
                      deleteKeyHandler(index);
                    }}
                  >
                    <FiMinus />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
