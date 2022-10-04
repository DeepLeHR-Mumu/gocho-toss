import { GetPossibleEduArr } from "./type";

export const getPossibleEduArr: GetPossibleEduArr = (possibleEdu) => {
  const possibleEduArr = [
    {
      desc: "중졸",
      isPossible: possibleEdu.middle,
    },
    {
      desc: "고졸",
      isPossible: possibleEdu.high,
    },
    {
      desc: "초대졸",
      isPossible: possibleEdu.college,
    },
    {
      desc: "4년제",
      isPossible: possibleEdu.four,
    },
  ];

  return possibleEduArr;
};
