"use client";
import { ReactElement, ReactNode } from "react";
import s from "./s.module.css";
import { Menu } from "utils/menu";
import Background from "components/utils/background";
type Props = {
  children?: ReactNode | ReactElement;
  menu?: ReactNode | ReactElement;
};
export default ({ children = null, menu = null }: Props) => {
  return (
    <>
      <div className={s.root}>
        <Background />
        <Menu>{menu}</Menu>
        {children}
      </div>
    </>
  );
};
