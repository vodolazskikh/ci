import React from "react";
import { Header } from "../components/header";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Button } from "../components/button";
import { Card } from "../components/card";

export const History = () => {
  return (
    <>
      <Header hasSettingsButton hasBuildButton />
      <Container screen="history">
        <Card />
        <Button type="control" size="secondary" text="Show more" />
      </Container>
      <Footer />
    </>
  );
};
