import type { NextPage } from "next";
import { ChromePicker } from "react-color";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util/date";
import { useBannerArr } from "@api/banner/useBannerArr";
import { useAddTopBanner } from "@api/banner/addTopBanner";
import { useDeleteBanner } from "@api/banner/useDeleteBanner";
import { useJobDetail } from "@api/job/useJobDetail";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import Image from "next/image";
import { BannerFormValues } from "./type";
import {
  sectionContainer,
  inputContainer,
  inputTitle,
  inputBox,
  cardPadding,
  cardWrapper,
  cardContainer,
  companyLogoBox,
  companyLogoWrapper,
  date,
  infoContainer,
  companyName,
  titleCSS,
  colorLine,
  getJobButton,
  submitBannerButton,
  tableTitle,
  bannerBox,
  bannerIdBox,
  companyNameBox,
  titleBox,
  expireDateBox,
  deleteBannerButton,
} from "./style";

const TopBanner: NextPage = () => {
  const queryClient = useQueryClient();

  const [color, setColor] = useState<string>("");
  const [jobId, setJobId] = useState<number>(0);

  const { data: jobData } = useJobDetail({ id: jobId });
  const { data: bannerDataArr, isLoading, isError } = useBannerArr({ type: "T" });
  const { mutate: addMutate } = useAddTopBanner();
  const { mutate: deleteMutate } = useDeleteBanner();

  const { register, watch, setValue, handleSubmit } = useForm<BannerFormValues>();

  const bannerSubmit: SubmitHandler<BannerFormValues> = (bannerObj) => {
    const formData = new FormData();
    const json = JSON.stringify(bannerObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    addMutate(
      { dto: formData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const bannerDelete = (id: number) => {
    deleteMutate(
      { bannerId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  if (!bannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const { month: jobStartMonth, date: jobStartDate } = dateConverter(jobData?.startTime || 0);
  const { month: jobEndMonth, date: jobEndDate } = dateConverter(jobData?.endTime || 0);

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 상단 배너 업로드</h2>
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

      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={sectionContainer}>
        <table>
          <tr css={tableTitle}>
            <th css={bannerIdBox}>배너 ID</th>
            <th css={companyNameBox}>회사 이름</th>
            <th css={titleBox}>배너 제목</th>
            <th css={expireDateBox}>만료 날짜</th>
            <th> </th>
          </tr>
          {bannerDataArr.bannerDataArr.map((banner) => {
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

            return (
              <tr key={banner.id} css={bannerBox}>
                <td css={bannerIdBox}>{banner.id}</td>
                <td css={companyNameBox}>{banner.companyName}</td>
                <td css={titleBox}>{banner.title}</td>
                <td css={expireDateBox}>
                  {endYear}-{endMonth}-{endDate}
                </td>
                <td>
                  <button
                    css={deleteBannerButton}
                    type="button"
                    onClick={() => {
                      bannerDelete(banner.id);
                    }}
                  >
                    배너 삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </main>
  );
};

export default TopBanner;
