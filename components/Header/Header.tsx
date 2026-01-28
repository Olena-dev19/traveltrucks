import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.headerSection}>
      <Link href="/" aria-label="Travel Trucks Home">
        <svg width="136" height="15">
          <use href="/sprite.svg#icon-logo" />
        </svg>
      </Link>
      <div className={css.navLinks}>
        <Link href="/" aria-label="Travel Trucks Home">
          Home
        </Link>
        <Link href="/catalog" aria-label="Travel Trucks Catalog">
          Catalog
        </Link>
      </div>
    </header>
  );
}
