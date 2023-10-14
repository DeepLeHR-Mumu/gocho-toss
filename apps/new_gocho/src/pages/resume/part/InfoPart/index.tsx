import { FC, useState } from "react";
import { ListCard } from "../../component";
import { ProfileForm, ResumeProfile } from "./component";

import { cssObj } from "./style";
import { useUserResumeProfile } from "@/apis/users/resume/useUserResumeProfile";

interface InfoPartProps {
  userId: number;
}

export const InfoPart: FC<InfoPartProps> = ({ userId }) => {
  const [isEditMode, setEditMode] = useState(false);

  const { data: resumeProfile } = useUserResumeProfile({ userId });

  const handleEditMode = () => setEditMode(!isEditMode);

  if (!resumeProfile) return <> </>;

  return (
    <div>
      <ListCard
        title="기본정보"
        isRequired
        iconType={isEditMode ? "none" : "edit"}
        editMessage={
          <p css={cssObj.editMsg}>
            이름, 생년월일, 연락처는 [마이페이지{">"} <b>계정 관리</b>]에서 수정할 수 있습니다
          </p>
        }
        userId={userId}
        iconHandler={handleEditMode}
      >
        {isEditMode ? (
          <ProfileForm handleEditMode={handleEditMode} userId={userId} resumeProfile={{ ...resumeProfile }} />
        ) : (
          <ResumeProfile resumeProfile={{ ...resumeProfile }} />
        )}
      </ListCard>
    </div>
  );
};
