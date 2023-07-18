import { FunctionComponent } from "react";

import { useModal } from "@/globalStates";
import { LoginModal } from "../loginModal";
import { FactoryAddModal } from "../factoryAddModal";
import { FactoryEditModal } from "../factoryEditModal";
import { UsageTermModal } from "../usageTermModal";
import { PrivacyTermModal } from "../privacyTermModal";
import { CompanyAuthModal } from "../companyAuthModal";

export const ModalPlaceholder: FunctionComponent = () => {
  const { modal } = useModal();

  if (modal === "loginModal") {
    return <LoginModal />;
  }

  if (modal === "factoryAddModal") {
    return <FactoryAddModal />;
  }

  if (modal === "factoryEditModal") {
    return <FactoryEditModal />;
  }

  if (modal === "usageTermModal") {
    return <UsageTermModal />;
  }

  if (modal === "privacyTermModal") {
    return <PrivacyTermModal />;
  }

  if (modal === "companyAuthModal") {
    return <CompanyAuthModal />;
  }

  return null;
};
