"use client";
import Image from "next/image";
import { CamperProps, useCampersStore } from "@/store/useCamperStore";
import css from "./CamperCard.module.css";
import Link from "next/link";

export default function CamperCard({ camper }: CamperProps) {
  const { toggleFavorite, favorites } = useCampersStore();
  const isFavorite = favorites.includes(camper.id);

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.camperHeader}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>
            <button
              className={`${css.favoriteBtn} ${isFavorite ? css.active : ""}`}
              onClick={() => toggleFavorite(camper.id)}
            >
              <svg width={24} height={24} className={css.heartIcon}>
                <use href="/sprite.svg#icon-love"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={css.stats}>
          <span className={css.rating}>
            <svg width={16} height={16} className={css.starIcon}>
              <use href="/sprite.svg#icon-star"></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span className={css.location}>
            <svg width={16} height={16} className={css.mapIcon}>
              <use href="/sprite.svg#icon-Map"></use>
            </svg>
            {camper.location}
          </span>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.categories}>
          <span className={css.badge}>
            <svg width={20} height={20} className={css.badgeIcon}>
              <use href="/sprite.svg#icon-diagram"></use>
            </svg>
            {camper.transmission}
          </span>

          <span className={css.badge}>
            <svg width={20} height={20} className={css.badgeIcon}>
              <use href="/sprite.svg#icon-fuel-pump"></use>
            </svg>
            {camper.engine}
          </span>
          {camper.kitchen && (
            <span className={css.badge}>
              <svg width={20} height={20} className={css.badgeIcon}>
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </span>
          )}
          {camper.AC && (
            <span className={css.badge}>
              <svg width={20} height={20} className={css.badgeIcon}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              AC
            </span>
          )}
          {camper.TV && (
            <span className={css.badge}>
              <svg width={20} height={20} className={css.badgeIcon}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              TV
            </span>
          )}
          {camper.bathroom && (
            <span className={css.badge}>
              <svg width={20} height={20} className={css.badgeIcon}>
                <use href="/sprite.svg#icon-shower"></use>
              </svg>
              bathroom
            </span>
          )}
        </div>
        <Link href={`/catalog/${camper.id}`}>
          <button type="button" className={css.showMoreBtn}>
            Show more
          </button>
        </Link>
      </div>
    </article>
  );
}
