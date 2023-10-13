import { useState } from "react";
import { ListCard } from "../../component";
import { ProfileForm, ResumeProfile } from "./component";

import { cssObj } from "./style";

// TODO: 유저아이디 가져오기
const userId = 12;

export const InfoPart = () => {
  const [isEditMode, setEditMode] = useState(false);

  const handleEditMode = () => setEditMode(!isEditMode);

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
        {isEditMode ? <ProfileForm handleEditMode={handleEditMode} /> : <ResumeProfile />}
      </ListCard>
    </div>
  );
};
