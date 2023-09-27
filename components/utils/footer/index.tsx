"use client";

import { Github } from "icons/social";
import { FC } from "react";
import s from "./s.module.css";
import Handler from 'utils/theme/handler'
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
          <Handler />
      </div>
    </footer>
  );
};

export default Footer;
