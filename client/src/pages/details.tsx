import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { useSelector } from "react-redux";
import { getConfig } from "../selectors/getConfig";
import { getBuildById } from "../selectors/getBuildById";

export const Details: FC = () => {
  const { id } = useParams();
  const { repoName } = useSelector(getConfig);
  const build = useSelector((state) => getBuildById(state as any, id));

  return (
    <>
      <Header hasRebuildButton hasSettingsButton title={repoName} />
      <Container>
        {build ? <Card build={build} atrId={0} /> : "There is no same build"}
      </Container>
      <Footer />
    </>
  );
};
