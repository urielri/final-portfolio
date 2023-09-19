"use client";
import { RecoilRoot } from "recoil";
import { FC, ReactNode } from "react";
const Context: FC<{ children: ReactNode }> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default Context;
