import { CamperProps } from "@/store/useCamperStore";
import css from "./FeaturesForm.module.css";

export default function Features({ camper }: CamperProps) {
  return (
    <div className={css.Globcontainer}>
      <div className={css.container}>
        <div className={css.badgesGrid}>
          <span className={css.badge}>
            <svg width={20} height={20}>
              <use href="/sprite.svg#icon-diagram"></use>
            </svg>
            {camper.transmission}
          </span>
          <span className={css.badge}>
            <svg width={20} height={20}>
              <use href="/sprite.svg#icon-fuel-pump"></use>
            </svg>
            {camper.engine}
          </span>

          {camper.AC && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              AC
            </span>
          )}
          {camper.bathroom && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-shower"></use>
              </svg>
              Bathroom
            </span>
          )}
          {camper.kitchen && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </span>
          )}
          {camper.TV && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              TV
            </span>
          )}
          {camper.radio && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-radio"></use>
              </svg>
              Radio
            </span>
          )}
          {camper.refrigerator && (
            <span className={css.badge}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-fridge"></use>
              </svg>
              Refrigerator
            </span>
          )}
          {camper.microwave && (
            <span className={css.badgeFill}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-microwave"></use>
              </svg>
              Microwave
            </span>
          )}
          {camper.gas && (
            <span className={css.badgeFill}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-gas"></use>
              </svg>
              Gas
            </span>
          )}
          {camper.water && (
            <span className={css.badgeFill}>
              <svg width={20} height={20}>
                <use href="/sprite.svg#icon-water"></use>
              </svg>
              Water
            </span>
          )}
        </div>

        <div className={css.detailsSection}>
          <h3 className={css.title}>Vehicle details</h3>
          <hr className={css.divider} />
          <ul className={css.detailsList}>
            <li className={css.detailItem}>
              <span>Form</span>
              <span className={css.value}>{camper.form}</span>
            </li>
            <li className={css.detailItem}>
              <span>Length</span>
              <span className={css.value}>{camper.length}</span>
            </li>
            <li className={css.detailItem}>
              <span>Width</span>
              <span className={css.value}>{camper.width}</span>
            </li>
            <li className={css.detailItem}>
              <span>Height</span>
              <span className={css.value}>{camper.height}</span>
            </li>
            <li className={css.detailItem}>
              <span>Tank</span>
              <span className={css.value}>{camper.tank}</span>
            </li>
            <li className={css.detailItem}>
              <span>Consumption</span>
              <span className={css.value}>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
