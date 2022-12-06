import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useDeleteBanner } from "@api/banner/useDeleteBanner";

import { bannerBox, bannerIdBox, companyNameBox, deleteBannerButton, expireDateBox, titleBox } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useDeleteBanner();

  const bannerDeleteHandler = (id: number) => {
    deleteMutate(
      { bannerId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(bannerArrKeyObj.bannerArr({ type: "T" }));
        },
      }
    );
  };

  const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

  return (
    <tr css={bannerBox}>
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
            bannerDeleteHandler(banner.id);
          }}
        >
          배너 삭제
        </button>
      </td>
    </tr>
  );
};
