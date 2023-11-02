import { FC } from "react";

import { useDeleteResumeFluency } from "@/apis/resume";
import { ListItem } from "@/pages/resume/component";

import { FluencyListProps } from "./type";

export const FluencyList: FC<FluencyListProps> = ({ resumeId, selectFluency, myFluencyList }) => {
  const { mutate: deleteFluency } = useDeleteResumeFluency(resumeId);

  return (
    <>
      {myFluencyList.map((fluency) => {
        const { id, name, grade, acquisitionDate, languageType } = fluency;
        return (
          <ListItem
            key={id}
            title={name}
            titleDes={languageType}
            description={`${grade}점(등급)`}
            date={[acquisitionDate]}
            editHandler={() => {
              selectFluency(fluency);
            }}
            deleteHandler={() => {
              deleteFluency({
                resumeId,
                fluencyId: id,
              });
            }}
          />
        );
      })}
    </>
  );
};
