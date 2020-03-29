import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { useSelector } from "react-redux";
import { getConfig } from "../selectors/getConfig";
import { getBuildById } from "../selectors/getBuildById";

export const Details = props => {
  const { id } = useParams();
  const { repo } = useSelector(state => getConfig(state));
  const build = useSelector(state => getBuildById(state, id));
  return (
    <>
      <Header hasRebuildButton hasSettingsButton title={repo} />
      <Container>{build && <Card build={build} />}</Container>
      <Footer />
    </>
  );
};
