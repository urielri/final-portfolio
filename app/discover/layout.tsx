import { Layout } from "t/index";
import { FC } from "react";
import s from "p/discover/s.module.css";
import Menu from "u/menu";
import Settings from "u/settings";
import Background from "u/background";
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
