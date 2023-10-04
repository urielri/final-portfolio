"use client";
import { FC, ReactNode, Suspense } from "react";
import { useRouter } from "next/navigation";
import s from "./s.module.css";
import { lora } from "components/fonts";
import { F } from "icons/objects";
import Cards from "./cards";
const Content: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.home}>
        <Background />
        <div className={s.content}>
          <Start />
          <Suspense>
            <Cards />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
const Start: FC = () => {
  const router = useRouter();
  const to = () => {
    router.push("/discover");
  };
  return (
    <div className={`${s.start} ${lora.className}`}>
      <div className={s.greeting}>
        <h1>
          Hola, <br /> Soy <strong>Uriel</strong>.
        </h1>
        <h4>
          Esta es una representación profesional, creativa y dinámica, espero te
          sientas a gusto.
        </h4>
        <button onClick={() => to()}>
          <span>Descubrir</span>
        </button>
      </div>
      <div className={s.copyleft}>
        <h5>Copyleft © 2022 Uriel Rivero.</h5>
      </div>
    </div>
  );
};

const Background: FC = () => {
  const sizes = [1100, 1920];

  return (
    <div className={s.b}>
      <div
        className={s.position}
        style={{ left: 700, top: 200, transform: "rotate(-26deg)" }}
      >
        <Object
          id="paint0_linear_712_1776"
          gradient={
            <>
              <linearGradient
                id="paint0_linear_712_1776"
                x1="799.797"
                y1="291.538"
                x2="246.349"
                y2="563.656"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FD8F8F" />
                <stop offset="0.197917" stopColor="#FD8F8F" />
                <stop offset="0.609375" stopColor="#E65B95" />
                <stop offset="1" stopColor="#D723DB" />
              </linearGradient>
            </>
          }
        />
      </div>
      <div className={s.position} style={{ bottom: 500, left: -60 }}>
        <Object
          id="paint0_linear_715_1779"
          gradient={
            <>
              <linearGradient
                id="paint0_linear_715_1779"
                x1="-9.83382e-09"
                y1="319.2"
                x2="885.044"
                y2="327.563"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF3CC8" />
                <stop offset="0.390625" stopColor="#A259FF" />
                <stop offset="0.677083" stopColor="#B48080" />
                <stop offset="1" stopColor="#FFB801" />
              </linearGradient>
            </>
          }
        />
      </div>
    </div>
  );
};

const Object: FC<{ gradient: ReactNode; id: string }> = ({ gradient, id }) => {
  return (
    <div className={s.o}>
      <div className={s.f}>
        <F id={id}> {gradient}</F>
      </div>
      <div className={s.f}>
        <F id={id}>{gradient}</F>
      </div>
    </div>
  );
};
export default Content;
