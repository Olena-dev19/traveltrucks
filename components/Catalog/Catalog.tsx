"use client";
import { useEffect } from "react";
import { useCampersStore } from "@/store/useCamperStore";
import CamperCard from "@/components/Catalog/CamperCard/CamperCard";
import Filters from "@/components/Catalog/Filter/Filters";
import Location from "@/components/Catalog/Location/Location";
import css from "./Catalog.module.css";

export default function Catalog() {
  const { items, isLoading, fetchCampers, hasMore } = useCampersStore();

  useEffect(() => {
    fetchCampers(false);
  }, []);

  const handleLoadMore = () => {
    fetchCampers(true);
  };

  return (
    <section className={css.catalog}>
      <aside className={css.sidebar}>
        <Location />
        <Filters />
      </aside>

      <div className={css.listContainer}>
        {items.length > 0 && (
          <div className={css.cardsGrid}>
            {items.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
        )}

        {isLoading && <div className={css.loader}></div>}

        {!isLoading && items.length === 0 && (
          <div className={css.noResults}>
            <p>No campers found matching your filters.</p>
          </div>
        )}

        {!isLoading && hasMore && items.length > 0 && (
          <button
            type="button"
            className={css.loadMoreBtn}
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
}
