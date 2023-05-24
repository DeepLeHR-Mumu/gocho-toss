import { FunctionComponent } from "react";

import { TopBar } from "../topBar";
import { Footer } from "../footer";

import { GlobalLayoutProps } from "./type";

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => (
  <>
    <TopBar />
    {children}
    <Footer />
  </>
);
