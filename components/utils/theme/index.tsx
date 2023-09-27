"use client";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { theme as themeAtom } from "state";
const Theme: FC = () => {
  const [t, setT] = useRecoilState(themeAtom);
  useEffect(() => {
    const doc = document.firstElementChild;
    doc?.setAttribute("color-scheme", t);
  }, [t]);
  return null;
};
export default Theme;
