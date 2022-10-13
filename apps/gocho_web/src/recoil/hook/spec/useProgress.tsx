import { useRecoilState, useResetRecoilState } from "recoil";
import { progressPercentAtom } from "@recoil/atom";

export const useProgress = () => {
  const [_currentProgress, _setCurrentProgress] = useRecoilState(progressPercentAtom);

  const resetCurrentProgress = useResetRecoilState(progressPercentAtom);

  const setCurrentProgress = (percent: number) => {
    return _setCurrentProgress(percent);
  };

  const currentProgress = _currentProgress;

  return { resetCurrentProgress, currentProgress, setCurrentProgress };
};
