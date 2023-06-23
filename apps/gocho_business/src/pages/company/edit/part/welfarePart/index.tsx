import { FunctionComponent } from "react";

import { commonCssObj } from "@/pages/jd/upload/part/style";
import { AddFieldButton } from "@/pages/jd/upload/component";

import { WelfareForm } from "../../component";
import { WELFARE_ARR } from "./constant";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm, companyData }) => {
  const { welfareArr } = welfareArrCreator(companyData.welfare);

  return (
    <section css={commonCssObj.partContainer} data-testid="company/edit/WelfarePart">
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
      <div css={cssObj.welfareButtonContainer}>
        {WELFARE_ARR.map((welfareObj) => (
          <AddFieldButton
            key={`welfareAddButton${welfareObj.data}`}
            onClickHandler={() => null}
            text={welfareObj.name}
          />
        ))}
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
