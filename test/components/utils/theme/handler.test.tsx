import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Theme from "../../../../components/utils/theme";
import { theme as themeAtom } from "../../../../state";
import Handler from "../../../../components/utils/theme/handler";
import {Observer} from '../theme/component.test'
describe("Handler theme component", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(
      <>
        <RecoilRoot>
          <Theme />
          <Handler />
        </RecoilRoot>
      </>
    );
  });
  it("change state on click", () => {
    const change = vi.fn()
    render(
      <>
        <RecoilRoot>

          <Observer fn={change} node={themeAtom}/>
          <Theme />
          <Handler />
        </RecoilRoot>
      </>
    );
    const c = screen.getByTestId("changeToSystem");
    fireEvent.click(c)
    expect(screen.getByTestId('display').innerText).toBe('Sistema')
  });
});
