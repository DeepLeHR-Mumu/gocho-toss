import { useRecoilState, useResetRecoilState } from "recoil";
import { specRegisterAtom } from "@recoil/atom";
import { SpecRegisterAtomDef } from "@recoil/atom/specRegister";

interface SetCurrentSpecObjDef {
  (specRegisterObj: SpecRegisterAtomDef | object): void;
}

export const useSpecRegisterObj = () => {
  const [_currentSpecObj, _setCurrentSpecObj] =
    useRecoilState(specRegisterAtom);

  const resetSpecRegisterObj = useResetRecoilState(specRegisterAtom);

  const setCurrentSpecObj: SetCurrentSpecObjDef = ({ ...specRegisterObj }) => {
    return _setCurrentSpecObj((prev) => {
      return {
        ...prev,
        ...specRegisterObj,
      };
    });
  };

  const currentSpecObj = _currentSpecObj;

  return { resetSpecRegisterObj, currentSpecObj, setCurrentSpecObj };
};
