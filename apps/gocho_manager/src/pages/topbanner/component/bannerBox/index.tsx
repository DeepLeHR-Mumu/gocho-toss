import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteBanner } from "@api/banner/useDeleteBanner";
import { dateConverter } from "shared-util/date";

import { bannerBox, bannerIdBox, companyNameBox, deleteBannerButton, expireDateBox, titleBox } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteBanner();
  const bannerDelete = (id: number) => {
    mutate(
      { bannerId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

  return (
    <tr key={banner.id} css={bannerBox}>
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
            bannerDelete(banner.id);
          }}
        >
          배너 삭제
        </button>
      </td>
    </tr>
  );
};
