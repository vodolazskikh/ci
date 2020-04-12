import React, { useState, useCallback } from "react";
import { StyleSheet, css } from "aphrodite";
import { Input } from "./input";
import { Button } from "./button";
import { setConfig } from "../actions/setConfig";
import { useDispatch, useSelector } from "react-redux";
import { getConfig } from "../selectors/getConfig";

export const Form = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => getConfig(state));

  const [branch, setBranch] = useState(config.mainBranch);
  const [repo, setRepo] = useState(config.repoName);
  const [command, setCommand] = useState(config.buildCommand);
  const [period, setPeriod] = useState(config.period);

  const handleInputBranchChange = useCallback((e) => {
    const value = e.currentTarget.value;
    setBranch(value);
  }, []);

  const handleInputRepoChange = useCallback((e) => {
    const value = e.currentTarget.value;
    setRepo(value);
  }, []);

  const handleInputCommantChange = useCallback((e) => {
    const value = e.currentTarget.value;
    setCommand(value);
  }, []);

  const handleInputPeriodChange = useCallback((e) => {
    const value = e.currentTarget.value;
    setPeriod(value);
  }, []);

  const handleSaveClick = useCallback(() => {
    dispatch(setConfig({ branch, repo, command, period }));
  }, [branch, repo, command, period, dispatch]);
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
        initialValue={config.repoName}
        onChange={handleInputRepoChange}
      />
      <Input
        title="Build command"
        isRequired
        placeholder="npm ci && npm run build"
        size="big"
        initialValue={config.buildCommand}
        onChange={handleInputCommantChange}
      />
      <Input
        title="Main branch"
        placeholder="master"
        size="big"
        initialValue={config.mainBranch}
        onChange={handleInputBranchChange}
      />
      <div className={css(s.time)}>
        <span className={css(s.text)}>Synchronize every</span>
        <Input
          type="text"
          size="small"
          placeholder="2"
          onChange={handleInputPeriodChange}
          initialValue={config.period}
        />
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
            isDisabled={!branch || !repo || !command}
            id="saveSettingsButton"
          />
        </div>
        <Button
          type="control"
          size="primary"
          text="Cancel"
          link={!config.repoName ? " " : "history"}
          id="closeSettingsButton"
        />
      </div>
    </div>
  );
};

const s = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: "var(--font-size-s)",
    lineHeight: "var(--line-height-xs)",
    marginBottom: "var(--indent-xxxs)",
  },
  description: {
    marginBottom: "var(--indent-s)",
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",
    color: "var(--color-text-gray)",
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    fontSize: "var(--font-size-xs)",
    lineHeight: "var(--line-height-xxs)",
  },
  buttonblock: {
    display: "flex",
  },
  firstButton: {
    marginRight: "var(--indent-xxxs)",
  },
});
