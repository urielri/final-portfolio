import { Layout } from "@/interface/index";
import { FC } from "react";
import s from "@/pages/discover/s.module.css";
import Menu from "@/components/utils/menu";
import Settings from "@/components/utils/settings";
const Layout: FC<Layout> = ({ children }) => {
  return (
    <div className={s.discover}>
     <div className={s.menu}>
       <Menu />
       <Settings/>
     </div>
      {children}
    </div>
  );
};

export default Layout;
