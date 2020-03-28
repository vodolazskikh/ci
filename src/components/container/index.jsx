import React from "react";
import { StyleSheet, css } from "aphrodite";

export const Container = ({ children, screen }) => {
  return (
    <article className={css(s.root, screen === "start" && s._start)}>
      {children}
    </article>
  );
};

const s = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "var(--indent-xxxs) var(--indent-l)",
    height: "100%"
  },

  _start: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  //   @media (max-width: 768px) {
  //     .container {
  //       padding: var(--indent-xxs) var(--indent-xs);
  //     }
  //   }
});
