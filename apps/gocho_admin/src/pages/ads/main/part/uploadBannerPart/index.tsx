import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useAddMainBanner } from "@/api";
import { pageTitle } from "@/style/commonStyles";

import {
  bannerPreviewContainer,
  imageInput,
  imageUploadLabel,
  imageUploadInput,
  inputBox,
  inputContainer,
  inputTitle,
  sectionContainer,
  submitBannerButton,
} from "./style";
import { BannerFormValues } from "./type";

export const UploadBannerPart: FunctionComponent = () => {
  const [pcImagePreview, setPcImagePreview] = useState<string>();
  const [mobileImagePreview, setMobileImagePreview] = useState<string>();
  const [pcImage, setPcImage] = useState<File>();
  const [mobileImage, setMobileImage] = useState<File>();

  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<BannerFormValues>({});

  const { mutate: addMutate } = useAddMainBanner();

  const onUploadBannerPictureHandler = async (
    changeEvent: ChangeEvent<HTMLInputElement>,
    setFile: Dispatch<SetStateAction<File | undefined>>,
    setPreview: Dispatch<SetStateAction<string | undefined>>
  ) => {
    const reader = new FileReader();

    if (changeEvent.target.files?.[0]) {
      const img = changeEvent.target.files[0];
      setFile(img);
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    }
  };

  const submitBannerHandler: SubmitHandler<BannerFormValues> = (bannerSubmitObj) => {
    if (pcImage && mobileImage) {
      addMutate(
        { dto: bannerSubmitObj, pcImage, mobileImage },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(bannerArrKeyObj.main);
          },
        }
      );
    }
  };

  return (
    <>
      <h2 css={pageTitle}>메인 배너 업로드</h2>
      <section css={sectionContainer}>
        <form onSubmit={handleSubmit(submitBannerHandler)}>
          <div css={inputContainer}>
            <strong css={inputTitle}>광고 링크</strong>
            <input css={inputBox} {...register("link", { required: true })} />
            <strong css={inputTitle}>게시 기간</strong>
            <input
              type="datetime-local"
              css={inputBox}
              {...register("start_time", {
                required: true,
                setValueAs: (startDate: Date) => dayjs(startDate, "YYYY-MM-DDTHH:mm:ss"),
              })}
            />
            <input
              type="datetime-local"
              css={inputBox}
              {...register("end_time", {
                required: true,
                setValueAs: (endDate: Date) => dayjs(endDate, "YYYY-MM-DDTHH:mm:ss"),
              })}
            />
          </div>
          <div css={inputContainer}>
            <div css={imageInput}>
              <label css={imageUploadLabel} htmlFor="pcBannerImg">
                PC 배너 사진 업로드
                <input
                  type="file"
                  id="pcBannerImg"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  onChange={(changeEvent) => onUploadBannerPictureHandler(changeEvent, setPcImage, setPcImagePreview)}
                  css={imageUploadInput}
                />
              </label>
              {pcImagePreview && (
                <div css={bannerPreviewContainer}>
                  <Image fill src={pcImagePreview} alt="업로드된 기업 이미지" />
                </div>
              )}
            </div>
          </div>
          <div css={inputContainer}>
            <div css={imageInput}>
              <label css={imageUploadLabel} htmlFor="mobileBannerImg">
                모바일 배너 사진 업로드
                <input
                  type="file"
                  id="mobileBannerImg"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  onChange={(changeEvent) =>
                    onUploadBannerPictureHandler(changeEvent, setMobileImage, setMobileImagePreview)
                  }
                  css={imageUploadInput}
                />
              </label>
              {mobileImagePreview && (
                <div css={bannerPreviewContainer}>
                  <Image fill src={mobileImagePreview} alt="업로드된 기업 이미지" />
                </div>
              )}
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
