export type modalNameDef = "findPasswordModal" | "loginModal" | "factoryModal";

export interface UseModalProps {
  currentModal: modalNameDef | null;
  setModal: (status: modalNameDef | null) => void;
}

export interface setCurrentModalDef {
  (currentModal: modalNameDef): void;
}
