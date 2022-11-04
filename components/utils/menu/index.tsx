"use client";
import { FC, useEffect, useState } from "react";
import s from "./s.module.css";
import { Logo } from "@/icons/interactive";
import { Case, Fire, Home, Star } from "@/icons/interactive/status";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
const Menu: FC = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const to = (route: string) => {
    router.push(route);
  };
  useEffect(() => {
    !loading && setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [pathname]);
  useEffect(() => {
    if (loading) {
      const a = gsap.to(
        "#logo",
        {
          duration: 1,
          ease: "elastic.inOut",
          repeat: -1,
          repeatDelay: 0.3,
          yoyo: true,
          rotate: 180,
        }
      );
      return () => {
        a.kill();
      };
    }
  }, [loading]);
  return (
    <div className={s.menu}>
      <div className={s.logo} id="logo">
        <Logo />
      </div>
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
    </div>
  );
};
const Option: FC<{
  label: string;
  action: Function;
  to: string;
  backfill?: 'stroke' | 'fill' | 'both';
  icon: Function;
}> = ({ label, icon, action, to, backfill = 'fill' }) => {
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
export default Menu;
