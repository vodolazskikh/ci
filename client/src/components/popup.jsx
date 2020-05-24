import React, { useCallback, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { Input } from "./input";
import { Button } from "./button";
import { useTranslation } from "react-i18next";

export const Popup = ({ onCloseClick }) => {
  const { t } = useTranslation();
  const [buildId, setBuildId] = useState("");
  const handleInputChange = useCallback((e) => {
    const value = e.currentTarget.value;
    setBuildId(value);
  }, []);
  return (
    <div className={css(s.root)}>
      <div className={css(s.popup)} id="newBuildPopup">
        <div className={css(s.title)}>New build</div>
        <div className={css(s.description)}>
          {t("Enter the commit hash which you want to build")}
        </div>
        <Input
          placeholder="Commit hash"
          stretched
          onChange={handleInputChange}
        />
        <div>
          <div className={css(s.firstButton)}>
            <Button
              text={t("Run build")}
              withoutIcon
              size="primary"
              type="action"
              link="build"
              buildId={buildId}
            />
          </div>
          <Button
            text={t("Cancel")}
            withoutIcon
            size="primary"
            type="base"
            onClick={onCloseClick}
          />
        </div>
      </div>
    </div>
  );
};

const s = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    background: "rgba(0,0,0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: "var(--border-radius-default)",
    padding: "var(--indent-m) var(--indent-xs)",
    maxWidth: 490,
    boxSizing: "border-box",
  },
  description: {
    padding: "var(--indent-xs) 0",
  },
  firstButton: {
    marginRight: "var(--indent-xxxs)",
    display: "inline-flex",
  },
  title: {
    fontWeight: 500,
  },
});
