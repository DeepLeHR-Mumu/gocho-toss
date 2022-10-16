import { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import { ChromePicker } from "react-color";
import { SubmitHandler, useForm } from "react-hook-form";

import { dateConverter } from "shared-util/date";
import { useAddBanner } from "@api/banner/addBanner";
import { useBannerArr } from "@api/banner/useBannerArr";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import Image from "next/image";
import { useUploadBanner } from "@api/upload/useUploadBanner";
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
  const [color, setColor] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>();
  const [bannerPicture, setBannerPicture] = useState<FormData>();
  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: BannerDataArr, isLoading, isError } = useBannerArr({ type: 0 });
  const { mutate: mutatePicture } = useUploadBanner();
  const { mutate: mutateBanner } = useAddBanner();

  const { register, handleSubmit, setValue } = useForm<BannerFormValues>({});

  const onUploadBannerPicture = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      const img = e.target.files[0];
      formData.append("banner", img);
      setBannerPicture(formData);

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  const bannerPictureSubmit = () => {
    if (bannerPicture) {
      mutatePicture(
        { type: 0, banner: bannerPicture },
        {
          onSuccess: (response) => {
            // console.log(response.data);
            setValue("file_id", response.data);
            setCheckMsg("업로드 되었습니다!");
          },
        }
      );
    }
  };

  const bannerSubmit: SubmitHandler<BannerFormValues> = (bannerObj) => {
    mutateBanner(bannerObj);
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
              <button type="button" css={imageUploadLabel} onClick={bannerPictureSubmit}>
                {checkMsg || "서버에 올리기"}
              </button>
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

export default MainBanner;
