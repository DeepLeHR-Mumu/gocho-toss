import { ListCard } from "../../component";

export const FluencyPart = () => {
  // TODO: 유저아이디 가져오기
  const userId = 12;

  return (
    <div>
      <ListCard title="어학" userId={userId}>
        <h1>안녕하시요</h1>
      </ListCard>
    </div>
  );
};
