import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";
import { usePreventRouting } from "shared-hooks";

import { useEditCompanyDetail, useCompanyDetail, useManagerProfile } from "@/apis";
import { PageLayout } from "@/components";
import { useModal, useToast } from "@/globalStates";
import { companyEditConfirmEvent, companyEditDoneEvent, companyEditFailEvent, companyEditPageFunnelEvent } from "@/ga";
import { CompanySideNav } from "@/components/global/companySideNav";

import { PageHead } from "./pageHead";
import { ButtonPart, CompanyInfoPart, LastEditInfoPart, BasicPart, WelfarePart, FactoryPart } from "./part";
import { COMPANY_MESSAGE_OBJ } from "./constant";
import { CompanyFormValues } from "./type";
import { getFieldArrayValueWithNull } from "./util";
import { cssObj } from "./style";

const CompanyEditPage: NextPage = () => {
  const [bgImage, setBgImage] = useState<File>();
  const [logo, setLogo] = useState<File>();

  const { setModal } = useModal();
  const isRefetching = useRef(false);
  const { setToast } = useToast();

  const { data: userInfoData } = useManagerProfile();
  const { data: companyDetailData, refetch: companyDetailRefetch } = useCompanyDetail({
    companyId: userInfoData?.company.id,
  });
  const { mutate: putCompanyDetail } = useEditCompanyDetail();

  const companyForm = useForm<CompanyFormValues>({
    mode: "onBlur",
  });

  const {
    handleSubmit,
    reset,
    formState: { submitCount, dirtyFields, isDirty },
  } = companyForm;

  const isFormDirty = !isDirty && !bgImage && !logo;

  usePreventRouting(Boolean(Object.keys(dirtyFields).length));

  const addCompanyDetail = (formData: CompanyFormValues) => {
    companyEditConfirmEvent();
    isRefetching.current = true;
    companyDetailRefetch().then(() => {
      if (isFormDirty) {
        window.alert("변경사항이 없습니다.");
        return;
      }
      if (window.confirm(COMPANY_MESSAGE_OBJ.EDIT)) {
        putCompanyDetail(
          {
            companyId: userInfoData?.company.id as number,
            dto: {
              ...formData,
              manager_id: userInfoData?.id as number,
              pay_desc: formData.pay_desc || null,
              nozo: {
                exists: formData.nozo.exists === "true",
                desc: formData.nozo.desc || null,
              },
              welfare: {
                money: formData.welfare.money && getFieldArrayValueWithNull(formData.welfare.money),
                health: formData.welfare.health && getFieldArrayValueWithNull(formData.welfare.health),
                life: formData.welfare.life && getFieldArrayValueWithNull(formData.welfare.life),
                holiday: formData.welfare.holiday && getFieldArrayValueWithNull(formData.welfare.holiday),
                facility: formData.welfare.facility && getFieldArrayValueWithNull(formData.welfare.facility),
                vacation: formData.welfare.vacation && getFieldArrayValueWithNull(formData.welfare.vacation),
                growth: formData.welfare.growth && getFieldArrayValueWithNull(formData.welfare.growth),
                etc: formData.welfare.etc && getFieldArrayValueWithNull(formData.welfare.etc),
              },
            },
            bgImage,
            logo,
          },
          {
            onSuccess: () => {
              setToast("등록되었습니다");
              companyEditDoneEvent();
            },
          }
        );
      }
    });
    return null;
  };

  useEffect(() => {
    if (companyDetailData) {
      const welfareObj =
        companyDetailData.welfare === null
          ? {
              money: null,
              health: null,
              life: null,
              holiday: null,
              facility: null,
              vacation: null,
              growth: null,
              etc: null,
            }
          : {
              money: companyDetailData.welfare.money,
              health: companyDetailData.welfare.health,
              life: companyDetailData.welfare.life,
              holiday: companyDetailData.welfare.holiday,
              facility: companyDetailData.welfare.facility,
              vacation: companyDetailData.welfare.vacation,
              growth: companyDetailData.welfare.growth,
              etc: companyDetailData.welfare.etc,
            };

      const factoryArr = companyDetailData.factory.map((factoryObj) => ({
        id: factoryObj.id,
        factory_name: factoryObj.name,
        female_number: factoryObj.femaleNumber,
        male_number: factoryObj.maleNumber,
        product: factoryObj.product,
        address: factoryObj.address,
        bus_bool: factoryObj.bus.exists,
        bus_etc: factoryObj.bus.desc,
        dormitory_bool: factoryObj.dormitory.exists,
        dormitory_etc: factoryObj.dormitory.desc,
      }));

      reset({
        logo_url: companyDetailData.logo,
        background_image_url: companyDetailData.backgroundImage,
        industry: companyDetailData.industry,
        size: companyDetailData.size,
        found_date: dayjs(new Date(companyDetailData.foundDate)).format("YYYY-MM-DD"),
        employee_number: companyDetailData.employeeNumber,
        intro: companyDetailData.intro,
        location: {
          address: companyDetailData.location.address,
          x: companyDetailData.location.x,
          y: companyDetailData.location.y,
        },
        nozo: {
          exists: companyDetailData.nozo.exists ? "true" : "false",
          desc: companyDetailData.nozo.desc || "",
        },
        pay_avg: companyDetailData.payAvg,
        pay_start: companyDetailData.payStart,
        pay_desc: companyDetailData.payDesc || "",
        welfare: welfareObj,
        factory_arr: factoryArr,
      });
    }
  }, [companyDetailData, reset]);

  useEffect(() => {
    if (userInfoData && userInfoData.status.name !== "인증완료") setModal("companyAuthModal");
  }, [setModal, userInfoData]);

  useEffect(() => {
    window.addEventListener("keydown", (keyDownEvent) => {
      if (keyDownEvent.key === "Enter") {
        keyDownEvent.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("keydown", (keyDownEvent) => {
        if (keyDownEvent.key === "Enter") {
          keyDownEvent.preventDefault();
        }
      });
    };
  }, []);

  useEffect(() => {
    companyEditPageFunnelEvent();
  }, []);

  useEffect(() => {
    if (submitCount === 0) return;
    companyEditFailEvent(submitCount);
  }, [submitCount]);

  if (!companyDetailData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <PageHead />
      <form onSubmit={handleSubmit(addCompanyDetail)}>
        <ButtonPart disabled={isFormDirty} />
        <PageLayout>
          <div css={cssObj.contentWrapper}>
            <CompanySideNav />
            <div css={cssObj.formContainer}>
              <LastEditInfoPart />
              <CompanyInfoPart
                companyForm={companyForm}
                companyData={companyDetailData}
                setBgImage={setBgImage}
                setLogo={setLogo}
              />
              <BasicPart companyForm={companyForm} />
              <WelfarePart companyForm={companyForm} welfareData={companyDetailData.welfare} />
              <FactoryPart companyForm={companyForm} />
              <div css={cssObj.infoBox}>
                <p css={cssObj.info}>
                  · 영업일 기준 최대 2일 이내 검수 후 고초대졸닷컴 내 수정된 정보가 업데이트 됩니다.
                </p>
                <p css={cssObj.info}>
                  · 수정 요청 반려 시, 이메일 및 비즈니스 내 알림으로 알려드리며, 해당 사항 수정 후 다시 제출하여야
                  합니다. 충분한 검토 후 제출해 주세요
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </form>
    </>
  );
};

export default CompanyEditPage;
