import { FC } from "react";

import { ListItem } from "@/pages/resume/component";
import { useDeleteResumeCareer } from "@/apis/resume";
import { useToast } from "@/globalStates";

import { CarrerListProps } from "./type";

export const CarrerList: FC<CarrerListProps> = ({ resumeId, selectCarrer, myCarrerList }) => {
  const { mutate: deleteCarrer } = useDeleteResumeCareer(resumeId);
  const { setToastMessage } = useToast();
  return (
    <>
      {myCarrerList.map((carrer) => {
        const {
          id,
          name,
          // isWorking,
          startDate,
          endDate,
          contractType,
          department,
          position,
          jobDescription,
          pay,
          retireDescription,
        } = carrer;
        return (
          <ListItem
            key={id}
            title={name}
            titleDes={contractType || ""}
            desciption={[department || "", position || "", jobDescription, retireDescription, pay].join("/")}
            date={[startDate, endDate || ""]}
            editHadnler={() => {
              selectCarrer(carrer);
            }}
            deleteHandler={() => {
              deleteCarrer(
                {
                  resumeId,
                  careerId: id,
                },
                {
                  onSuccess: () => {
                    setToastMessage("경력이 삭제되었습니다.");
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
