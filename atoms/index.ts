import { atom, selector } from "recoil";
function getDisplay(t: Theme): DisplayTheme {
  const themes = {
    light: { label: "Claro" },
    dark: { label: "Oscuro" },
    system: { label: "Sistema" },
  };
  const entries = Object.entries(themes);
  entries.forEach(([key, value]) => {
    if (key === t) {
      return value;
    }
  });
  return {
    label: t,
  };
}
type Theme = "light" | "dark" | "system";
interface DisplayTheme {
  label: Theme;
}
export const theme = atom<Theme>({
  key: "themeState",
  default: "light",
});
export const displayTheme = selector<DisplayTheme>({
  key: "displayTheme",
  get: ({ get }) => {
    const current = get(theme);
    return getDisplay(current);
  },
});
