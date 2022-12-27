import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useChangeCompany } from "@api/company/useChangeCompany";
import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";

import { ErrorScreen, LoadingScreen } from "@component/screen";
import { CompanyFormValues } from "../type";
import { FactoryBox } from "./component/factoryBox";
import { BasicInfoPart } from "./part/basicInfoPart";
import { WelfareInfoPart } from "./part/welfareInfoPart";
import { PayInfoPart } from "./part/payInfoPart";
import { blankFactory } from "./constant";
import { formContainer, addFactoryButton, submitButton, checkMsgBox } from "./style";

const CompanyEdit: NextPage = () => {
  const router = useRouter();
  const companyId = Number(router.query.id);

  const [logoPicture, setLogoPicture] = useState<File>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: companyData, isLoading, isError } = useCompanyDetail({ companyId });
  const { mutate } = useChangeCompany();

  const companyForm = useForm<CompanyFormValues>({
    defaultValues: {
      nozo: { exists: false, desc: null },
    },
  });
  const { register, control, handleSubmit, watch, reset } = companyForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "factories",
  });

  const companySubmit: SubmitHandler<CompanyFormValues> = (companyObj) => {
    if (logoPicture) {
      mutate(
        { companyId, dto: companyObj, logo: logoPicture },
        {
          onSuccess: () => {
            setCheckMsg("기업이 수정 되었습니다!");
          },

          onError: () => {
            setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
          },
        }
      );
    } else {
      mutate(
        { companyId, dto: companyObj },
        {
          onSuccess: () => {
            setCheckMsg("기업이 수정 되었습니다!");
          },

          onError: () => {
            setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
          },
        }
      );
    }
  };

  useEffect(() => {
    const newFoundDate = companyData?.foundDate ? companyData.foundDate + 540000 * 60 : 0;
    const FactoryNewArr = companyData?.factoryArr?.map((factory) => {
      return {
        factory_name: factory.factoryName,
        address: factory.address,
        male_number: factory.maleNumber,
        female_number: factory.femaleNumber,
        product: factory.product,
        bus_bool: factory.bus.exists,
        bus_etc: factory.bus.desc,
        dormitory_bool: factory.dormitory.exists,
        dormitory_etc: factory.dormitory.desc,
      };
    });

    reset({
      name: companyData?.name,
      business_number: companyData?.businessNumber,
      youtube_url: companyData?.youtubeUrl,
      industry: companyData?.industry,
      size: companyData?.size,
      employee_number: companyData?.employeeNumber,
      found_date: new Date(newFoundDate).toISOString().substring(0, 10),
      address: companyData?.address,
      intro: companyData?.intro,
      pay_avg: companyData?.payAvg,
      pay_start: companyData?.payStart,
      pay_desc: companyData?.payDesc,
      welfare: {
        money: companyData?.welfare.money ? companyData?.welfare.money.join("\n") : null,
        health: companyData?.welfare.health ? companyData?.welfare.health.join("\n") : null,
        life: companyData?.welfare.life ? companyData?.welfare.life.join("\n") : null,
        holiday: companyData?.welfare.holiday ? companyData?.welfare.holiday.join("\n") : null,
        facility: companyData?.welfare.facility ? companyData?.welfare.facility.join("\n") : null,
        vacation: companyData?.welfare.vacation ? companyData?.welfare.vacation.join("\n") : null,
        growth: companyData?.welfare.growth ? companyData?.welfare.growth.join("\n") : null,
        etc: companyData?.welfare.etc ? companyData?.welfare.etc.join("\n") : null,
      },
      nozo: {
        exists: companyData?.nozo.exists,
        desc: companyData?.nozo.desc,
      },
      factories: FactoryNewArr,
    });
  }, [companyData, reset]);

  if (!companyData || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 수정</h2>
      <form css={formContainer} onSubmit={handleSubmit(companySubmit)}>
        <BasicInfoPart
          register={register}
          watch={watch}
          companyLogo={companyData?.logoUrl}
          setLogoPicture={setLogoPicture}
        />
        <WelfareInfoPart register={register} />
        <PayInfoPart register={register} />
        <ul>
          {fields.map((item, index) => {
            return <FactoryBox key={item.id} index={index} companyForm={companyForm} remove={remove} />;
          })}
        </ul>
        <button
          css={addFactoryButton}
          type="button"
          onClick={() => {
            append(blankFactory);
          }}
        >
          공장 추가
        </button>
        <button css={submitButton} type="submit">
          기업 수정하기
        </button>
        {checkMsg && <p css={checkMsgBox}>{checkMsg}</p>}
      </form>
    </main>
  );
};

export default CompanyEdit;
