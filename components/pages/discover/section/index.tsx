"use client";
import { useForm } from "#/hooks";
import { FC, useEffect } from "react";
let i = 0;
const spaces = [4, 8, 12];
const Content: FC = () => {
  const { values, set, reset } = useForm<{
    number: string;
    view: { number: "" };
  }>({ number: "", view: { number: "" } }, undefined, (e: any) => {
    //  console.log("event", e);
    console.log("lengt", e.number?.length);
    console.log("i", i, "arr", spaces[i]);
    let r: string = `${values.view.number}${e.number[e.number.length - 1]}`;
    if (e.number?.length === spaces[i]) {
      //  let r: string = e.number;
      console.log("si entro");
      r = `${r} `;

      //   set({ view: { number: r } });
      i++;
      return { ...e, view: { number: r } };
    } else {
      if (e.number?.length === 0 && values.view.number !== "") {
        i = 0;

        return { ...e, view: { number: "" } };
      }
      return { ...e, view: { number: r } };
    }
  });
  useEffect(() => {
    console.log({ pure: values.number, view: values.view.number });
  }, [values]);
  return (
    <div>
      <h1>Test custom useForm</h1>
      <input
        type="text"
        onChange={(e) => set({ number: e.target.value })}
      />{" "}
      <br />
      <h2>State</h2>
      <div>
        <span>number: {values.number}</span> <br />
        <span>view: {values.view.number}</span> <br />
        <button onClick={() => set({ submit: !values.submit })}>
          {values.submit ? "true" : "false"}
        </button>{" "}
      </div>
    </div>
  );
};
export default Content;
