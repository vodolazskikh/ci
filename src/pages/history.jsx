import React, { useState, useCallback } from "react";
import { Header } from "../components/header";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Popup } from "../components/popup";

export const History = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const closePopup = useCallback(() => {
    return setIsPopupOpened(false);
  }, []);
  return (
    <>
      <Header
        hasSettingsButton
        hasBuildButton
        onBuildButtonClick={setIsPopupOpened}
        title="Мое репл"
      />
      <Container screen="history">
        <Card
          author="Philip Kirkorov"
          id="1368"
          title="add documentation for postgres scaler"
          branch="master"
          hash="9c9f0b9"
        />
        <Button type="control" size="secondary" text="Show more" />
      </Container>
      <Footer />
      {isPopupOpened && <Popup onCloseClick={closePopup} />}
    </>
  );
};
