import { ChangeEvent, FunctionComponent, useState } from "react";
import { ChromePicker } from "react-color";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { useAddBanner } from "@api/banner/addMainBanner";

import {
  bannerPreviewContainer,
  imageInput,
  imageUploadLabel,
  inputBox,
  inputContainer,
  inputTitle,
  sectionContainer,
  submitBannerButton,
} from "./style";
import { BannerFormValues } from "./type";

export const UploadBannerPart: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const [color, setColor] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>();
  const [bannerPicture, setBannerPicture] = useState<File>();

  const { mutate: addMutate } = useAddBanner();

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

  const submitBannerHandler: SubmitHandler<BannerFormValues> = (bannerObj) => {
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

  return (
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
  );
};
