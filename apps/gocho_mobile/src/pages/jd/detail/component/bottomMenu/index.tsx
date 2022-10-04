import { FunctionComponent } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";

import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";

import { NormalButton } from "shared-ui/common/atom/button";
import { BottomMenuProps } from "./type";
import { wrapper, bookmarkButton, buttonBox } from "./style";

export const BottomMenu: FunctionComponent<BottomMenuProps> = ({
  jobDetailData,
  isBookmarked,
  userId,
  setOpenComment,
}) => {
  const queryClient = useQueryClient();

  const openJobInNewTab = () => {
    window.open(jobDetailData.applyUrl, "_blank", "noopener, noreferrer");
  };

  const { mutate: addMutate } = useAddJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const { mutate: deleteMutate } = useDeleteJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const addJobBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  return (
    <div css={wrapper}>
      <button
        type="button"
        css={bookmarkButton(isBookmarked)}
        onClick={() => {
          return isBookmarked ? deleteJobBookmark() : addJobBookmark();
        }}
        aria-label={isBookmarked ? "북마크 해지" : "북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>
      <div css={buttonBox}>
        <NormalButton
          text="실시간 댓글"
          buttonClick={() => {
            return setOpenComment(true);
          }}
          variant="outlined"
          wide
        />
        <NormalButton text="지원하기" buttonClick={openJobInNewTab} variant="filled" wide />
      </div>
    </div>
  );
};
