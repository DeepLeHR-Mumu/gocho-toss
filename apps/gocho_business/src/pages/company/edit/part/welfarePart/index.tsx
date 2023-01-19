import { FunctionComponent } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { FiCornerDownLeft } from "react-icons/fi";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { WelfareForm } from "../../component/welfareForm";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";
import { InformDesc } from "../../component/informDesc";

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
    <div css={cssObj.wrapper} data-testid="company/edit/WelfarePart">
      <strong css={cssObj.subTitle}>복지(선택)</strong>
      <InformDesc
        Icon={FiCornerDownLeft}
        desc="복지 항목에서 입력 후 키보드의 엔터를 누르거나, 입력폼 오른쪽 $icon 엔터모양 아이콘을 클릭하면 추가됩니다"
      />
      <div css={cssObj.welfareBox}>
        {welfareArr.map((welfare) => (
          <WelfareForm
            key={welfare.title}
            welfareValueArr={welfare.welfareValueArr}
            companyFormObj={companyForm}
            registerKey={welfare.registerKey}
            title={welfare.title}
            desc={welfare.desc}
          />
        ))}
      </div>
    </div>
  );
};
