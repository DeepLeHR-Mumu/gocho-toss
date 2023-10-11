import { ListCard } from "../../component";

export const InfoPart = () => {
  // TODO: 유저아이디 가져오기
  const userId = 12;

  return (
    <div>
      <ListCard title="기본정보" isRequired iconType="edit" userId={userId}>
        <h1>안녕하시요</h1>
      </ListCard>
    </div>
  );
};
