import { FunctionComponent, useRef, useState } from "react";

import { commonCssObj } from "@/styles";

import { PostWelfareSubmitValues, WelfareKey } from "@/pages/company/auth/part/applyAuthPart/welfarePart/type";
import { Entries } from "@/types";
import { WelfareForm, AddFieldButton } from "../../component";
import { WELFARE_DESC_OBJ } from "./constant";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm, welfareData }) => {
  const welfareButtonInfoRef = useRef(Object.entries(WELFARE_DESC_OBJ) as Entries<typeof WELFARE_DESC_OBJ>);

  const { welfareArr: initialWelfareArr } = welfareArrCreator(welfareData);
  const [welfareArr, setWelfareArr] = useState(initialWelfareArr);

  const welfareButtonHandler = (key: keyof PostWelfareSubmitValues) => {
    const isExist = welfareArr.findIndex((welfare) => welfare.registerKey === `welfare.${key}`) !== -1;

    let newWelfareArr = [...welfareArr];
    if (isExist) {
      newWelfareArr = newWelfareArr.filter((welfare) => welfare.registerKey !== `welfare.${key}`);
    } else {
      const { index } = WELFARE_DESC_OBJ[key];
      const welfareKey: WelfareKey = `welfare.${key}`;
      const newWelfare = {
        index,
        title: WELFARE_DESC_OBJ[key].name,
        desc: WELFARE_DESC_OBJ[key].desc,
        registerKey: welfareKey,
        welfareValueArr: [] as string[],
      };

      newWelfareArr.push(newWelfare);
      newWelfareArr.sort((a, b) => a.index - b.index);
    }

    setWelfareArr(newWelfareArr);
  };

  return (
    <section css={commonCssObj.partContainer} data-testid="company/edit/WelfarePart">
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
      <div css={cssObj.welfareButtonContainer}>
        {welfareButtonInfoRef.current.map((welfareButton) => {
          const [key, obj] = welfareButton;
          const buttonState = welfareArr.findIndex((welfare) => welfare.registerKey === `welfare.${key}`) !== -1;
          return (
            <AddFieldButton
              key={`welfareAddButton${key}`}
              state={buttonState}
              onClickHandler={() => welfareButtonHandler(key)}
              text={obj.name}
            />
          );
        })}
      </div>
      <div>
        {welfareArr.map((welfare) => (
          <WelfareForm
            key={welfare.title}
            title={welfare.title}
            desc={welfare.desc}
            welfareValueArr={welfare.welfareValueArr}
            companyFormObj={companyForm}
            registerKey={welfare.registerKey}
          />
        ))}
      </div>
    </section>
  );
};
