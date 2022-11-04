import gsap from "gsap";
import { useEffect } from "react";
import { CaseBroken, CaseFilled } from "./case";
import { FireBroken, FireFilled } from "./fire";
import { StarBroken, StarFilled } from "./star";
import { HomeFilled, HomeBroken } from "./home";
import s from "./s.module.css";
interface Props {
  view: "broken" | "filled";
}
const anim = (view: string, id: string) => {
  if (view !== "broken") {
    gsap.to(id, { duration: 0.1, opacity: 1 });
  } else {
    gsap.to(id, { duration: 0.1, opacity: 0 });
  }
};

export function Home(props: Props): JSX.Element {
  const { view } = props;
  useEffect(() => {
    anim(view, "#home");
  }, [view]);
  return (
    <>
      <div className={s.i}>
        <HomeBroken />
        <div className={s.filled} id='home'>
          <HomeFilled />
        </div>
      </div>
    </>
  );
}
export function Case(props: Props): JSX.Element {
  const { view } = props;
  useEffect(() => {
    anim(view, "#case");
  }, [view]);
  return (
    <>
      <div className={s.i}>
        <CaseBroken id="" />
        <div className={s.filled} id="case">
          <CaseFilled id="" />
        </div>
      </div>
    </>
  );
}
export function Star(props: Props): JSX.Element {
  const { view } = props;

  useEffect(() => {
    anim(view, "#star");
  }, [view]);
  return (
    <>
      <div className={s.i}>
        <StarBroken id="" />
        <div className={s.filled} id="star">
          <StarFilled id="" />
        </div>
      </div>
    </>
  );
}
export function Fire(props: Props): JSX.Element {
  const { view } = props;

  useEffect(() => {
    anim(view, "#fire");
  }, [view]);
  return (
    <>
      <div className={s.i}>
        <FireBroken id="" />
        <div className={s.filled} id="fire">
          <FireFilled id="" />
        </div>
      </div>
    </>
  );
}
