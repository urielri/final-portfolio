import { describe, expect, it } from "vitest";
import { renderRecoilHook, act } from "react-recoil-hooks-testing-library";
import { theme as themeAtom, displayTheme as displayThemeAtom } from "../../../state";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { _ReturnTheme } from "../../../types";
import { renderHook } from "@testing-library/react";
export const useTheme = (): _ReturnTheme => {
  const theme = useRecoilValue(themeAtom);
  const display = useRecoilValue(displayThemeAtom);
  const set = useSetRecoilState(themeAtom);
  return { theme, set, display };
};


describe("Theme hook", () => {
  it("render hook", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.theme).toBe("light");
  });
  it("should change state", () => {
   const { result } = renderHook(() => useTheme(), {
     wrapper: RecoilRoot,
   });
    act(() => {
      result.current.set("dark");
    });
    expect(result.current.theme).toBe("dark");
  });
  it("should return object display", () => {
  const { result } = renderHook(() => useTheme(), {
    wrapper: RecoilRoot,
  });
    expect(result.current.display.label).toBe("Claro");
  });
});
