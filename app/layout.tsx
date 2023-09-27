import { FC } from "react";
import { Oxygen } from "next/font/google";
import { Layout } from "types/index";
import "styles/globals.css";
import Context from "./context";
import Theme from "utils/theme";
const openSans = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });
const Layout: FC<Layout> = ({ children }) => {
  return (
    <html lang="es" className={openSans.className}>
      <body>
        <Context>
          <Theme />
          <div className="root">{children}</div>
        </Context>
      </body>
    </html>
  );
};
export default Layout;
