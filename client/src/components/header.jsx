import React from "react";
import { Button } from "./button";
import { StyleSheet, css } from "aphrodite";
import { useTranslation } from "react-i18next";

export const Header = ({
  hasSettingsButton,
  title,
  hasSettingsButtonText,
  hasBuildButton,
  hasRebuildButton,
  onBuildButtonClick,
}) => {
  const { t } = useTranslation();

  return (
    <header className={css(s.root)}>
      <span className={css(s.title, title && s._repoTitle)} id="title">
        {title || t("School CI server")}
      </span>
      <span>
        {hasBuildButton && (
          <span className={css(s.buttonblockButton)}>
            <Button
              text={t("Run build")}
              size="secondary"
              type="control"
              iconType="play"
              onClick={onBuildButtonClick}
              id="runbuildButton"
            />
          </span>
        )}
        {hasRebuildButton && (
          <span className={css(s.buttonblockButton)}>
            <Button
              text={t("Rebuild")}
              size="secondary"
              type="control"
              iconType="rebuild"
              id="rebuildButton"
            />
          </span>
        )}

        {hasSettingsButton && (
          <Button
            text={hasSettingsButtonText && t("Settings")}
            size="secondary"
            type="control"
            link="settings"
            id="settingsButton"
          />
        )}
      </span>
    </header>
  );
};

const s = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "var(--indent-xxxs) var(--indent-l)",
    marginBottom: "var(--indent-xxxs)",
    height: 48,
  },

  title: {
    fontFamily: "YS Text",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "var(--font-size-l)",
    lineHeight: 28,
    color: "var(--color-text-gray)",
    wordBreak: "break-all",
  },

  titleMain: {
    color: "var(--color-text-base)",
  },

  buttonblock: {
    display: "flex",
  },

  buttonblockButton: {
    marginRight: "var(--indent-xxxs)",
  },

  _repoTitle: {
    color: "var(--color-text-base)",
  },

  // @media (max-width: 768px) {
  //   .header {
  //     padding: var(--indent-xxs) var(--indent-xs);
  //   }
  // }
});
