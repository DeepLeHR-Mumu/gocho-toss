import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { dateConverter } from "shared-util/date";
import { useBannerArr } from "shared-api/banner/useBannerArr";

import { useDeleteBanner } from "@api/banner/useDeleteBanner";

import {
  bannerBox,
  bannerIdBox,
  companyNameBox,
  deleteBannerButton,
  expireDateBox,
  sectionContainer,
  tableTitle,
  titleBox,
} from "./style";

export const BannerListPart: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const { data: bannerDataArr } = useBannerArr({ type: "T" });
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

  return (
    <section css={sectionContainer}>
      <table>
        <thead>
          <tr css={tableTitle}>
            <th css={bannerIdBox}>배너 ID</th>
            <th css={companyNameBox}>회사 이름</th>
            <th css={titleBox}>배너 제목</th>
            <th css={expireDateBox}>만료 날짜</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {bannerDataArr?.bannerDataArr.map((banner) => {
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
          })}
        </tbody>
      </table>
    </section>
  );
};
