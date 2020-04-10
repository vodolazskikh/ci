import React from "react";
import { Header } from "../components/header";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Form } from "../components/form";

export const Settings = () => {
  return (
    <>
      <Header />
      <Container screen="settings">
        <Form />
      </Container>
      <Footer />
    </>
  );
};
