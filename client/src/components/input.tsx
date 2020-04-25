import React, { FC } from "react";
import { css, StyleSheet } from "aphrodite";

interface OwnProps {
  title?: string;
  placeholder: string;
  isRequired?: boolean;
  size?: string;
  stretched?: boolean;
  onChange: (e: any) => void;
  initialValue?: string | number;
}

export const Input: FC<OwnProps> = ({
  title,
  placeholder,
  isRequired,
  size,
  stretched,
  onChange,
  initialValue,
}) => {
  return (
    <>
      <label htmlFor={title} className={css(s.label)}>
        {title}
        {isRequired && <span className={css(s.requiredText)}>*</span>}
      </label>
      <input
        type={size === "small" ? "number" : "search"}
        defaultValue={initialValue}
        onChange={onChange}
        placeholder={placeholder}
        id={title}
        className={css(
          s.input,
          stretched && s._stretched,
          size === "small" ? s._smallSize : s._bigSize
        )}
      />
    </>
  );
};

const s = StyleSheet.create({
  label: {
    marginBottom: "var(--indent-xxxs)",
  },
  requiredText: {
    color: "var(--color-text-danger)",
  },
  input: {
    marginBottom: "var(--indent-s)",
    padding: "var(--indent-xxxs) var(--indent-xxs)",
    borderRadius: "var(--border-radius-default)",
    border: "2px solid var(--color-border-base)",
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",

    ":focus": {
      border: "2px solid var(--color-border-active)",
    },
  },
  _bigSize: {
    maxWidth: 474,
  },

  _smallSize: {
    width: 42,
    margin: "0px var(--indent-xxxs)",
    marginBottom: "var(--indent-m)",
  },

  _stretched: {
    width: "100%",
  },
});
