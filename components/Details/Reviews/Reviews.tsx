import css from "./Reviews.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {reviews.map((item, index) => (
          <li key={index} className={css.reviewItem}>
            <div className={css.header}>
              <div className={css.avatar}>
                {item.reviewer_name.charAt(0).toUpperCase()}
              </div>

              <div className={css.userMeta}>
                <p className={css.name}>{item.reviewer_name}</p>
                <div className={css.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width={16}
                      height={16}
                      className={
                        i < item.reviewer_rating
                          ? css.starActive
                          : css.starEmpty
                      }
                    >
                      <use href="/icons-sprite.svg#icon-star"></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className={css.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
