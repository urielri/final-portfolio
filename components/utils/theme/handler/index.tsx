import { FC, useRef, useEffect, useState } from "react";
import s from "./s.module.css";
import gsap from "gsap";
import { Contrast, Moon, Sun } from "@/icons/interactive";
const Theme: FC = () => {
  const [open, setOpen] = useState(false);
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
  const action = () => {
    !open && setOpen(true);
  };
  return (
    <div className={s.t} ref={ref}>
      {open && <div className={s.empty} onClick={() => setOpen(false)}></div>}
      <div className={s.theme} onClick={() => action()}>
        <div className={s.selected}>
          <span className={s.value}>Claro</span>
          <Sun/>
        </div>
        <div className={s.options} id="options">
          <ul id="list">
            <li>
              <span>Sistema</span> <Contrast />
            </li>
            <li>
              <span>Oscuro</span> <Moon />
            </li>
            <li>
              <span>Claro</span> <Sun />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Theme