"use client";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import s from "./s.module.css";
import { Logo } from "icons/interactive";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type Props = { children?: ReactNode | ReactElement; };

export default ({ children = null }: Props) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    !loading && setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [pathname]);

  useEffect(() => {
    if (loading) {
      const a = gsap.to("#logo", {
        duration: 1,
        ease: "elastic.inOut",
        repeat: -1,
        repeatDelay: 0.3,
        yoyo: true,
        rotate: 180,
      });
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
      {children}
    </div>
  );
};
