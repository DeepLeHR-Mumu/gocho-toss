import { forwardRef, useState } from "react";

import Link from "next/link";
import { useUserResumeProfile } from "@/apis/users";

import { ListCard } from "../../component";
import { ProfileForm, ResumeProfile } from "./component";
import { cssObj } from "./style";
import { ProfilePartProps } from "./type";

export const ProfilePart = forwardRef<HTMLDivElement, ProfilePartProps>(({ userId }, ref) => {
  const [isEditMode, setEditMode] = useState(false);

  const { data: resumeProfile } = useUserResumeProfile({ userId });

  const handleEditMode = () => setEditMode(!isEditMode);

  if (!resumeProfile) return <> </>;

  return (
    <ListCard
      title="기본정보"
      isRequired
      ref={ref}
      iconType={isEditMode ? "none" : "edit"}
      editMessage={
        <p css={cssObj.editMsg}>
          이름, 생년월일, 연락처는 [마이페이지{">"}{" "}
          <Link
            href={{
              pathname: "/mypage",
              query: {
                type: "account",
              },
            }}
          >
            <b>계정 관리</b>
          </Link>
          ]에서 수정할 수 있습니다
        </p>
      }
      iconHandler={handleEditMode}
    >
      {isEditMode ? (
        <ProfileForm handleEditMode={handleEditMode} userId={userId} resumeProfile={{ ...resumeProfile }} />
      ) : (
        <ResumeProfile resumeProfile={{ ...resumeProfile }} />
      )}
    </ListCard>
  );
});
