import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import {
  RecoilRoot,
  RecoilState,
  snapshot_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { theme as themeAtom } from "../../../../state";
import { FC } from "react";
import { useEffect } from "react";
import { Theme as ThemeType } from "types/index";
import { Storage } from "jsdom";
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
  localStorage: new Storage(),
}));
interface Observer {
  node: RecoilState<any>;
  fn?: Function;
}
const Theme: FC = () => {
  const [t, setT] = useRecoilState(themeAtom);
  useEffect(()=> {
    const saved = localStorage.getItem('theme');

    if(saved && saved === ''){
      setT('light');
    }
  }, [])

  useEffect(()=> {
    const saved = localStorage.getItem('theme');
    if(saved !== t){
      localStorage.setItem('theme', t)
    }
  }, [t])
  return <div data-testid="themeValue">{t}</div>;
};
export const Observer: FC<Observer> = ({ node, fn = () => {} }) => {
  const state = useRecoilValue(node);
  useEffect(() => {
    fn(state);
  }, [state, fn]);
  return null;
};

const Setter: FC<{ value: string; node: RecoilState<any> }> = ({
  value,
  node,
}) => {
  const state = useRecoilValue(node);
  const set = useSetRecoilState(themeAtom);
  useEffect(() => {
    set(value as ThemeType);
  }, [value, state]);
  return null;
};
describe("Theme component", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(
      <>
        <RecoilRoot>
          <Theme />
        </RecoilRoot>
      </>
    );
  });
  it(" should render initial state", () => {
    render(
      <>
        <RecoilRoot>
          <Theme />
        </RecoilRoot>
      </>
    );
    const c = screen.getByTestId("themeValue");
    expect(c.innerText).toBe("light");
  });
  it("should render different state", () => {
    const onChange = vi.fn();

    render(
      <>
        <RecoilRoot>
          <Observer node={themeAtom} fn={onChange} />
          <Theme />
          <Setter value="system" node={themeAtom} />
        </RecoilRoot>
      </>
    );
    expect(onChange).toHaveBeenCalledWith("system");
  });
  it("should update the state if localStorage theme is not null", () => {
    const onChange = vi.fn();
    localStorage.setItem("theme", "system");
    render(
      <>
        <RecoilRoot>
          <Observer node={themeAtom} fn={onChange} />
          //<Setter value="system" node={themeAtom}/>
          <Theme />
        </RecoilRoot>
      </>
    );
    expect(onChange).toHaveBeenCalledWith("system");
  });
  it("should update  the localstorage theme if state change", () => {
    // Se emula el efecto del atomo con el componente LocalStorage, debido a que por la simulacion
    // del localStorage, solo vive en este ambito la declaracion.
    const onChange = vi.fn();
    render(
      <>
        <RecoilRoot>
          <Observer node={themeAtom} fn={onChange} />
          <Setter value="dark" node={themeAtom} />
          <Theme />
        </RecoilRoot>
      </>
    );

    const valueSaved = localStorage.getItem("theme");
    const c = screen.getByTestId("themeValue");
    expect(c.innerText).toBe(valueSaved);
  });
  it("should localstorage theme never equal to null", () => {
    const onChange = vi.fn();
    localStorage.setItem("theme", "");
    render(
      <>
        <RecoilRoot>
          <Observer node={themeAtom} fn={onChange} />
          <Theme />
        </RecoilRoot>
      </>
    );
    const valueSaved = localStorage.getItem("theme");
    expect(valueSaved).toBe('light')
  });
});
/*

  it("the state never should equal empty in localstorage", () => {
    //simulate localstorage
    const getItem = {theme: ''}
    render(
      <>
      <RecoilRoot>
      </RecoilRoot>
      </>
    )
    expect('light')
  })
  it('onChange state and set in localstorage', ()=> {

  })
  */

/*
      const snap = snapshot_UNSTABLE();

   
    expect(snap.getLoadable(themeAtom).valueOrThrow()).toBe("light");
    const newValue = snapshot_UNSTABLE(({ set }) => set(themeAtom, "dark"));
    expect(newValue.getLoadable(themeAtom).valueOrThrow()).toBe("dark");
    */
