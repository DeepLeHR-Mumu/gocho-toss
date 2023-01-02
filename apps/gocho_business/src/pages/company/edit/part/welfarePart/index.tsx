import { Fragment, FunctionComponent } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { WelfareForm } from "../../component/welfareForm";
import { WelfarePartProps } from "./type";
import { cssObj } from "./style";

export const WelfalePart: FunctionComponent<WelfarePartProps> = ({ companyForm }) => {
  const { userInfoData } = useUserState();
  const { data: companyData, isLoading: isCompanyDataLoading } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  if (!companyData || isCompanyDataLoading) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  const welfareArr = [
    {
      valueArr: companyData.welfare?.money,
      companyForm,
      registerKey: "welfare.money",
      title: "급여",
      desc: "성과급 및 추가 수당, 연금과 관련된 정보들이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.health,
      companyForm,
      registerKey: "welfare.health",
      title: "의료",
      desc: "건강검진 또는 의료비, 헬스비 등이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.life,
      companyForm,
      registerKey: "welfare.life",
      title: "생활",
      desc: "식대/학자금/문화생활비/통신비/복지포인트/사택/주차비 등이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.holiday,
      companyForm,
      registerKey: "welfare.holiday",
      title: "명절/경조사",
      desc: "명절/생일/결혼기념일/장기근속/웰컴 선물 등이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.facility,
      companyForm,
      registerKey: "welfare.facility",
      title: "시설",
      desc: "휴게실/수면실/장애인 복지시설/콘도 이용권/업무기기 등이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.vacation,
      companyForm,
      registerKey: "welfare.vacation",
      title: "휴일/휴가",
      desc: "교육/연수/도서/자기계발비 등이 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.growth,
      companyForm,
      registerKey: "welfare.growth",
      title: "자기계발",
      desc: "동아리/동호회/제휴 등의 기타 복지가 포함돼요!",
    },
    {
      valueArr: companyData.welfare?.etc,
      companyForm,
      registerKey: "welfare.etc",
      title: "기타",
      desc: "성과급 및 추가 수당, 연금과 관련된 정보들이 포함돼요!",
    },
  ] as const;

  return (
    <div css={cssObj.lineBox()}>
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
