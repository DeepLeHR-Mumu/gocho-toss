import { ChangeEvent, FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { dateConverter } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useJdDetail, useAddTopBanner } from "@/api";
import { pageTitle } from "@/style/commonStyles";

import {
  cardContainer,
  cardPadding,
  cardWrapper,
  colorLine,
  colorPicker,
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
  const [color, setColor] = useState<string>("");
  const [jobId, setJobId] = useState<number>(0);

  const queryClient = useQueryClient();
  const { register, watch, setValue, handleSubmit } = useForm<BannerSubmitFormValues>();

  const { data: jobData } = useJdDetail({ id: jobId });
  const { mutate: addMutate } = useAddTopBanner();

  const submitBannerHandler: SubmitHandler<BannerSubmitFormValues> = (bannerSubmitObj) => {
    addMutate(
      { dto: bannerSubmitObj },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(bannerArrKeyObj.top);
        },
      }
    );
  };

  const changeColorHandler = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    setColor(changeEvent.target.value);
    setValue("color", changeEvent.target.value);
  };

  const { date: jobStartDate } = dateConverter(jobData?.startTime || "0");
  const { date: jobEndDate } = dateConverter(jobData?.endTime || "0");

  return (
    <>
      <h2 css={pageTitle}>공고 상단 배너 업로드</h2>
      <section css={sectionContainer}>
        <form onSubmit={handleSubmit(submitBannerHandler)}>
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
                setValueAs: (startDate: Date) => `${dayjs(startDate).format("YYYY-MM-DD")}T00:00:00`,
              })}
            />
            <input
              type="date"
              css={inputBox(false)}
              {...register("end_time", {
                required: true,
                setValueAs: (endDate: Date) => `${dayjs(endDate).format("YYYY-MM-DD")}T00:00:00`,
              })}
            />
            <label css={getJobButton} htmlFor="topBannerColor">
              색 선택
              <input
                css={colorPicker}
                type="color"
                id="topBannerColor"
                onChange={(changeEvent) => {
                  changeColorHandler(changeEvent);
                }}
              />
            </label>
          </div>
          <div css={inputContainer}>
            <div css={cardPadding}>
              <div css={cardWrapper}>
                <div css={cardContainer}>
                  <div css={companyLogoWrapper}>
                    <div css={companyLogoBox}>
                      <Image fill src={jobData?.company.logoUrl || defaultCompanyLogo} alt="" />
                    </div>
                  </div>
                  <div css={infoContainer}>
                    <p css={companyName}>{jobData?.company.name}</p>
                    <p css={date}>
                      {`${jobStartDate}`}~{`${jobEndDate}`}
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
    </>
  );
};
