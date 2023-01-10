import { FunctionComponent, useRef, useState } from "react";
import { FiCornerDownLeft, FiMinus } from "react-icons/fi";

import { WelfareFormProps } from "./type";
import { cssObj } from "./style";

export const WelfareForm: FunctionComponent<WelfareFormProps> = ({
  title,
  desc,
  welfareValueArr,
  registerKey,
  companyFormObj,
}) => {
  const [welfareArr, setWelfareArr] = useState<string[] | null>(welfareValueArr);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const welfareBoxRef = useRef<HTMLUListElement | null>(null);
  const { setValue } = companyFormObj;

  const setValueCreator = (value: string[] | null) => {
    setValue(registerKey, value, { shouldDirty: true });
  };

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const deleteKeyHandler = (welfareIndex: number) => {
    setWelfareArr((prevListArr) => {
      const filterArr = prevListArr && prevListArr.filter((_, filterIndex) => filterIndex !== welfareIndex);
      if (filterArr?.length === 0) {
        setValueCreator(null);
        return null;
      }
      setValueCreator(filterArr);
      return filterArr;
    });
  };

  const addValueHandler = (value: string) => {
    if (value !== "") {
      setWelfareArr((prevListArr) => {
        if (!prevListArr) {
          setValueCreator([value]);
          return [value];
        }
        setValueCreator([...prevListArr, value]);
        return [...prevListArr, value];
      });
      clearInputValue();
      setTimeout(() => {
        welfareBoxRef.current?.scrollTo(0, welfareBoxRef.current.scrollHeight);
      }, 100);
    }
  };

  return (
    <div css={cssObj.wrapper}>
      <strong css={cssObj.title}>{title}</strong>
      <div css={cssObj.writeBox}>
        <input
          ref={inputRef}
          type="text"
          maxLength={120}
          placeholder="직접 입력하여 추가"
          css={cssObj.inputLine}
          onKeyUp={(onKeyEvent) => {
            if (onKeyEvent.key === "Enter") {
              addValueHandler(inputRef.current?.value || "");
            }
          }}
        />
        <button
          type="button"
          aria-label={`복지 ${inputRef.current?.value} 추가하기`}
          css={cssObj.enterButton}
          onClick={() => {
            addValueHandler(inputRef.current?.value || "");
          }}
        >
          <FiCornerDownLeft />
        </button>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.desc}>{desc}</p>
        {welfareArr ? (
          <ul css={cssObj.listBox} ref={welfareBoxRef}>
            {welfareArr.map((data, index) => {
              const key = `${title}_${data}${index}`;

              return (
                <li key={key}>
                  <p css={cssObj.valueDesc}>{data}</p>
                  <button
                    type="button"
                    aria-label={`복지 ${data} 제거하기`}
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
