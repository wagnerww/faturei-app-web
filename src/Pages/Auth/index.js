import React, { Component } from "react";

import InputForm from "../../Components/InputForm";

import { Button, ButtonMaior } from "../../Styles/components/buttons";

import {
  Container,
  ContainerConteudo,
  ContainerLogin,
  TituloPart1,
  TituloPart2
} from "./styles";

class Auth extends Component {
  render() {
    return (
      <Container>
        <div>
          <TituloPart1>FAT</TituloPart1>
          <TituloPart2>UREI</TituloPart2>
        </div>
        <ContainerConteudo>
          <div>
            <p>Plataforma de emissão fiscal, rápida e de fácil integração!</p>

            <div>
              <ButtonMaior>GET STARTER</ButtonMaior>
            </div>
          </div>
          <ContainerLogin>
            <InputForm
              label="Email"
              type="text"
              name="email"
              placeholder="Seu email de acesso"
            />
            <InputForm
              label="Senha"
              type="password"
              name="email"
              placeholder="Seu email de acesso"
            />
            <Button>ACESSAR</Button>
          </ContainerLogin>
          <div />
        </ContainerConteudo>
      </Container>
    );
  }
}

export default Auth;
