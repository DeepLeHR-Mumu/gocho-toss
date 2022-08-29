import { useRecoilState, useResetRecoilState } from "recoil";
import { lastEducationAtom } from "@recoil/atom";

export const useLastEdu = () => {
  const [_currentLastEdu, _setCurrentLastEdu] =
    useRecoilState(lastEducationAtom);

  const resetLastEdu = useResetRecoilState(lastEducationAtom);

  const setCurrentLastEdu = (lastEdu: "고졸" | "초대졸" | null) => {
    return _setCurrentLastEdu(lastEdu);
  };

  const currentLastEdu = _currentLastEdu;

  return { resetLastEdu, currentLastEdu, setCurrentLastEdu };
};
