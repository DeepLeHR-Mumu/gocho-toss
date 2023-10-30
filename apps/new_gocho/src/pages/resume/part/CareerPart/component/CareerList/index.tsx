import { FC } from "react";

import { ListItem } from "@/pages/resume/component";
import { useDeleteResumeCareer } from "@/apis/resume";
import { useToast } from "@/globalStates";

import { CareerListProps } from "./type";
import { cssObj } from "./style";

export const CareerList: FC<CareerListProps> = ({ resumeId, selectCareer, myCareerList }) => {
  const { mutate: deleteCareer } = useDeleteResumeCareer(resumeId);
  const { setToastMessage } = useToast();
  return (
    <>
      {myCareerList.map((career) => {
        const {
          id,
          name,
          isWorking,
          startDate,
          endDate,
          contractType,
          department,
          position,
          jobDescription,
          pay,
          retireDescription,
        } = career;
        return (
          <ListItem
            key={id}
            title={name}
            titleDes={contractType || ""}
            date={isWorking ? [startDate] : [startDate, endDate || ""]}
            editHandler={() => {
              selectCareer(career);
            }}
            deleteHandler={() => {
              deleteCareer(
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
          >
            <div css={cssObj.wrapper}>
              {(department || position) && (
                <div css={cssObj.infoWrapper}>
                  <p>{department || ""}</p>
                  <p>{position || ""}</p>
                </div>
              )}
              {jobDescription && <p css={cssObj.infoDes}>{jobDescription}</p>}
              {retireDescription && (
                <div>
                  <h3 css={cssObj.retireHead}>퇴사사유</h3>
                  <p css={cssObj.infoDes}>{retireDescription}</p>
                </div>
              )}
              {pay && (
                <div css={cssObj.payWrapper}>
                  <h3>연봉</h3>
                  <p>{pay.toLocaleString("ko-KR")} 만원</p>
                </div>
              )}
            </div>
          </ListItem>
        );
      })}
    </>
  );
};
