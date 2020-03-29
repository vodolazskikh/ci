import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Input } from "../input";
import { Button } from "../button";

export const Form = () => {
  return (
    <div className={css(s.form)}>
      <h1 className={css(s.title)}>Settings</h1>
      <p className={css(s.description)}>
        Configure repository connection and synchronization settings.
      </p>
      <Input
        title="GitHub repository"
        isRequired
        placeholder="user-name/repo-name"
        size="big"
      />
      <Input
        title="Build command"
        isRequired
        placeholder="npm ci && npm run build"
        size="big"
      />
      <Input title="Main branch" placeholder="master" size="big" />
      <div className={css(s.time)}>
        <span className={css(s.text)}>Synchronize every</span>
        <Input type="text" size="small" placeholder="2" />
        <span className={css(s.text)}>minutes</span>
      </div>
      <div className={css(s.buttonblock)}>
        <div className={css(s.firstButton)}>
          <Button type="action" size="primary" text="Save" link="history" />
        </div>
        <Button type="control" size="primary" text="Cancel" link=" " />
      </div>
    </div>
  );
};

const s = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontWeight: "bold",
    fontSize: "var(--font-size-s)",
    lineHeight: "var(--line-height-xs)",
    marginBottom: "var(--indent-xxxs)"
  },
  description: {
    marginBottom: "var(--indent-s)",
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",
    color: "var(--color-text-gray)"
  },
  time: {
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)"
  },
  buttonblock: {
    display: "flex"
  },
  firstButton: {
    marginRight: "var(--indent-xxxs)"
  }
});
