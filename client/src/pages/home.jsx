import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { Container } from "../components/container";
import tools from "../assets/tools.svg";
import { css, StyleSheet } from "aphrodite";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header hasSettingsButton hasSettingsButtonText />
      <Container screen="start" id="mainPage">
        <img src={tools} className={css(s.tools)} alt="tools" />
        <pre className={css(s.text)}>
          {t(
            "Configure repository connection \r\n and synchronization settings"
          )}
          <br />
        </pre>
        <Button
          text={t("Open Settings")}
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
