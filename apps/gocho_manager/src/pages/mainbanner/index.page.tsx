import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ChromePicker } from "react-color";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useBannerArr } from "shared-api/banner/useBannerArr";
import { dateConverter } from "shared-util/date";

import { useAddBanner } from "@api/banner/addMainBanner";

import { useDeleteBanner } from "@api/banner/useDeleteBanner";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { BannerFormValues } from "./type";
import {
  sectionContainer,
  titleBox,
  inputContainer,
  inputTitle,
  inputBox,
  imageInput,
  imageUploadLabel,
  bannerPreviewContainer,
  submitBannerButton,
  bannerBox,
  bannerId,
  companyName,
  title,
  expireDate,
  deleteBannerButton,
} from "./style";

const MainBanner: NextPage = () => {
  const queryClient = useQueryClient();

  const [color, setColor] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>();
  const [bannerPicture, setBannerPicture] = useState<File>();

  const { data: BannerDataArr, isLoading, isError } = useBannerArr({ type: "M" });
  const { mutate: addMutate } = useAddBanner();
  const { mutate: deleteMutate } = useDeleteBanner();

  const { register, handleSubmit, setValue } = useForm<BannerFormValues>({});

  const onUploadBannerPicture = async (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      const img = e.target.files[0];
      setBannerPicture(img);

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  const bannerSubmit: SubmitHandler<BannerFormValues> = (bannerObj) => {
    const formData = new FormData();
    const json = JSON.stringify(bannerObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    if (bannerPicture) {
      formData.append("img", bannerPicture);
    }
    if (bannerPicture) {
      addMutate(
        { dto: blob, image: bannerPicture },
        {
          onSuccess: () => {
            queryClient.invalidateQueries();
          },
        }
      );
    }
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

  if (!BannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>메인 배너 업로드</h2>
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
          <div css={inputContainer}>
            <div css={imageInput}>
              <label css={imageUploadLabel} htmlFor="bannerImg">
                사진 업로드
                <input
                  type="file"
                  id="bannerImg"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  onChange={onUploadBannerPicture}
                  style={{ display: "none" }}
                />
              </label>
              {imageSrc && (
                <div css={bannerPreviewContainer}>
                  <Image layout="fill" objectFit="contain" src={imageSrc} alt="" />
                </div>
              )}
            </div>
          </div>
          <ChromePicker
            color={color}
            onChange={(colorChange) => {
              setColor(colorChange.hex);
              setValue("color", colorChange.hex);
            }}
          />
          <button css={submitBannerButton} type="submit">
            배너 제출
          </button>
        </form>
      </section>

      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={sectionContainer}>
        <table>
          <thead>
            <tr css={titleBox}>
              <th css={bannerId}>배너 ID</th>
              <th css={companyName}>회사 이름</th>
              <th css={title}>배너 제목</th>
              <th css={expireDate}>만료 날짜</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {BannerDataArr.bannerDataArr.map((banner) => {
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
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default MainBanner;
