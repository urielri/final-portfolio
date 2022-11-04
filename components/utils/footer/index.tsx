"use client";

import { Github } from "@/icons/social";
import { FC} from "react";
import s from "./s.module.css";
import Theme from '../theme/handler'
const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.about}>
          <span>Sobre este proyecto.</span>
          <ul>
            <li>
              <Github />
            </li>
          </ul>
        </div>
        <Theme />
      </div>
    </footer>
  );
};

export default Footer;
