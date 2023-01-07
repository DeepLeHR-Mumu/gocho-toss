import { FunctionComponent, useEffect, useState } from "react";
import { FiCornerDownLeft, FiMinus } from "react-icons/fi";

import { WelfareFormProps } from "./type";
import { cssObj } from "./style";

export const WelfareForm: FunctionComponent<WelfareFormProps> = ({
  title,
  desc,
  valueArr,
  registerKey,
  companyForm,
}) => {
  const [listArr, setListArr] = useState<string[] | null>(valueArr);
  const [valueText, setValueText] = useState<string>("");

  const { setValue } = companyForm;

  const deleteKeyHandler = (welfareIndex: number) => {
    setListArr((prevListArr) => {
      const filterArr = prevListArr && prevListArr.filter((_, filterIndex) => filterIndex !== welfareIndex);
      if (filterArr?.length === 0) return null;
      return filterArr;
    });
  };

  const addValueHandler = (text: string) => {
    if (valueText !== "") {
      setListArr((prevListArr) => {
        if (!prevListArr) return [text];
        return [...prevListArr, text];
      });
      setValueText("");
    }
  };

  useEffect(() => {
    setValue(registerKey, listArr, { shouldDirty: true });
  }, [listArr, registerKey, setListArr, setValue]);

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
        {listArr ? (
          <ul css={cssObj.listBox}>
            {listArr.map((data, index) => {
              const key = `${title}_${data}${index}`;

              return (
                <li key={key}>
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
        ) : (
          <p css={cssObj.noData}>입력한 복지가 없습니다</p>
        )}
      </div>
    </div>
  );
};
