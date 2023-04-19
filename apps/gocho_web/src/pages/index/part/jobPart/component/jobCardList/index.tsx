import { FunctionComponent } from "react";

import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util";
import { MainJobCard } from "shared-ui/card/MainJobCard";

import { useModal } from "@/globalStates";

import { cardListContainer } from "./style";
import { JobCardArrProps } from "./type";

export const JobCardList: FunctionComponent<JobCardArrProps> = ({ listOrder }) => {
  const { setModal } = useModal();

  const { data: jobDataArr } = useJobArr({
    order: listOrder,
    filter: "valid",
    page: 1,
    size: 9,
  });

  const loginModalOpener = () => {
    setModal("loginModal", { button: "close" });
  };

  if (!jobDataArr) {
    return (
      <div css={cardListContainer}>
        {dummyArrCreator(9).map((value) => {
          return <MainJobCard key={`MainJobCardSkeleton${value}`} isSkeleton />;
        })}
      </div>
    );
  }
  return (
    <div css={cardListContainer}>
      {jobDataArr.jobDataArr.map((data) => {
        return (
          <MainJobCard key={`MainJobCard${data.id}`} jobData={data} isMobile={false} loginOpener={loginModalOpener} />
        );
      })}
    </div>
  );
};
