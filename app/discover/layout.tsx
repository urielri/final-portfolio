import { Layout } from "types/index";
import { FC } from "react";
import s from "pages/discover/s.module.css";
import Menu from "utils/menu";
import Settings from "utils/settings";
import Background from "utils/background";
const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Background/>
      <div className={s.discover}>
        <div className={s.menu}>
          <Menu />
          <Settings />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
