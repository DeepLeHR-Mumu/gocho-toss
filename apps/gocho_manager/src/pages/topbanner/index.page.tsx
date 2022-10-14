import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

import { useBannerArr } from "@api/banner/useBannerArr";
import { useAddBanner } from "@api/banner/addBanner";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { dateConverter } from "shared-util/date";

import { ChromePicker } from "react-color";
import { useState } from "react";
import { BannerFormValues } from "./type";
import {
  sectionContainer,
  inputContainer,
  inputTitle,
  inputBox,
  titleBox,
  bannerId,
  companyName,
  title,
  expireDate,
  bannerBox,
  deleteBannerButton,
} from "./style";

const TopBanner: NextPage = () => {
  const [color, setColor] = useState<string>("");

  const { data: BannerDataArr, isLoading, isError } = useBannerArr({ type: 1 });
  const { mutate } = useAddBanner();

  const { register, handleSubmit } = useForm<BannerFormValues>({});

  const bannerSubmit: SubmitHandler<BannerFormValues> = (bannerObj) => {
    mutate(bannerObj);
  };

  if (!BannerDataArr || isLoading) {
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
            }}
          />
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
          {BannerDataArr.bannerDataArr.map((banner) => {
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

            return (
              <tr css={bannerBox}>
                <td css={bannerId}>{banner.id}</td>
                <td css={companyName}>{banner.companyName}</td>
                <td css={title}>{banner.title}</td>
                <td css={expireDate}>
                  {endYear}-{endMonth}-{endDate}
                </td>
                <td>
                  <button css={deleteBannerButton} type="button">
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
