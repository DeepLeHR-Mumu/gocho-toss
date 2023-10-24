import { FC } from "react";

import { useDeleteResumeFluency } from "@/apis/resume";
import { useToast } from "@/globalStates";
import { ListItem } from "@/pages/resume/component";

import { FluencyListProps } from "./type";

export const FluencyList: FC<FluencyListProps> = ({ resumeId, selectFluency, myFluencyList }) => {
  const { mutate: deleteFluency } = useDeleteResumeFluency(resumeId);
  const { setToastMessage } = useToast();

  return (
    <>
      {myFluencyList.map((fluency) => {
        const { id, name, grade, acquisitionDate } = fluency;
        return (
          <ListItem
            key={id}
            title={name}
            desciption={`${grade}점`}
            date={[acquisitionDate]}
            editHadnler={() => {
              selectFluency(fluency);
            }}
            deleteHandler={() => {
              deleteFluency(
                {
                  resumeId,
                  fluencyId: id,
                },
                {
                  onSuccess: () => {
                    setToastMessage("대외활동이 삭제되었습니다.");
                  },
                }
              );
            }}
          />
        );
      })}
    </>
  );
};
