import css from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className={css.headerSection}>
      <div className={css.headerContent}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
