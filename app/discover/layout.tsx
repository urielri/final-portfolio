import { Layout } from "types";
import { FC } from "react";
import { Main } from "utils/layout/";
import { GeneralContent } from "components/utils/menu";
const Layout: FC<Layout> = ({ children }) => {
  return <Main menu={<GeneralContent />}>{children}</Main>;
};

export default Layout;
