"use client";
import s from "./s.module.css";
import { Case, Fire, Home, Star } from "icons/interactive/status";
import { useRouter, usePathname } from "next/navigation";
import { FC } from "react";

export default () => {
  const router = useRouter();

  const to = (route: string) => {
    router.push(route);
  };
  
  return (
    <div className={s.list}>
      <ul>
        <Option
          label="Inicio"
          to="/discover"
          backfill="both"
          action={(e: string) => to(e)}
          icon={(e: "broken" | "filled") => <Home view={e} />}
        />
        <Option
          label="Experiencia"
          to="/discover/projects"
          action={(e: string) => to(e)}
          icon={(e: "broken" | "filled") => <Case view={e} />}
        />
        <Option
          label="Ideas"
          to="/discover/ideas"
          backfill="both"
          action={(e: string) => to(e)}
          icon={(e: "broken" | "filled") => <Star view={e} />}
        />
        <Option
          label="Sobre mi"
          to="/discover/aboutme"
          action={(e: string) => to(e)}
          icon={(e: "broken" | "filled") => <Fire view={e} />}
        />
      </ul>
    </div>
  );
};
const Option: FC<{
  label: string;
  action: Function;
  to: string;
  backfill?: "stroke" | "fill" | "both";
  icon: Function;
}> = ({ label, icon, action, to, backfill = "fill" }) => {
  const pathname = usePathname();
  const active = to === pathname ? true : false;
  const i: JSX.Element = icon(active ? "filled" : "broken");
  const act = () => {
    !active && action(to);
  };
  return (
    <li className={`${active && s.active}`} onClick={() => act()}>
      <div className={`${s.icon} ${active && s[backfill]}`}>{i}</div>
      <span>{label}</span>
    </li>
  );
};
