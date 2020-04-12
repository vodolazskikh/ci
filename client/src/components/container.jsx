import React from "react";
import { StyleSheet, css } from "aphrodite";

export const Container = ({ children, screen, id }) => {
  return (
    <article
      className={css(s.root, screen === "start" && s._start)}
      id={id || "mainContainer"}
    >
      {children}
    </article>
  );
};

const s = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "var(--indent-xxxs) var(--indent-l)",
    height: "100%",
    overflowY: "scroll",
  },

  _start: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  //   @media (max-width: 768px) {
  //     .container {
  //       padding: var(--indent-xxs) var(--indent-xs);
  //     }
  //   }
});
