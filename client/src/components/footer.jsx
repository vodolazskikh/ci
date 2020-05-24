import React from "react";
import { StyleSheet, css } from "aphrodite";
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const currentLang = i18n.language;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <footer className={css(s.footer)}>
      <span>
        <span className={css(s.text, s.link)}>{t("Support")}</span>
        <span className={css(s.text, s.link)}>{t("Learning")}</span>
        <span
          className={css(s.text, s.link)}
          onClick={() => changeLanguage(currentLang === "en" ? "ru" : "en")}
        >
          {currentLang === "en" ? "Русская версия" : "English Language"}
        </span>
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
    userSelect: "none",
  },

  text: {
    fontSize: "var(--font-size-s)",
    lineHeight: "var(--line-height-xxs)",
    color: "var(--color-text-gray)",
  },

  link: {
    marginRight: "var(--indent-xxs)",
    ":hover": {
      cursor: "pointer",
      color: "var(--color-background-accent)",
    },
  },

  // @media (max-width: 768px) {
  //   .footer {
  //     padding: var(--indent-xxs) var(--indent-xs);
  //     align-items: flex-start;
  //     flex-direction: column;
  //   }
  // }
});
