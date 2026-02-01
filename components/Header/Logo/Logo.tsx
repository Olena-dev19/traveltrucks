"use client";
import Link from "next/link";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoCont}>
      <Link href="/" aria-label="Home" className={css.logoLink}>
        <svg width="136" height="15">
          <use href="/sprite.svg#icon-logo" />
        </svg>
      </Link>
    </div>
  );
};
export default Logo;
