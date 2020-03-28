import React, { useMemo } from "react";
import cog from "../../assets/cog.svg";
import calendar from "../../assets/calendar.svg";
import close from "../../assets/close.svg";
import play from "../../assets/play.svg";
import rebuild from "../../assets/rebuild.svg";

import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

export const Button = ({ link, text, iconType, type, size }) => {
  const icon = useMemo(() => {
    switch (iconType) {
      case "cog":
        return cog;
      case "calendar":
        return calendar;
      case "close":
        return close;
      case "play":
        return play;
      case "rebuild":
        return rebuild;
      default:
        return cog;
    }
  }, [iconType]);

  return (
    <button
      className={css(
        s.root,
        type === "control" ? s._typeControl : s._typeAction,
        size === "primary" ? s._sizePrimary : s._sizeSecondary
      )}
    >
      <img
        src={icon}
        className={css(s.icon, !!text && s.iconWithText)}
        alt="icon"
      />
      {!!text && <span>{<Link to={`/${link}`}>{text}</Link>}</span>}
    </button>
  );
};

const s = StyleSheet.create({
  root: {
    borderRadius: "var(--border-radius-default)",
    fontSize: "var(--font-size-s)",
    display: "inline-block",
    alignItems: "center",
    border: "none",
    userSelect: "none",
    cursor: "pointer"
  },

  icon: {
    width: 12,
    height: 12
  },

  iconWithText: {
    marginRight: "var(--indent-xxxs)"
  },

  _sizePrimary: {
    padding: "0 var(--indent-s)",
    lineHeight: "var(--line-height-l)"
  },

  _sizeSecondary: {
    padding: "0 var(--indent-xxxs)",
    lineHeight: "var(--line-height-m)"
  },

  _typeAction: {
    backgroundColor: "var(--color-button-action)",
    ":hover": {
      backgroundColor: "var(--color-button-action-hovered)"
    },
    ":active": {
      backgroundColor: "var(--color-button-action)"
    }
  },

  _typeControl: {
    backgroundColor: "var(--color-button-control)",
    ":hover": {
      backgroundColor: "var(--color-button-control-hovered)"
    },
    ":active": {
      backgroundColor: "var(--color-button-control)"
    }
  }
});
