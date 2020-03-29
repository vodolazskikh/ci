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

export const History = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const builds = useSelector(state => getBuilds(state));
  const config = useSelector(state => getConfig(state));

  const closePopup = useCallback(() => {
    return setIsPopupOpened(false);
  }, []);

  return (
    <>
      <Header
        hasSettingsButton
        hasBuildButton
        onBuildButtonClick={setIsPopupOpened}
        title={config.repo}
      />
      <Container screen="history">
        {builds.map(build => (
          <Card build={build} />
        ))}
        <Button type="control" size="secondary" text="Show more" />
      </Container>
      <Footer />
      {isPopupOpened && <Popup onCloseClick={closePopup} />}
    </>
  );
};
