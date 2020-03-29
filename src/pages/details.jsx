import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Container } from "../components/container";

export const Details = props => {
  const { id } = useParams();
  return (
    <>
      <Header hasRebuildButton hasSettingsButton title="Моя репо" />
      <Container>
        <Card />
      </Container>
      <Footer />
    </>
  );
};
