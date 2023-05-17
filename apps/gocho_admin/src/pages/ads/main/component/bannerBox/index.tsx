import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useDeleteMainBanner } from "@/api";

import { bannerBox, bannerId, companyName, deleteBannerButton, expireDate, title } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useDeleteMainBanner();

  const bannerDeleteHandler = (id: number) => {
    deleteMutate(
      { bannerId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(bannerArrKeyObj.main);
        },
      }
    );
  };

  const { date } = dateConverter(banner.endTime);

  return (
    <tr css={bannerBox}>
      <td css={bannerId}>{banner.id}</td>
      <td css={companyName}>{banner.company.name}</td>
      <td css={title}>{banner.jd.title}</td>
      <td css={expireDate}>{date}</td>
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
