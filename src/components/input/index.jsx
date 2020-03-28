import React from "react";
import { css, StyleSheet } from "aphrodite";

export const Input = ({ title, placeholder, isRequired, size }) => {
  return (
    <>
      <label for={title} className={css(s.label)}>
        {title}
        {isRequired && <span className={css(s.requiredText)}>*</span>}
      </label>
      <input
        type="search"
        placeholder={placeholder}
        id={title}
        className={css(s.input, size === "small" ? s._smallSize : s._bigSize)}
      />
    </>
  );
};

const s = StyleSheet.create({
  label: {
    marginBottom: "var(--indent-xxxs)"
  },
  requiredText: {
    color: "var(--color-text-danger)"
  },
  input: {
    marginBottom: "var(--indent-s)",
    padding: "var(--indent-xxxs) var(--indent-xxs)",
    borderRadius: "var(--border-radius-default)",
    border: "2px solid var(--color-border-base)",
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",

    ":focus": {
      border: "2px solid var(--color-border-active)"
    }
  },
  _bigSize: {
    maxWidth: 474
  },

  _smallSize: {
    width: 24,
    margin: "0px var(--indent-xxxs)",
    marginBottom: "var(--indent-m)"
  }
});
