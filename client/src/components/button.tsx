import React, { useMemo, FC } from "react";
import cog from "../assets/cog.svg";
import calendar from "../assets/calendar.svg";
import close from "../assets/close.svg";
import play from "../assets/play.svg";
import rebuild from "../assets/rebuild.svg";

import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

interface OwnProps {
  id?: string;
  text: string | undefined;
  type: string;
  size: string;
  link?: string;
  iconType?: string;
  buildId?: string;
  withoutIcon?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<OwnProps> = ({
  link,
  text,
  iconType,
  type,
  size,
  onClick,
  withoutIcon,
  buildId,
  isDisabled,
  id,
}) => {
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

  const typeClass = useMemo(() => {
    if (isDisabled) {
      return s._typeBase;
    }
    switch (type) {
      case "control":
        return s._typeControl;
      case "action":
        return s._typeAction;
      case "base":
        return s._typeBase;
      default:
        return s._typeBase;
    }
  }, [type, isDisabled]);

  const body = useMemo(() => {
    return (
      <button
        className={css(
          s.root,
          typeClass,
          size === "primary" ? s._sizePrimary : s._sizeSecondary
        )}
        id={id}
        disabled={!!isDisabled}
        onClick={onClick}
      >
        {!withoutIcon && (
          <img
            src={icon}
            className={css(s.icon, !!text && s.iconWithText)}
            alt="icon"
          />
        )}
        {!!text && <span>{text}</span>}
      </button>
    );
  }, [onClick, text, icon, size, withoutIcon, typeClass, isDisabled, id]);

  if (isDisabled) {
    return body;
  }

  if (!!link && !buildId) {
    return <Link to={`/${link}`}>{body}</Link>;
  }

  if (!!link && !!buildId) {
    return <Link to={`/${link}/${buildId}`}>{body}</Link>;
  }
  return body;
};

const s = StyleSheet.create({
  root: {
    borderRadius: "var(--border-radius-default)",
    fontSize: "var(--font-size-s)",
    display: "inline-block",
    alignItems: "center",
    border: "none",
    userSelect: "none",
    cursor: "pointer",
  },

  icon: {
    width: 12,
    height: 12,
  },

  iconWithText: {
    marginRight: "var(--indent-xxxs)",
  },

  _sizePrimary: {
    padding: "0 var(--indent-s)",
    lineHeight: "var(--line-height-l)",
  },

  _sizeSecondary: {
    padding: "0 var(--indent-xxxs)",
    lineHeight: "var(--line-height-m)",
  },

  _typeAction: {
    backgroundColor: "var(--color-button-action)",
    ":hover": {
      backgroundColor: "var(--color-button-action-hovered)",
    },
    ":active": {
      backgroundColor: "var(--color-button-action)",
    },
  },

  _typeBase: {
    backgroundColor: "#fff",
    boxShadow: "inset 0 0 0 2px var(--color-button-control)",
    ":hover": {
      backgroundColor: "var(--color-button-control)",
    },
  },

  _typeControl: {
    backgroundColor: "var(--color-button-control)",
    ":hover": {
      backgroundColor: "var(--color-button-control-hovered)",
    },
    ":active": {
      backgroundColor: "var(--color-button-control)",
    },
  },
});
