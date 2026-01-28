import Link from "next/link";
import css from "./Home.module.css";
export default function Home() {
  return (
    <div className={css.divContainer}>
      <div className={css.homeContainer}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeDescription}>
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog" className={css.homeButton}>
          View Now
        </Link>
      </div>
    </div>
  );
}
