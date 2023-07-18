import { FunctionComponent, useRef } from "react";

import { commonCssObj } from "@/styles";

import { WelfareForm, AddFieldButton } from "../../component";
import { WELFARE_DESC_OBJ } from "./constant";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm, companyData }) => {
  const welfareBtnInfoRef = useRef(Object.entries(WELFARE_DESC_OBJ));

  const { welfareArr } = welfareArrCreator(companyData.welfare);

  return (
    <section css={commonCssObj.partContainer} data-testid="company/edit/WelfarePart">
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
      <div css={cssObj.welfareButtonContainer}>
        {welfareBtnInfoRef.current.map((welfare) => {
          const [key, obj] = welfare;
          return <AddFieldButton key={`welfareAddButton${key}`} onClickHandler={() => null} text={obj.name} />;
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
            companyFormObj={companyForm}
            registerKey={welfare.registerKey}
          />
        ))}
      </div>
    </section>
  );
};
