import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useManagerProfile, useCompanyDetail, useManagerAuth } from "@/apis";
import { RequestObjDef as AuthRequestObjDef } from "@/apis/manager/auth/useManagerAuth/type";
import { ConfirmModal } from "@/components/global/modal/confirmModal";
import { INTERNAL_URL } from "@/constants";

import { AuthInfoPart } from "./authInfoPart";
import { AuthBasicPart } from "./authBasicPart";
import { AuthFactoryPart } from "./authFactoryPart";
import { AuthWelfarePart } from "./authWelfarePart";
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
  const { mutate: postManagersAuth } = useManagerAuth();

  const companyAuthForm = useForm<CompanyAuthFormValues>({
    mode: "onBlur",
  });

  const {
    handleSubmit: handleSubmitCompanyForm,
    formState: { isValid },
  } = companyAuthForm;

  if (!companyDetailData || !userInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  const validHandler = (formData: CompanyAuthFormValues) => {
    const { certificateOfBusiness, companyLogo, backgroundImage } = formData;
    const certificationFile = certificateOfBusiness.item(0);

    if (certificationFile) {
      const requetObj: AuthRequestObjDef = {
        managerId: userInfoData.id,
        certification: certificationFile,
      };

      if (userInfoData.status.isFirst) {
        const companyLogoFile = companyLogo.item(0);
        const backgroundImageFile = backgroundImage.item(0);
        requetObj.dto = {
          industry: formData.industry,
          employee_number: formData.employee_number,
          location: formData.location,
          intro: formData.intro,
          found_date: formData.found_date,
          welfare: formData.welfare,
          pay_avg: formData.pay_avg,
          pay_start: formData.pay_start,
          pay_desc: formData.pay_desc,
          nozo: { ...formData.nozo, exists: formData.nozo.exists === "true" },
          factory_arr: formData.factory,
          size: formData.size,
        };
        requetObj.logo = companyLogoFile !== null ? companyLogoFile : undefined;
        requetObj.backgroundImage = backgroundImageFile !== null ? backgroundImageFile : undefined;
      }

      postManagersAuth(requetObj, {
        onSuccess: () => {
          managerProfileRefetch();
          router.push(INTERNAL_URL.HOME);
        },
      });
    }
  };

  return (
    <>
      <div css={cssObj.partContainer}>
        <form>
          <AuthInfoPart companyAuthForm={companyAuthForm} companyDetailData={companyDetailData} />
          {userInfoData.status.isFirst && (
            <>
              <RegistrationPart companyAuthForm={companyAuthForm} />
              <AuthBasicPart companyAuthForm={companyAuthForm} isOtherEdit={false} />
              <AuthWelfarePart
                companyAuthForm={companyAuthForm}
                companyData={{ welfare: null, uploader: { isMine: true } }}
              />
              <AuthFactoryPart companyAuthForm={companyAuthForm} />
            </>
          )}
          <div css={cssObj.footerContainer}>
            <button type="button" disabled={!isValid} css={cssObj.submitButton} onClick={() => setConfirmModal(true)}>
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
          confirm={{ name: "확인", onClick: handleSubmitCompanyForm(validHandler) }}
        />
      )}
    </>
  );
};
