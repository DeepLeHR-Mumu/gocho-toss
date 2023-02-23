import { FunctionComponent, useRef, useState } from "react";
import { FiCornerDownLeft, FiMinus } from "react-icons/fi";

import { WelfareFormProps } from "./type";
import { cssObj } from "./style";

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
    <div css={cssObj.wrapper} data-testid="company/edit/welfareForm">
      <strong css={cssObj.title(isMine)}>{title}</strong>
      <div css={cssObj.writeBox}>
        <input
          ref={inputRef}
          type="text"
          disabled={isMine}
          maxLength={50}
          placeholder="직접 입력하여 추가"
          css={cssObj.inputLine(isMine)}
          onKeyUp={(onKeyEvent) => {
            if (onKeyEvent.key === "Enter") {
              addValueHandler(inputRef.current?.value || "");
            }
          }}
        />
        <button
          type="button"
          disabled={isMine}
          aria-label={`복지 ${inputRef.current?.value} 추가하기`}
          css={cssObj.enterButton(isMine)}
          onClick={() => {
            addValueHandler(inputRef.current?.value || "");
          }}
        >
          <FiCornerDownLeft />
        </button>
      </div>
      <div css={cssObj.container(isMine)}>
        <p css={cssObj.desc(isMine)}>{desc}</p>
        {!welfareArr && <p css={cssObj.noData(isMine)}>입력한 복지가 없습니다</p>}

        {welfareArr && (
          <div css={cssObj.listBox} ref={welfareBoxRef}>
            {welfareArr.map((data, index) => {
              const key = `${title}_${data}${index}`;

              return (
                <div key={key} css={cssObj.buttonLine}>
                  <p css={cssObj.valueDesc(isMine)}>{data}</p>
                  <button
                    disabled={isMine}
                    type="button"
                    aria-label={`복지 ${data} 제거하기`}
                    css={cssObj.deleteButton(isMine)}
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
  );
};
