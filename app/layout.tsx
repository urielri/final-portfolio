import { FC } from "react";
//import { Open_Sans } from "@next/font/google";
import { Layout } from "@/interface/index";
import "@/styles/globals.css";
import Footer from '@/utils/footer'
import Context from "./context";
//const openSans = Open_Sans();
const Layout: FC<Layout> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Context>
          <div className="root">
            {children}
            <Footer/>
          </div>
        </Context>
      </body>
    </html>
  );
};
export default Layout;
