import React, { useState, useCallback } from "react";
import { Header } from "../components/header";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Popup } from "../components/popup";
import { useSelector } from "react-redux";
import { getBuilds } from "../selectors/getBuilds";
import { getConfig } from "../selectors/getConfig";
import { useTranslation } from "react-i18next";

export const History = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const builds = useSelector((state) => getBuilds(state));
  const config = useSelector((state) => getConfig(state));
  const [splicedBuilds, setSplicedBuilds] = useState([...builds].splice(0, 5));
  const [isMoreDisplayed, setIsMoreDisplayed] = useState(false);
  const { t } = useTranslation();

  const closePopup = useCallback(() => {
    return setIsPopupOpened(false);
  }, []);

  const showMore = useCallback(() => {
    setIsMoreDisplayed(true);
    setSplicedBuilds(builds);
  }, [builds]);

  const hideItems = useCallback(() => {
    setIsMoreDisplayed(false);
    setSplicedBuilds([...builds].splice(0, 5));
  }, [builds]);

  return (
    <>
      <Header
        hasSettingsButton
        hasBuildButton
        onBuildButtonClick={setIsPopupOpened}
        title={config.repo}
      />
      <Container screen="history" id="mainPage">
        {splicedBuilds.map((build, index) => (
          <Card build={build} key={build.id} atrId={index} />
        ))}
        <div>
          <Button
            type="control"
            size="secondary"
            text={isMoreDisplayed ? t("Hide") : t("Show more")}
            onClick={isMoreDisplayed ? hideItems : showMore}
            isStretched
          />
        </div>
      </Container>
      <Footer />
      {isPopupOpened && <Popup onCloseClick={closePopup} />}
    </>
  );
};
