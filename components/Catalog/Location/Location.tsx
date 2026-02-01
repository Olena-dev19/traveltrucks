"use client";
import { useFiltersStore } from "@/store/useFitersStore";
import css from "./Location.module.css";

export default function Location() {
  const { location, setLocation } = useFiltersStore();

  return (
    <div className={css.locationContainer}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="City, Country"
          className={css.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <svg width={20} height={20} className={css.iconLocation}>
          <use href="/icons-sprite.svg#icon-Map"></use>
        </svg>
      </div>
    </div>
  );
}
