import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";
import { useMoveBanner } from "shared-api/admin/banner/useMoveBanner";

import { pageTitle } from "@style/commonStyles";

import { changeBannerButton, flexBox, inputBox, sectionContainer } from "./style";
import { BannerMoveFormValues } from "./type";

export const MoveBannerPart: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<BannerMoveFormValues>();

  const { mutate: moveMutate } = useMoveBanner();

  const bannerMoveHandler: SubmitHandler<BannerMoveFormValues> = (bannerMoveObj) => {
    moveMutate(
      { ...bannerMoveObj, type: "T" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(bannerArrKeyObj.bannerArr({ type: "T" }));
        },
      }
    );
  };

  return (
    <>
      <h2 css={pageTitle}>배너 순서 변경</h2>
      <section css={sectionContainer}>
        <form css={flexBox} onSubmit={handleSubmit(bannerMoveHandler)}>
          <div css={flexBox}>
            <input
              type="number"
              css={inputBox(true)}
              {...register("from", {
                valueAsNumber: true,
                required: true,
              })}
            />
            번 째를
          </div>
          <div css={flexBox}>
            <input
              type="number"
              css={inputBox(true)}
              {...register("to", {
                valueAsNumber: true,
                required: true,
              })}
            />
            번 째 배너로 올리기 / 내리기
          </div>
          <button css={changeBannerButton} type="submit">
            순서 변경
          </button>
        </form>
      </section>
    </>
  );
};
