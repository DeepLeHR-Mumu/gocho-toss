import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { usePreventRouting } from "shared-hooks";

import { useAddCompanyDetail, useCompanyDetail, useManagerProfile } from "@/apis";
import { PageLayout } from "@/components";
import { useToast } from "@/globalStates";
import { companyEditConfirmEvent, companyEditDoneEvent, companyEditFailEvent, companyEditPageFunnelEvent } from "@/ga";
import { CompanySideNav } from "@/components/global/companySideNav";

import { PageHead } from "./pageHead";
import { CompanyInfoPart, LastEditInfoPart, BasicPart, WelfarePart } from "./part";
import { COMPANY_MESSAGE_OBJ, ALREADY_DONE_EDIT_MESSAGE } from "./constant";
import { CompanyFormValues } from "./type";
import { cssObj } from "./style";

const CompanyEditPage: NextPage = () => {
  const [bgImage, setBgImage] = useState<File>();

  const isRefetching = useRef(false);
  const { setToast } = useToast();

  const { data: userInfoData } = useManagerProfile();
  const { data: companyDetailData, refetch: companyDetailRefetch } = useCompanyDetail({
    companyId: userInfoData?.company.id,
  });
  const { mutate: putCompanyDetail } = useAddCompanyDetail();

  const companyForm = useForm<CompanyFormValues>({
    mode: "onBlur",
  });

  const {
    handleSubmit,
    reset,
    formState: { submitCount, dirtyFields, isDirty },
  } = companyForm;

  usePreventRouting(Boolean(Object.keys(dirtyFields).length));

  const addCompanyDetail = (formData: CompanyFormValues) => {
    companyEditConfirmEvent();
    isRefetching.current = true;
    companyDetailRefetch().then((response) => {
      if (!isDirty && !bgImage) {
        window.alert("변경사항이 없습니다.");
        return;
      }
      if (!response.data?.uploader.isMine) {
        window.alert(ALREADY_DONE_EDIT_MESSAGE);
        return;
      }
      if (response.data?.uploader.isMine && window.confirm(COMPANY_MESSAGE_OBJ.EDIT)) {
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
            },
            bgImage,
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

      reset({
        industry: companyDetailData.industry,
        size: companyDetailData.size,
        found_date: dayjs(new Date(companyDetailData.foundDate)).format("YYYY-MM-DD"),
        employee_number: companyDetailData.employeeNumber,
        intro: companyDetailData.intro || "",
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
      });
    }
  }, [companyDetailData, reset]);

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

  useEffect(() => {
    if (!companyDetailData || isRefetching.current) return;
    if (!companyDetailData.uploader.isMine) window.alert(ALREADY_DONE_EDIT_MESSAGE);
  }, [companyDetailData]);

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
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <CompanySideNav />
          <form css={cssObj.formContainer} onSubmit={handleSubmit(addCompanyDetail)}>
            <LastEditInfoPart />
            <CompanyInfoPart companyForm={companyForm} setBgImage={setBgImage} />
            <BasicPart companyForm={companyForm} />
            <WelfarePart companyForm={companyForm} />
            <div css={cssObj.infoBox}>
              <p css={cssObj.info}>
                · 영업일 기준 최대 2일 이내 검수 후 고초대졸닷컴 내 수정된 정보가 업데이트 됩니다.
              </p>
              <p css={cssObj.info}>
                · 수정 요청 반려 시, 이메일 및 비즈니스 내 알림으로 알려드리며, 해당 사항 수정 후 다시 제출하여야
                합니다. 충분한 검토 후 제출해 주세요
              </p>
            </div>
            <div css={cssObj.buttonBox}>
              <SharedButton
                onClickHandler="submit"
                text="수정 요청"
                radius="round"
                isFullWidth
                isDisabled={!companyDetailData?.uploader.isMine}
                fontColor={COLORS.GRAY100}
                size="medium"
                backgroundColor={COLORS.BLUE_FIRST40}
              />
            </div>
          </form>
        </div>
      </PageLayout>
    </>
  );
};

export default CompanyEditPage;
