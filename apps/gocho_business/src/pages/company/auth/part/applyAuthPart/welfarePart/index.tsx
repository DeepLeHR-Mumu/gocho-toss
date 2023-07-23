import { FunctionComponent, useState, useRef } from "react";

import { commonCssObj } from "@/styles";

import { Entries } from "@/types";

import { WelfareForm, AddFieldButton } from "../../../component";
import { WELFARE_DESC_OBJ } from "./constant";
import { welfareArrCreator } from "./util";
import { WelfareKey, PostWelfareSubmitValues, AuthWelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<AuthWelfarePartProps> = ({ companyAuthForm, companyData }) => {
  const welfareBtnInfoRef = useRef(Object.entries(WELFARE_DESC_OBJ) as Entries<typeof WELFARE_DESC_OBJ>);

  const { welfareArr: initialWelfareArr } = welfareArrCreator(companyData.welfare);
  const [welfareArr, setWelfareArr] = useState(initialWelfareArr);

  const welfareBtnHandler = (key: keyof PostWelfareSubmitValues) => {
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
    <section css={commonCssObj.partContainer}>
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
      <div css={cssObj.welfareButtonContainer}>
        {welfareBtnInfoRef.current.map((welfareBtnInfo) => {
          const [key, obj] = welfareBtnInfo;
          const buttonState = welfareArr.findIndex((welfare) => welfare.registerKey === `welfare.${key}`) !== -1;

          return (
            <AddFieldButton
              key={`welfareAddButton${key}`}
              state={buttonState}
              onClickHandler={() => welfareBtnHandler(key)}
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
            isMine={!companyData.uploader.isMine}
            companyFormObj={companyAuthForm}
            registerKey={welfare.registerKey}
          />
        ))}
      </div>
    </section>
  );
};
