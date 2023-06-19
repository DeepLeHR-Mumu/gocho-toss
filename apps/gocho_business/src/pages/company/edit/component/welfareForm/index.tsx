import { FunctionComponent, useRef, useState } from "react";
import { FiMinus } from "react-icons/fi";

import { commonCssObj } from "../../part/style";
import { WelfareFormProps } from "./type";
import { cssObj } from "./style";
import { AddFieldButton } from "../addFieldButton";

export const WelfareForm: FunctionComponent<WelfareFormProps> = ({
  title,
  desc,
  welfareValueArr,
  isMine,
  registerKey,
  companyFormObj,
}) => {
  const [welfareArr, setWelfareArr] = useState<string[] | null>(welfareValueArr);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const welfareBoxRef = useRef<HTMLDivElement | null>(null);
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
    const isNoSpaceString = value.trim().length !== 0;
    if (isNoSpaceString) {
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
    <div css={cssObj.welFareWrapper} data-testid="company/edit/welfareForm">
      <strong css={commonCssObj.optionalInputTitle(true)}>{title}</strong>
      <div css={cssObj.inputContainer}>
        <div css={cssObj.inputLabel}>
          <input
            ref={inputRef}
            type="text"
            disabled={isMine}
            maxLength={50}
            placeholder={desc}
            css={cssObj.welfareInput(false)}
            onKeyUp={(onKeyEvent) => {
              if (onKeyEvent.key === "Enter") {
                addValueHandler(inputRef.current?.value || "");
              }
            }}
          />
          <AddFieldButton onClickHandler={() => addValueHandler(inputRef.current?.value || "")} text="추가" />
        </div>
        <div>
          {welfareArr && (
            <div ref={welfareBoxRef}>
              {welfareArr.map((data, index) => {
                const key = `${title}_${data}${index}`;
                return (
                  <div key={key} css={cssObj.inputLabel}>
                    <p css={cssObj.welfareInput(false)}>{data}</p>
                    <button
                      disabled={isMine}
                      type="button"
                      aria-label={`복지 ${data} 제거하기`}
                      css={cssObj.deleteButton}
                      onClick={() => {
                        deleteKeyHandler(index);
                      }}
                    >
                      <FiMinus />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
