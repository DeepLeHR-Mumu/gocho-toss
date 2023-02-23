import { ReactElement, useEffect, useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";
import { usePreventRouting } from "shared-hooks";

import { useAddCompanyDetail } from "@/apis/company/useAddCompany";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { CommonStatusChip } from "@/components/common";
import { useUserState } from "@/globalStates/useUserState";
import { useToast } from "@/globalStates/useToast";
import { PageLayout, GlobalLayout, Footer } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/index/type";
import {
  companyEditConfirmEvent,
  companyEditDoneEvent,
  companyEditFailEvent,
  companyEditPageFunnelEvent,
} from "@/ga/companyEdit";

import { PageHead } from "./pageHead";
import { CompanyInfoPart } from "./part/companyInfoPart";
import { CompanyStatusPart } from "./part/companyStatusPart";
import { LastEditInfoPart } from "./part/lastEditInfoPart";
import { BasicPart } from "./part/basicPart";
import { WelfarePart } from "./part/welfarePart";
import { COMPANY_MESSAGE_OBJ, ALREADY_DONE_EDIT_MESSAGE } from "./constants";
import { PostSubmitValues } from "./type";
import { cssObj } from "./style";

const CompanyEditPage: NextPageWithLayout = () => {
  const isRefetching = useRef(false);
  const { userInfoData } = useUserState();
  const { setToast } = useToast();
  const { data: companyDetailData, refetch: companyDetailRefetch } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  const { mutate: putCompanyDetail } = useAddCompanyDetail();

  const companyForm = useForm<PostSubmitValues>({
    mode: "onBlur",
  });

  const {
    handleSubmit,
    reset,
    formState: { submitCount, dirtyFields, isDirty },
  } = companyForm;

  usePreventRouting(Boolean(Object.keys(dirtyFields).length));

  const addCompanyDetail = (formData: PostSubmitValues) => {
    companyEditConfirmEvent();
    isRefetching.current = true;
    companyDetailRefetch().then((response) => {
      if (!isDirty) {
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
            companyId: userInfoData?.companyId as number,
            dto: {
              ...formData,
              manager_id: userInfoData?.id as number,
              welfare: {
                money: formData.welfare.money,
                health: formData.welfare.health,
                life: formData.welfare.life,
                holiday: formData.welfare.holiday,
                facility: formData.welfare.facility,
                etc: formData.welfare.etc,
                growth: formData.welfare.growth,
                vacation: formData.welfare.vacation,
              },
              pay_desc: formData.pay_desc || null,
              nozo: {
                exists: formData.nozo.exists === "true",
                desc: formData.nozo.desc || null,
              },
            },
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
        address: companyDetailData.address,
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
    <main css={cssObj.wrapper}>
      <PageLayout>
        <form css={cssObj.container} onSubmit={handleSubmit(addCompanyDetail)}>
          <header css={cssObj.header}>
            <div>
              <h2 css={cssObj.title}>기업정보</h2>
              <p css={cssObj.desc}>변경사항이 있다면 작성 후 수정완료 버튼을 꼭 눌러주세요</p>
            </div>
            <div css={cssObj.topButtonBox}>
              <CommonStatusChip status={companyDetailData.status.name} />
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
            <BasicPart companyForm={companyForm} />
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
      </PageLayout>
    </main>
  );
};

CompanyEditPage.getLayout = (page: ReactElement) => (
  <>
    <PageHead />
    <GlobalLayout>
      {page}
      <Footer />
    </GlobalLayout>
  </>
);

export default CompanyEditPage;
