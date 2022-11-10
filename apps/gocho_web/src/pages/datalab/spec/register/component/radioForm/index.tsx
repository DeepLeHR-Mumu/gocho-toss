import { Fragment, FunctionComponent, useState } from "react";

import { RadioFormProps } from "./type";
import { container, desc } from "./style";

export const RadioForm: FunctionComponent<RadioFormProps> = ({ itemArr, registerObj, backgroundStyle = "blue01" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div css={container}>
      {itemArr.map((item, index) => {
        return (
          <Fragment key={item}>
            <label htmlFor={`${item}${index}`}>
              <input
                id={`${item}${index}`}
                value={item}
                type="radio"
                {...registerObj}
                onChange={(onChangeEvent) => {
                  registerObj.onChange(onChangeEvent);
                  changeActiveIndex(index);
                }}
              />
              <p css={desc(index === activeIndex, backgroundStyle)}>{item}</p>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};
