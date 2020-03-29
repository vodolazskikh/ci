import React, { useState, useCallback } from "react";
import { StyleSheet, css } from "aphrodite";
import { Input } from "./input";
import { Button } from "./button";
import { SET_CONFIG } from "../actions/config";
import { useDispatch, useSelector } from "react-redux";
import { getConfig } from "../selectors/getConfig";

export const Form = () => {
  const dispatch = useDispatch();
  const [branch, setBranch] = useState("");
  const [repo, setRepo] = useState("");
  const [command, setCommand] = useState("");
  const config = useSelector(state => getConfig(state));

  const handleInputBranchChange = useCallback(e => {
    const value = e.currentTarget.value;
    setBranch(value);
  }, []);

  const handleInputRepoChange = useCallback(e => {
    const value = e.currentTarget.value;
    setRepo(value);
  }, []);

  const handleInputCommantChange = useCallback(e => {
    const value = e.currentTarget.value;
    setCommand(value);
  }, []);

  const handleSaveClick = useCallback(() => {
    dispatch(SET_CONFIG({ branch, repo, command }));
  }, [branch, repo, command, dispatch]);

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
        onChange={handleInputRepoChange}
      />
      <Input
        title="Build command"
        isRequired
        placeholder="npm ci && npm run build"
        size="big"
        onChange={handleInputCommantChange}
      />
      <Input
        title="Main branch"
        placeholder="master"
        size="big"
        onChange={handleInputBranchChange}
      />
      <div className={css(s.time)}>
        <span className={css(s.text)}>Synchronize every</span>
        <Input type="text" size="small" placeholder="2" />
        <span className={css(s.text)}>minutes</span>
      </div>
      <div className={css(s.buttonblock)}>
        <div className={css(s.firstButton)}>
          <Button
            type="action"
            size="primary"
            text="Save"
            link="history"
            onClick={handleSaveClick}
          />
        </div>
        <Button
          type="control"
          size="primary"
          text="Cancel"
          link={!config.repo ? " " : "history"}
        />
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
