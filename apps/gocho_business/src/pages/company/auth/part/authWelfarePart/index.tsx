import { FunctionComponent, useState, useRef } from "react";

import { commonCssObj } from "@/styles";

import { WELFARE_DESC_OBJ } from "@/pages/company/edit/part/welfarePart/constant";
import { welfareArrCreator } from "@/pages/company/edit/part/welfarePart/util";
import { PostWelfareSubmitValues } from "@/pages/company/edit/part/welfarePart/type";

import { AuthWelfareForm, AuthAddFieldButton } from "../../component";
import { AuthWelfarePartProps } from "./type";
import { cssObj } from "./style";
import { Entries } from "@/types";
import { WelfareKey } from "@/pages/company/edit/component/welfareForm/type";

export const AuthWelfarePart: FunctionComponent<AuthWelfarePartProps> = ({ companyAuthForm, companyData }) => {
  const welfareBtnInfoRef = useRef(Object.entries(WELFARE_DESC_OBJ) as Entries<typeof WELFARE_DESC_OBJ>);

  const { welfareArr: initialWelfares } = welfareArrCreator(companyData.welfare);
  const [welfareArr, setWelfareArr] = useState(initialWelfares);

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
    <section css={commonCssObj.partContainer} data-testid="company/edit/AuthWelfarePart">
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
      <div css={cssObj.welfareButtonContainer}>
        {welfareBtnInfoRef.current.map((welfareBtnInfo) => {
          const [key, obj] = welfareBtnInfo;
          const buttonState = welfareArr.findIndex((welfare) => welfare.registerKey === `welfare.${key}`) !== -1;

          return (
            <AuthAddFieldButton
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
          <AuthWelfareForm
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
