import { atom, DefaultValue, selector } from "recoil";
import { Theme, _DisplayTheme } from "t/index";

const themes = {
  light: { label: "Claro" },
  dark: { label: "Oscuro" },
  system: { label: "Sistema" },
};

export const theme = atom<Theme>({
  key: "themeState",
  default: "light",
});
export const displayTheme = selector<_DisplayTheme>({
  key: "displayTheme",
  get: ({ get }) => {
    const current = get(theme);
    const entries = Object.entries(themes);
    let val = "";
    entries.forEach(([key, value]) => {
      if (key === current) {
        val = value.label;
      }
    });
    return { label: val };
  },
});
export const background = atom<{ color: string; img: string; filter?: string }>({
  key: "backgroundState",
  default: { color: "", img: "" },
});
/*

  effects: [
    ({ setSelf, onSet }) => {
const store = typeof window !== 'undefined'? localStorage : null

      const saved = store?.getItem("theme");
      if (saved !== null) {
        setSelf(saved as Theme);
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? store?.removeItem("theme")
          : store?.setItem("theme", newValue);
      });
    },
  ],
  */
