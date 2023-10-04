import { theme as themeAtom, displayTheme as displayThemeAtom } from "../state";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Theme, _DisplayTheme, _ReturnTheme } from "types/index";
import { useEffect, useReducer } from "react";

export const useTheme = (): _ReturnTheme => {
  const theme = useRecoilValue(themeAtom);
  const display = useRecoilValue(displayThemeAtom);
  const set = useSetRecoilState(themeAtom);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    console.log(saved);
    if (saved !== null) {
      theme !== saved && set(saved as Theme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, set, display };
};
// un hook que permite de forma optima y segura el control y estado de un formulario y sus respectivos inputs
// recibe como parametro, valor inicial, un callback opcional
// Retorna un setter del estado instanciado por el valor inicial, una funcion reset, que actualiza el estado a su valor inicial, y el estaod del formulario
// Recibe un valor arbitrario del tipo a ser implementado
type Form<T> = {
  values: Values<T>;
  set: (args: any) => void;
  reset: () => void;
};
enum Actions {
  SET = "SET",
  RESET = "RESET",
}
type Action<T> = {
  type: Actions;
  payload: Partial<Values<T>> | T;
};
function reducer<T>(state: Values<T>, action: Action<T>) {
  const { type, payload } = action;
  switch (type) {
    case Actions.SET:
      return { ...state, ...payload };
    case Actions.RESET:
      return { ...payload } as Values<T>;
    default:
      return state;
  }
}
/*
type _Set<T> = {
  [K in keyof T]: K;
};
*/
type Values<T = {}> = T & {
  submit: boolean;
};
export const useForm = <T>(
  values: T,
  callback?: Function,
  interceptor?: Function
): Form<T> => {
  const [state, dispatch] = useReducer(reducer<T>, {
    ...values,
    submit: false,
  });
  const set = (obj: Partial<Values<T>>): void => {
    // dispatch({ type: Actions.SET, payload: { ...obj } });
    interceptor
      ? dispatch({ type: Actions.SET, payload: interceptor(obj) })
      : dispatch({ type: Actions.SET, payload: { ...obj } });

    callback && callback(obj);
  };
  const reset = () => {
    dispatch({ type: Actions.RESET, payload: { ...values } });
  };
  return { values: state as Values<T>, set, reset };
};
