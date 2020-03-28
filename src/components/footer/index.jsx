import React from "react";
import { StyleSheet, css } from "aphrodite";

export const Footer = () => {
  return (
    <footer className={css(s.footer)}>
      <span>
        <span className={css(s.text, s.link)}>Support</span>
        <span className={css(s.text, s.link)}>Learning</span>
      </span>
      <span className={css(s.text)}>© 2020 Your Name</span>
    </footer>
  );
};

const s = StyleSheet.create({
  footer: {
    backgroundColor: "var(--color-background-gray)",
    padding: "var(--indent-xxxs) var(--indent-l)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    userSelect: "none"
  },

  text: {
    fontSize: "var(--font-size-s)",
    lineHeight: "var(--line-height-xxs)",
    color: "var(--color-text-gray)"
  },

  link: {
    ":first-child": {
      marginRight: "var(--indent-xxs)"
    },
    ":hover": {
      cursor: "pointer",
      color: "var(--color-background-accent)"
    }
  }

  // @media (max-width: 768px) {
  //   .footer {
  //     padding: var(--indent-xxs) var(--indent-xs);
  //     align-items: flex-start;
  //     flex-direction: column;
  //   }
  // }
});
