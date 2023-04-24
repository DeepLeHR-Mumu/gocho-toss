import { ChangeEvent, FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useAddMainBanner } from "@/api/banner/useAddMainBanner";
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
  colorPickerButton,
  colorPicker,
  submitBannerButton,
} from "./style";
import { BannerFormValues } from "./type";

export const UploadBannerPart: FunctionComponent = () => {
  const [imageSrc, setImageSrc] = useState<string>();
  const [bannerPicture, setBannerPicture] = useState<File>();

  const queryClient = useQueryClient();
  const { register, handleSubmit, setValue } = useForm<BannerFormValues>({});

  const { mutate: addMutate } = useAddMainBanner();

  const onUploadBannerPictureHandler = async (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (changeEvent.target.files?.[0]) {
      const img = changeEvent.target.files[0];
      setBannerPicture(img);

      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(img);
    }
  };

  const submitBannerHandler: SubmitHandler<BannerFormValues> = (bannerSubmitObj) => {
    if (bannerPicture) {
      addMutate(
        { dto: bannerSubmitObj, image: bannerPicture },
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
                setValueAs: (startDate: Date) => new Date(startDate).getTime(),
              })}
            />
            <input
              type="date"
              css={inputBox(false)}
              {...register("end_time", {
                required: true,
                setValueAs: (endDate: Date) => new Date(endDate).getTime(),
              })}
            />
            <label css={colorPickerButton} htmlFor="topBannerColor">
              색 선택
              <input
                css={colorPicker}
                type="color"
                id="topBannerColor"
                onChange={(changeEvent) => {
                  setValue("color", changeEvent.target.value);
                }}
              />
            </label>
          </div>
          <div css={inputContainer}>
            <div css={imageInput}>
              <label css={imageUploadLabel} htmlFor="bannerImg">
                사진 업로드
                <input
                  type="file"
                  id="bannerImg"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  onChange={onUploadBannerPictureHandler}
                  css={imageUploadInput}
                />
              </label>
              {imageSrc && (
                <div css={bannerPreviewContainer}>
                  <Image fill src={imageSrc} alt="업로드된 기업 이미지" />
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
