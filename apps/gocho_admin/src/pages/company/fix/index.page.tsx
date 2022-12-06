import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useChangeCompany } from "@api/company/useChangeCompany";
import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { mainContainer, pageTitle } from "@style/commonStyles";

import { FactoryBox } from "./component/factoryBox";
import { BasicInfoPart } from "./part/basicInfoPart";
import { WelfareInfoPart } from "./part/welfareInfoPart";
import { PayInfoPart } from "./part/payInfoPart";
import { CompanyFormValues, CompanySubmitValues } from "../type";
import { blankFactory } from "./constant";
import { formContainer, addFactoryButton, submitButton, checkMsgBox } from "./style";

const CompanyUpload: NextPage = () => {
  const router = useRouter();
  const companyId = Number(router.query.id);

  const [logoPicture, setLogoPicture] = useState<File>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: companyData } = useCompanyDetail({ companyId });
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
    const newCompanyObj: CompanySubmitValues = {
      ...companyObj,
      welfare: {
        money: companyObj.welfare.money ? companyObj.welfare.money.split("\n") : null,
        health: companyObj.welfare.health ? companyObj.welfare.health.split("\n") : null,
        life: companyObj.welfare.life ? companyObj.welfare.life.split("\n") : null,
        holiday: companyObj.welfare.holiday ? companyObj.welfare.holiday.split("\n") : null,
        facility: companyObj.welfare.facility ? companyObj.welfare.facility.split("\n") : null,
        vacation: companyObj.welfare.vacation ? companyObj.welfare.vacation.split("\n") : null,
        growth: companyObj.welfare.growth ? companyObj.welfare.growth.split("\n") : null,
        etc: companyObj.welfare.etc ? companyObj.welfare.etc.split("\n") : null,
      },
    };
    const json = JSON.stringify(newCompanyObj);
    const blob = new Blob([json], { type: "application/json" });

    if (logoPicture) {
      mutate(
        { companyId, dto: blob, image: logoPicture },
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
        { companyId, dto: blob },
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
    const FactoryNewArr = companyData?.factoryArr.map((factory) => {
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
      catch_url: companyData?.catchUrl,
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
        money: companyData?.welfare.money ? companyData?.welfare.money.join("\n") : "",
        health: companyData?.welfare.health ? companyData?.welfare.health.join("\n") : "",
        life: companyData?.welfare.life ? companyData?.welfare.life.join("\n") : "",
        holiday: companyData?.welfare.holiday ? companyData?.welfare.holiday.join("\n") : "",
        facility: companyData?.welfare.facility ? companyData?.welfare.facility.join("\n") : "",
        vacation: companyData?.welfare.vacation ? companyData?.welfare.vacation.join("\n") : "",
        growth: companyData?.welfare.growth ? companyData?.welfare.growth.join("\n") : "",
        etc: companyData?.welfare.etc ? companyData?.welfare.etc.join("\n") : "",
      },
      nozo: {
        exists: companyData?.nozo.exists,
        desc: companyData?.nozo.desc,
      },
      factories: FactoryNewArr,
    });
  }, [companyData, reset]);

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 등록</h2>
      <form css={formContainer} onSubmit={handleSubmit(companySubmit)}>
        <BasicInfoPart
          register={register}
          watch={watch}
          companyLogo={companyData?.logoUrl || ""}
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
          기업 등록하기
        </button>
        {checkMsg && <p css={checkMsgBox}>{checkMsg}</p>}
      </form>
    </main>
  );
};

export default CompanyUpload;
