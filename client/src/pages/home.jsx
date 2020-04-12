import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { Container } from "../components/container";
import tools from "../assets/tools.svg";
import { css, StyleSheet } from "aphrodite";

export const Home = () => {
  return (
    <>
      <Header hasSettingsButton hasSettingsButtonText />
      <Container screen="start" id="mainPage">
        <img src={tools} className={css(s.tools)} alt="tools" />
        <p className={css(s.text)}>
          Configure repository connection
          <br />
          and synchronization settings
        </p>
        <Button
          text="Open settings"
          type="action"
          size="primary"
          link="settings"
        />
      </Container>
      <Footer />
    </>
  );
};

const s = StyleSheet.create({
  tools: {
    width: 124,
    height: 124,
    marginBottom: "var(--indent-xxxs)",
  },
  text: {
    textAlign: "center",
    fontSize: "var(--font-size-s)",
    marginBottom: "var(--indent-m)",
  },
});
