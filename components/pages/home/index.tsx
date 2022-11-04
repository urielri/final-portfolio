"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import s from "./s.module.css";
const Content: FC = () => {
  const router = useRouter();
  const to = () => {
    router.push("/discover");
  };
  return (
    <div className={s.home}>
      <h1>Bienvenido a mi portfolio!</h1>
      <p>
        La app demuestra mis conocimientos y parte de mi esencia. Busco
        representarme como persona y profesional.
      </p>
      <button onClick={() => to()}>
        <span>Descubrir</span>
      </button>
    </div>
  );
};
export default Content;
