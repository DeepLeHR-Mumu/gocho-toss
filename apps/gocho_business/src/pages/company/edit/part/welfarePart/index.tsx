import { FunctionComponent } from "react";
import { FiCornerDownLeft } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail, useManagerProfile } from "@/apis";

import { commonCssObj } from "@/pages/jd/upload/part/style";
import { InformDesc, WelfareForm } from "../../component";
import { welfareArrCreator } from "./util";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfarePart: FunctionComponent<WelfarePartProps> = ({ companyForm }) => {
  const { data: userInfoData } = useManagerProfile();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.company.id,
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
    <section css={commonCssObj.partContainer} data-testid="company/edit/WelfarePart">
      <h3 css={commonCssObj.partTitle}>상세 복지 정보</h3>
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
    </section>
  );
};
