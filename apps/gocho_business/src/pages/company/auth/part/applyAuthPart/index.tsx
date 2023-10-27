import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Spinner } from "shared-ui/common/spinner";
import { useManagerProfile, useCompanyDetail, useManagerAuth } from "@/apis";
import { RequestObjDef as AuthRequestObjDef } from "@/apis/manager/auth/useManagerAuth/type";
import { ConfirmModal } from "@/components/global/modal/confirmModal";
import { INTERNAL_URL } from "@/constants";
import { companyAuthSubmitClickEvent } from "@/ga";
import { ErrorResponseDef } from "@/types";

import { stringOrNull } from "../../util";

import { InfoPart } from "./infoPart";
import { BasicPart } from "./basicPart";
import { FactoryPart } from "./factoryPart";
import { WelfarePart } from "./welfarePart";
import { RegistrationPart } from "./registrationPart";
import { CompanyAuthFormValues } from "./type";
import { cssObj } from "./style";

export const ApplyAuthPart: FunctionComponent = () => {
  const [confirmModal, setConfirmModal] = useState(false);

  const router = useRouter();
  const { data: userInfoData, refetch: managerProfileRefetch } = useManagerProfile();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.company.id,
  });
  const { mutate: postManagerAuth } = useManagerAuth();

  const companyAuthForm = useForm<CompanyAuthFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      industry: [],
    },
  });

  const {
    handleSubmit: handleSubmitCompanyForm,
    formState: { isValid },
    getValues,
  } = companyAuthForm;

  if (!companyDetailData || !userInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const validHandler = () => {
    if (
      (userInfoData.status.isFirst
        ? getValues("certificateOfBusiness") === undefined || getValues("companyLogo") === undefined
        : getValues("certificateOfBusiness") === undefined) ||
      !isValid
    ) {
      return;
    }

    setConfirmModal(true);
  };

  const requestAuth = (formData: CompanyAuthFormValues) => {
    companyAuthSubmitClickEvent();

    const { certificateOfBusiness, companyLogo, backgroundImage } = formData;
    const certificationFile = certificateOfBusiness.item(0);

    if (certificationFile) {
      const requestObj: AuthRequestObjDef = {
        managerId: userInfoData.id,
        certification: certificationFile,
      };

      if (userInfoData.status.isFirst) {
        const companyLogoFile = companyLogo.item(0);
        const backgroundImageFile = backgroundImage.item(0);
        requestObj.dto = {
          industry: formData.industry,
          employee_number: formData.employee_number,
          location: formData.location,
          intro: formData.intro,
          found_date: formData.found_date,
          welfare: formData.welfare,
          pay_avg: formData.pay_avg,
          pay_start: formData.pay_start,
          pay_desc: stringOrNull(formData.pay_desc),
          nozo: { exists: formData.nozo.exists === "true", desc: stringOrNull(formData.nozo.desc) },
          factory_arr: formData.factory_arr,
          size: formData.size,
        };
        requestObj.logo = companyLogoFile !== null ? companyLogoFile : undefined;
        requestObj.backgroundImage = backgroundImageFile !== null ? backgroundImageFile : undefined;
      }

      postManagerAuth(requestObj, {
        onSuccess: () => {
          alert(
            "기업회원 정보가 성공적으로 제출되었습니다.\n 영업일 기준 3시간 이내 검수 결과가 메일과 알림으로 전송될 예정입니다."
          );

          managerProfileRefetch();
          router.push(INTERNAL_URL.HOME);
        },

        onError: (error) => {
          const errorResponse = error.response?.data as ErrorResponseDef;
          alert(`${errorResponse.error_message}\n계속 오류가 발생할 시 우측 하단 채팅을 통해 문의주세요.`);
          setConfirmModal(false);
        },
      });
    }
  };

  return (
    <>
      <div css={cssObj.partContainer}>
        <form>
          <InfoPart companyAuthForm={companyAuthForm} companyDetailData={companyDetailData} />
          {userInfoData.status.isFirst && (
            <>
              <RegistrationPart companyAuthForm={companyAuthForm} />
              <BasicPart companyAuthForm={companyAuthForm} />
              <WelfarePart
                companyAuthForm={companyAuthForm}
                companyData={{ welfare: null, uploader: { isMine: true } }}
              />
              <FactoryPart companyAuthForm={companyAuthForm} />
            </>
          )}
          <div css={cssObj.footerContainer}>
            <button type="button" css={cssObj.submitButton} onClick={handleSubmitCompanyForm(validHandler)}>
              제출하기
            </button>
          </div>
        </form>
      </div>
      {confirmModal && (
        <ConfirmModal
          title="제출하기"
          description={
            <ul css={cssObj.confirmDescriptionWrapper}>
              <li>[확인] 버튼을 누르시면 검수 단계로 넘어가며 제출 후 수정이 불가능합니다.</li>
              <li>영업일(평일) 기준 최대 2일 이내 검수 결과가 메일과 알림으로 전송되며,</li>
              <li>검수 통과 후 기업 정보가 즉시 고초대졸닷컴 사이트에 업데이트 됩니다.</li>
            </ul>
          }
          cancel={{ name: "취소", onClick: () => setConfirmModal(false) }}
          confirm={{ name: "확인", onClick: handleSubmitCompanyForm(requestAuth) }}
        />
      )}
    </>
  );
};
