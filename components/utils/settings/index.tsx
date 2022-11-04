"use client";
import { Arrow, Settings as SettingsIcon } from "@/icons/interactive";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from "./s.module.css";
const Settings: FC = () => {
  const [open, setOpen] = useState(false);
  const ref: any = useRef(null);
  const q = gsap.utils.selector(ref);
  const openMenu = () => {
    setOpen((open) => !open);
  };
  useEffect(() => {
    if (open) {
      const a = gsap
        .timeline()
        .to(ref.current, { duration: 0.2, minHeight: ref.current?.clientHeight + 2 * 48 })
        .to(q("#list"), { duration: 0.2, opacity: 1, display: "flex" });
      return () => {
        a.kill();
      };
    } else {
      const a = gsap
        .timeline()
        .to(q("#list"), { duration: 0.2, opacity: 0, display: "none" })
        .to(ref.current, { duration: 0.2, minHeight: 48 });

      return () => {
        a.kill();
      };
    }
  }, [open]);
  return (
    <div className={s.settings} ref={ref}>
      <div className={s.title} onClick={() => openMenu()}>
        <span>
          <SettingsIcon /> Ajustes
        </span>
        <div className={s.arrow}>
          <Arrow rotate={0} size={14} />
        </div>
      </div>
      <div className={s.list} id="list">
        <ul>
          <Option>Fuente</Option>
          <Option>Color</Option>
        </ul>
      </div>
    </div>
  );
};
const Option: FC<{ children: ReactNode }> = ({ children }) => {
  return <li>{children}</li>;
};
export default Settings;
