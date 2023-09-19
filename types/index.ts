import { ReactElement, ReactNode } from "react";
import { SetterOrUpdater } from "recoil";

export type Layout = {
  children: ReactNode;
};
export type Theme = "light" | "dark" | "system";
export interface _DisplayTheme {
  label: string;
  icon?: JSX.Element | null | ReactElement
}

export interface _ReturnTheme {
  theme: Theme;
  set: SetterOrUpdater<Theme>;
  display: _DisplayTheme;
}