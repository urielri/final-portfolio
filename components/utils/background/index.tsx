"use client";
import Image from "next/image";
import { FC } from "react";
import s from "./s.module.css";
import { useRecoilValue } from "recoil";
import { background as backgroundAtom } from "st/index";
const Background: FC = () => {
  const { color, img, filter } = useRecoilValue(backgroundAtom);
  return (
    <>
      <div className={s.background} style={{ backgroundColor: color }}>
        {img && (
          <div className={s.picture}>
            <Image src={img} alt={"test"} />
          </div>
        )}
        {filter && <div className={s.filter} style={{ filter }}></div>}
      </div>
    </>
  );
};
export default Background;
