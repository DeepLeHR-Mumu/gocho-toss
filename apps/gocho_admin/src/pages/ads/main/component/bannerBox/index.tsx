import { FunctionComponent } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util";
import { bannerArrKeyObj } from "shared-constant/queryKeyFactory/banner/bannerArrKeyObj";

import { useDeleteMainBanner } from "@/api";

import { cssObj } from "./style";
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
    <tr css={cssObj.bannerBox}>
      <td css={cssObj.bannerId}>{banner.id}</td>
      <td css={cssObj.expireDate}>{date}</td>
      <td css={cssObj.pcImage}>
        <Image fill src={banner.pcImageUrl} alt="메인 배너 PC 이미지" />
      </td>
      <td css={cssObj.pcImage}>
        <Image fill src={banner.mobileImageUrl} alt="메인 배너 Mobile 이미지" />
      </td>
      <td>
        <button
          css={cssObj.deleteBannerButton}
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
