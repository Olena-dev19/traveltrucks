"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCampersStore } from "@/store/useCamperStore";
import css from "./Page.module.css";
import Detalis from "@/components/Details/Details";

export default function Page() {
  const { id } = useParams();
  const { currentCamper, fetchCamperById, isLoading } = useCampersStore();

  useEffect(() => {
    if (id) {
      fetchCamperById(id as string);
    }
  }, [id, fetchCamperById]);

  if (isLoading)
    return <div className={css.loader}>Loading camper details...</div>;
  if (!currentCamper) return <div className={css.error}>Camper not found</div>;

  return (
    <section className={css.detailsSection}>
      <div className="container">
        <Detalis />
      </div>
    </section>
  );
}
