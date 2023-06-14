import { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { NextPage } from "next";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { usePreventRouting } from "shared-hooks";

import { useAddCompanyDetail, useCompanyDetail, useManagerProfile } from "@/apis";
import { CommonStatusChip, PageLayout } from "@/components";
import { useToast } from "@/globalStates";
import { companyEditConfirmEvent, companyEditDoneEvent, companyEditFailEvent, companyEditPageFunnelEvent } from "@/ga";
import { CompanySideNav } from "@/components/global/companySideNav";

import { PageHead } from "./pageHead";
import { CompanyInfoPart, CompanyStatusPart, LastEditInfoPart, BasicPart, WelfarePart } from "./part";
import { COMPANY_MESSAGE_OBJ, ALREADY_DONE_EDIT_MESSAGE } from "./constants";
import { CompanyFormValues } from "./type";
import { cssObj } from "./style";

const CompanyEditPage: NextPage = () => {
  const [bgImage, setBgImage] = useState<File>();

  const isRefetching = useRef(false);

  const { data: userInfoData } = useManagerProfile();
  const { setToast } = useToast();
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
    if (!companyDetailData || isRefetching.current === true) return;
    if (companyDetailData.uploader.isMine === false) window.alert(ALREADY_DONE_EDIT_MESSAGE);
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
          <div css={cssObj.partContainer}>
            <form css={cssObj.container} onSubmit={handleSubmit(addCompanyDetail)}>
              <header css={cssObj.header}>
                <div>
                  <h2 css={cssObj.title}>기업정보</h2>
                  <p css={cssObj.desc}>변경사항이 있다면 작성 후 수정완료 버튼을 꼭 눌러주세요</p>
                </div>
                <div css={cssObj.topButtonBox}>
                  <CommonStatusChip status={companyDetailData.status.name} isExpired={false} />
                  <div css={cssObj.sharedButtonBox}>
                    <SharedButton
                      onClickHandler="submit"
                      text="기업 정보 수정완료"
                      radius="round"
                      isFullWidth
                      isDisabled={!companyDetailData?.uploader.isMine}
                      fontColor={COLORS.GRAY100}
                      iconObj={{
                        icon: FiEdit,
                        location: "left",
                      }}
                      size="medium"
                      backgroundColor={COLORS.BLUE_FIRST40}
                    />
                  </div>
                </div>
              </header>
              <CompanyInfoPart />
              <LastEditInfoPart />
              {companyDetailData.status.reason && <CompanyStatusPart />}
              <section css={cssObj.companyInfoBox}>
                <BasicPart companyForm={companyForm} setBgImage={setBgImage} />
                <WelfarePart companyForm={companyForm} />
              </section>
              <div css={cssObj.sharedButtonBox}>
                <SharedButton
                  onClickHandler="submit"
                  text="기업 정보 수정완료"
                  radius="round"
                  isFullWidth
                  isDisabled={!companyDetailData?.uploader.isMine}
                  fontColor={COLORS.GRAY100}
                  iconObj={{
                    icon: FiEdit,
                    location: "left",
                  }}
                  size="medium"
                  backgroundColor={COLORS.BLUE_FIRST40}
                />
              </div>
            </form>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default CompanyEditPage;
