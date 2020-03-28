import React from "react";
import { StyleSheet, css } from "aphrodite";
import commit from "../../assets/commit.svg";
import user from "../../assets/user.svg";
import calendar from "../../assets/calendar.svg";
import timer from "../../assets/timer.svg";

export const Card = () => {
  return (
    <div className={css(s.card)}>
      <div className={css(s.main)}>
        <div class="card__icon card__icon-done"></div>
        <div className={css(s.body)}>
          <span class="card__body__title">
            <span class="card__body__number-type_done">#1368</span>
            add documentation for postgres scaler
          </span>

          <div className={css(s.description)}>
            <span class="card__description__block">
              <img src={commit} className={css(s.commit)} alt="commit" />
              <span class="card__description__branch">master</span>
              <span class="card__description__hash">9c9f0b9</span>
            </span>
            <span class="card__description__block">
              <img src={user} className={css(s.user)} alt="user" />
              <span>Philip Kirkorov</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css(s.time)}>
        <div class="card__time__item">
          <img src={calendar} className={css(s.timeIcon)} alt="calendar" />
          <div>21 янв, 03:06</div>
        </div>
        <div class="card__time__item">
          <img src={timer} className={css(s.timeIcon)} alt="timer" />
          <div>1 ч 20 мин</div>
        </div>
      </div>
    </div>
  );
};

const s = StyleSheet.create({
  card: {
    boxShadow:
      "0px 1px 1px rgba(67, 68, 69, 0.3), 0px 0px 1px rgba(67, 68, 69, 0.3)",
    borderRadius: "var(--border-radius-oval)",
    padding: "var(--indent-xxs) var(--indent-m) 0 var(--indent-m)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    cursor: "pointer",
    marginBottom: "var(--indent-xxxs)",
    ":hover": {
      boxShadow:
        "0px 2px 8px rgba(67, 68, 69, 0.3), 0px 0px 1px rgba(67, 68, 69, 0.3)"
    }
  },
  main: {
    display: "flex",
    flexDirection: "row"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "var(--indent-xxxs)"
  },
  title: {
    marginBottom: "var(--indent-xxxs)",
    wordBreak: "break-all"
  },
  description: {
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",
    display: "flex",
    alignItems: "center",
    marginBottom: "var(--indent-xxxs)"
  },
  time: {
    display: "flex",
    flexDirection: "column",
    color: "var(--color-text-gray)"
  },
  commit: {
    width: 16,
    marginRight: "var(--indent-xxxs)"
  },
  user: {
    width: 14,
    height: 16,
    marginRight: "var(--indent-xxxs)"
  },
  timeIcon: {
    width: 16,
    height: 16,
    marginRight: "var(--indent-xxxs)"
  }
});
