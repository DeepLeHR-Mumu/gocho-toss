import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChromePicker } from "react-color";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useAddTopBanner } from "@api/banner/addTopBanner";
import { useJobDetail } from "@api/job/useJobDetail";

import {
  cardContainer,
  cardPadding,
  cardWrapper,
  colorLine,
  companyLogoBox,
  companyLogoWrapper,
  companyName,
  date,
  getJobButton,
  infoContainer,
  inputBox,
  inputContainer,
  inputTitle,
  sectionContainer,
  submitBannerButton,
  titleCSS,
} from "./style";
import { BannerSubmitFormValues } from "./type";

export const UploadBannerPart: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const [color, setColor] = useState<string>("");
  const [jobId, setJobId] = useState<number>(0);

  const { data: jobData } = useJobDetail({ id: jobId });
  const { mutate } = useAddTopBanner();

  const { register, watch, setValue, handleSubmit } = useForm<BannerSubmitFormValues>();

  const bannerSubmit: SubmitHandler<BannerSubmitFormValues> = (bannerSubmitObj) => {
    const formData = new FormData();
    const json = JSON.stringify(bannerSubmitObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    mutate(
      { dto: formData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const { month: jobStartMonth, date: jobStartDate } = dateConverter(jobData?.startTime || 0);
  const { month: jobEndMonth, date: jobEndDate } = dateConverter(jobData?.endTime || 0);

  return (
    <section css={sectionContainer}>
      <form onSubmit={handleSubmit(bannerSubmit)}>
        <div css={inputContainer}>
          <strong css={inputTitle}>공고 번호</strong>
          <input
            css={inputBox(true)}
            {...register("jd_id", {
              valueAsNumber: true,
              required: true,
            })}
          />
          <button
            type="button"
            css={getJobButton}
            onClick={() => {
              setJobId(watch("jd_id"));
            }}
          >
            불러오기
          </button>
          <strong css={inputTitle}>게시 기간</strong>
          <input
            type="date"
            css={inputBox(false)}
            {...register("start_time", {
              required: true,
              setValueAs: (d: Date) => {
                return new Date(d).getTime();
              },
            })}
          />
          <input
            type="date"
            css={inputBox(false)}
            {...register("end_time", {
              required: true,
              setValueAs: (d: Date) => {
                return new Date(d).getTime();
              },
            })}
          />
        </div>
        <div css={inputContainer}>
          <ChromePicker
            color={color}
            onChange={(colorChange) => {
              setColor(colorChange.hex);
              setValue("color", colorChange.hex);
            }}
          />
          <div css={cardPadding}>
            <div css={cardWrapper}>
              <div css={cardContainer}>
                <div css={companyLogoWrapper}>
                  <div css={companyLogoBox}>
                    <Image layout="fill" objectFit="contain" src={jobData?.company.logoUrl || defaultCompanyLogo} />
                  </div>
                </div>
                <div css={infoContainer}>
                  <p css={companyName}>{jobData?.company.name}</p>
                  <p css={date}>
                    {`${jobStartMonth}/${jobStartDate}`}~{`${jobEndMonth}/${jobEndDate}`}
                  </p>
                </div>
              </div>
              <strong css={titleCSS}>{jobData?.title}</strong>
            </div>
            <div css={colorLine(color)} />
          </div>
        </div>

        <button css={submitBannerButton} type="submit">
          배너 제출
        </button>
      </form>
    </section>
  );
};
