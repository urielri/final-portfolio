import { Layout as Props } from "types";
import { default as Main } from "utils/layout/main/component";
function Layout({ children }: Props) {
  return <Main menu={<div style={{height: '100%'}}></div>}>{children}</Main>;
}

export default Layout