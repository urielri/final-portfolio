"use client";
import { FC, useRef, useEffect, useState } from "react";
import s from "./s.module.css";
import gsap from "gsap";
import { Contrast, Moon, Sun } from "icons/interactive";
import { useTheme } from "hooks";
import { Theme } from "t/index";
const Handler: FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const ref: any = useRef(null);
  const q = gsap.utils.selector(ref);
  useEffect(() => {
    const heightList = ref.current?.clientHeight + 84;
    if (open) {
      const a = gsap
        .timeline()
        .to(q("#options"), {
          duration: 0.2,
          height: heightList,
          top: -heightList + 12,
        })
        .to(q("#list"), { duration: 0.1, opacity: 1, display: "flex" });
    } else {
      const a = gsap
        .timeline()
        .to(q("#list"), { duration: 0.1, display: "none", opacity: 0 })
        .to(q("#options"), { duration: 0.2, height: 0, top: 0 });
    }
  }, [open]);
  const openList = () => {
    !open && setOpen(true);
  };
  const action = (val: Theme) => {
    theme.set(val);
  };
  return (
    <div className={s.t} ref={ref}>
      {open && <div className={s.empty} onClick={() => setOpen(false)}></div>}
      <div className={s.theme} onClick={() => openList()}>
        <div className={s.selected}>
          <span className={s.value} data-testid="display">
            {theme.display.label}
          </span>
          {getIcon(theme.theme)}
        </div>
        <div className={s.options} id="options">
          <ul id="list">
            <li onClick={() => action("system")} data-testid="changeToSystem">
              <span>Sistema</span> <Contrast />
            </li>
            <li onClick={() => action("dark")}>
              <span>Oscuro</span> <Moon />
            </li>
            <li onClick={() => action("light")}>
              <span>Claro</span> <Sun />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
function getIcon(v: Theme) {
  switch (v) {
    case "light":
      return <Sun />;
      break;
    case "dark":
      return <Moon />;
      break;
    case "system":
      return <Contrast />;
      break;
    default:
      return <Sun />;
  }
}
export default Handler;
