import { describe, expect, it } from "vitest";
import { renderRecoilHook, act } from "react-recoil-hooks-testing-library";
import { theme as themeAtom, displayTheme as displayThemeAtom } from "st/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { _ReturnTheme } from "t/index";
export const useTheme = (): _ReturnTheme => {
  const theme = useRecoilValue(themeAtom);
  const display = useRecoilValue(displayThemeAtom);
  const set = useSetRecoilState(themeAtom);
  return { theme, set, display };
};


describe("Theme hook", () => {
  it("render hook", () => {
    const { result } = renderRecoilHook(useTheme);
    expect(result.current.theme).toBe("light");
  });
  it("should change state", () => {
    const { result } = renderRecoilHook(useTheme);
    act(() => {
      result.current.set("dark");
    });
    expect(result.current.theme).toBe("dark");
  });
  it("should return object display", () => {
    const { result } = renderRecoilHook(useTheme);
    expect(result.current.display.label).toBe("Oscuro");
  });
});
