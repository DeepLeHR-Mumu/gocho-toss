import { Fragment, FunctionComponent } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { WelfareForm } from "../../component/welfareForm";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm }) => {
  const { userInfoData } = useUserState();
  const { data: companyData } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  if (!companyData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  const { welfareArr } = welfareArrCreator(companyData.welfare);

  return (
    <div css={cssObj.wrapper} data-testid="company/edit/welfarePart">
      <strong css={cssObj.subTitle}>복지(선택)</strong>
      <div css={cssObj.welfareBox}>
        {welfareArr.map((welfare) => (
          <Fragment key={welfare.title}>
            <WelfareForm
              valueArr={welfare.valueArr}
              companyForm={companyForm}
              registerKey={welfare.registerKey}
              title={welfare.title}
              desc={welfare.desc}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
