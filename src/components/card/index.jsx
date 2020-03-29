import React, { useMemo } from "react";
import { StyleSheet, css } from "aphrodite";
import commit from "../../assets/commit.svg";
import user from "../../assets/user.svg";
import calendar from "../../assets/calendar.svg";
import timer from "../../assets/timer.svg";
import inprogress from "../../assets/inprogress.svg";
import done from "../../assets/done.svg";
import close from "../../assets/close.svg";

export const Card = ({ status = "done", author, id, title, branch, hash }) => {
  const statusIcon = useMemo(() => {
    switch (status) {
      case "done":
        return done;
      case "close":
        return close;
      case "inprogress":
        return inprogress;
      default:
        return done;
    }
  }, [status]);

  const statusClass = useMemo(() => {
    switch (status) {
      case "done":
        return s._done;
      case "close":
        return s._close;
      case "inprogress":
        return s._inprogress;
      default:
        return s._done;
    }
  }, [status]);

  return (
    <div className={css(s.card)}>
      <div className={css(s.main)}>
        <img src={statusIcon} className={css(s.icon)} alt={status} />
        <div className={css(s.body)}>
          <span>
            <span className={css(statusClass, s.number)}>#{id}</span>
            {title}
          </span>

          <div className={css(s.description)}>
            <span className={css(s.block)}>
              <img src={commit} className={css(s.commit)} alt="commit" />
              <span className={css(s.branch)}>{branch}</span>
              <span className={css(s.hash)}>{hash}</span>
            </span>
            <span className={css(s.block)}>
              <img src={user} className={css(s.user)} alt="user" />
              <span>{author}</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css(s.time)}>
        <div className={css(s.times)}>
          <img src={calendar} className={css(s.timeIcon)} alt="calendar" />
          <div>21 янв, 03:06</div>
        </div>
        <div className={css(s.times)}>
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
  },
  icon: {
    width: 24,
    height: 24,
    display: "inline-flex",
    marginRight: "var(--indent-xxxs)"
  },
  block: {
    display: "flex",
    alignItems: "center"
  },
  number: {
    fontWeight: 500,
    fontSize: "var(--font-size-m)",
    lineHeight: "var(--line-height-xs)",
    marginRight: "var(--indent-xxxs)"
  },
  _done: {
    color: "var(--color-icon-done)"
  },
  _close: {
    color: "var(--color-icon-close)"
  },
  _inprogress: {
    color: "var(--color-icon-progress)"
  },
  branch: {
    marginRight: "var(--indent-xxxs)"
  },
  hash: {
    color: "var(--color-text-gray)",
    marginRight: "var(--indent-xxxs)"
  },
  times: {
    display: "flex",
    alignItems: "center",
    marginBottom: "var(--indent-xxs)",
    marginRight: "var(--indent-xxxs)"
  }
});
