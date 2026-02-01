"use client";
import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking successful! We will contact you soon.");
    setStartDate(null);
    e.currentTarget.reset();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.header}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputsWrapper}>
          <input
            className={css.input}
            name="name"
            placeholder="Name*"
            required
          />
          <input
            className={css.input}
            name="email"
            type="email"
            placeholder="Email*"
            required
          />

          <DatePicker
            selected={startDate}
            onChange={(date: SetStateAction<Date | null>) => setStartDate(date)}
            placeholderText="Booking date*"
            className={css.input}
            dateFormat="dd.MM.yyyy"
            required
            minDate={new Date()}
          />

          <textarea
            className={css.textarea}
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
