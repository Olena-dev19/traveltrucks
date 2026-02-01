"use client";
import Link from "next/link";
import css from "./Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={css.navContent}>
      <ul className={css.navList}>
        <li>
          <Link
            href="/"
            className={`${css.navLinks} ${pathname === "/" ? css.active : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={`${css.navLinks} ${
              pathname === "/catalog" ? css.active : ""
            }`}
          >
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
