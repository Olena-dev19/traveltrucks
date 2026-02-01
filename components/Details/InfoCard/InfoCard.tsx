import Image from "next/image";
import css from "./InfoCard.module.css";

interface InfoCardProps {
  camper: {
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    gallery: { thumb: string; original: string }[];
    reviews: unknown[];
  };
}

export default function InfoCard({ camper }: InfoCardProps) {
  return (
    <div className={css.container}>
      <h2 className={css.name}>{camper.name}</h2>

      <div className={css.stats}>
        <div className={css.ratingWrapper}>
          <svg width={16} height={16} className={css.starIcon}>
            <use href="/icons-sprite.svg#icon-star"></use>
          </svg>
          <span className={css.ratingText}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>
        </div>
        <div className={css.locationWrapper}>
          <svg width={16} height={16} className={css.mapIcon}>
            <use href="/icons-sprite.svg#icon-Map"></use>
          </svg>
          <span>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price.toFixed(2)}</p>

      <div className={css.gallery}>
        {camper.gallery.map((img, index) => (
          <div key={index} className={css.imageWrapper}>
            <Image
              src={img.original}
              alt={`${camper.name} view ${index + 1}`}
              fill
              className={css.image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>
    </div>
  );
}
