import { useRecoilState } from "recoil";
import { isSpecRegisterBlockingAtom } from "@recoil/atom";

export const useIsSpecPageBlocking = () => {
  const [_isBlocking, _setIsBlocking] = useRecoilState(
    isSpecRegisterBlockingAtom
  );

  const setIsBlocking = (is: boolean) => {
    return _setIsBlocking(is);
  };

  const isBlocking = _isBlocking;

  return { isBlocking, setIsBlocking };
};
