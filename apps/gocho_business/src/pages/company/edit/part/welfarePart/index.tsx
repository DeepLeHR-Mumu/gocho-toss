import { FunctionComponent } from "react";
import { FiCornerDownLeft } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis";
import { useUserState } from "@/globalStates/useUserState";

import { InformDesc } from "../../component/informDesc";
import { WelfareForm } from "../../component/welfareForm";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm }) => {
  const { userInfoData } = useUserState();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  if (!companyDetailData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  const { welfareArr } = welfareArrCreator(companyDetailData.welfare);

  return (
    <div css={cssObj.wrapper} data-testid="company/edit/WelfarePart">
      <strong css={cssObj.subTitle(!companyDetailData.uploader.isMine)}>복지(선택)</strong>

      {companyDetailData.uploader.isMine && (
        <InformDesc
          Icon={FiCornerDownLeft}
          desc="복지 항목에서 입력 후 키보드의 엔터를 누르거나, 입력폼 오른쪽 $icon 엔터모양 아이콘을 클릭하면 추가됩니다"
        />
      )}

      <div css={cssObj.welfareBox}>
        {welfareArr.map((welfare) => (
          <WelfareForm
            key={welfare.title}
            welfareValueArr={welfare.welfareValueArr}
            isMine={!companyDetailData.uploader.isMine}
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
