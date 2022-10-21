import type { NextPage } from "next";
import { ChromePicker } from "react-color";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import { useBannerArr } from "@api/banner/useBannerArr";
import { useAddBanner } from "@api/banner/addBanner";
import { useDeleteBanner } from "@api/banner/useDeleteBanner";
import { useJobDetail } from "@api/job/useJobDetail";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { BannerFormValues } from "./type";
import {
  sectionContainer,
  inputContainer,
  inputTitle,
  inputBox,
  getJobButton,
  submitBannerButton,
  titleBox,
  bannerId,
  companyName,
  title,
  expireDate,
  bannerBox,
  deleteBannerButton,
} from "./style";

const TopBanner: NextPage = () => {
  const queryClient = useQueryClient();

  const [color, setColor] = useState<string>("");
  const [jobId, setJobId] = useState<number>(0);

  const { data: jobData } = useJobDetail({ id: jobId });
  const { data: bannerDataArr, isLoading, isError } = useBannerArr({ type: 1 });
  const { mutate: addMutate } = useAddBanner();
  const { mutate: deleteMutate } = useDeleteBanner();

  const { register, watch, setValue, handleSubmit } = useForm<BannerFormValues>({ defaultValues: { type: 1 } });

  const bannerSubmit: SubmitHandler<BannerFormValues> = (bannerObj) => {
    addMutate(bannerObj, {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });
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
                  const date = new Date(d);
                  return date.getTime();
                },
              })}
            />
            <input
              type="date"
              css={inputBox(false)}
              {...register("end_time", {
                required: true,
                setValueAs: (d: Date) => {
                  const date = new Date(d);
                  return date.getTime();
                },
              })}
            />
          </div>
          <ChromePicker
            color={color}
            onChange={(colorChange) => {
              setColor(colorChange.hex);
              setValue("color", colorChange.hex);
            }}
          />
          <p>{jobData?.title}</p>
          <button css={submitBannerButton} type="submit">
            배너 제출
          </button>
        </form>
      </section>

      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={sectionContainer}>
        <table>
          <tr css={titleBox}>
            <th css={bannerId}>배너 ID</th>
            <th css={companyName}>회사 이름</th>
            <th css={title}>배너 제목</th>
            <th css={expireDate}>만료 날짜</th>
            <th> </th>
          </tr>
          {bannerDataArr.bannerDataArr.map((banner) => {
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

            return (
              <tr key={banner.id} css={bannerBox}>
                <td css={bannerId}>{banner.id}</td>
                <td css={companyName}>{banner.companyName}</td>
                <td css={title}>{banner.title}</td>
                <td css={expireDate}>
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
