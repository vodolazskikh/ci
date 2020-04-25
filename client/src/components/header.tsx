import React, { FC } from "react";
import { Button } from "./button";
import { StyleSheet, css } from "aphrodite";

interface OwnProps {
  title?: string;
  hasSettingsButtonText?: boolean;
  hasBuildButton?: boolean;
  hasRebuildButton?: boolean;
  hasSettingsButton?: boolean;
  onBuildButtonClick?: any;
}

export const Header: FC<OwnProps> = ({
  hasSettingsButton,
  title,
  hasSettingsButtonText,
  hasBuildButton,
  hasRebuildButton,
  onBuildButtonClick,
}) => {
  return (
    <header className={css(s.root)}>
      <span className={css(s.title, !!title && s._repoTitle)} id="title">
        {title || "School CI server"}
      </span>
      <span>
        {hasBuildButton && (
          <span className={css(s.buttonblockButton)}>
            <Button
              text="Run build"
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
              text="Rebuild"
              size="secondary"
              type="control"
              iconType="rebuild"
              id="rebuildButton"
            />
          </span>
        )}

        {hasSettingsButton && (
          <Button
            text={hasSettingsButtonText ? "Settings" : undefined}
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
