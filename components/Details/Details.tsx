"use client";
import { useState, useEffect } from "react";
import { useCampersStore } from "@/store/useCamperStore";
import InfoCard from "./InfoCard/InfoCard";
import DetailsTabs from "./DetailsTab/DetailsTab";
import Features from "./FeaturesForm/FeaturesForm";
import Reviews from "./Reviews/Reviews";
import BookingForm from "./BookingForm/BookingForm";
import css from "./Details.module.css";

export default function Details() {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features",
  );
  const { currentCamper, isLoading } = useCampersStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <div className={css.loader}></div>;
  if (!currentCamper) return <div className={css.error}>Camper not found</div>;

  return (
    <section className={css.details}>
      <div className="container">
        <InfoCard camper={currentCamper} />

        <DetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className={css.contentWrapper}>
          <div className={css.tabContent}>
            {activeTab === "features" ? (
              <Features camper={currentCamper} />
            ) : (
              <Reviews reviews={currentCamper.reviews} />
            )}
          </div>

          <div className={css.formWrapper}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
