import React from "react";
import styled from "styled-components";

function Modal(props) {
  const { onClose } = props;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <React.Fragment>
      <Background onClick={handleClose} />
      <Text>
        Bem vindo ao Final Light.
        <br />
        <br />
        Você é um eletricista das antigas e precisa encontrar uma forma de ajudar seu cliente.
        <br />
        Você terá algumas portas lógicas e seu objetivo é encontrar uma forma de organiza-las para
        conseguir acender a lâmpada.
        <br />
        <br />
        Lembre-se, as entradas vermelhas tem valor 1 e as entradas azuis tem valor 0.
        <br />
        <br />
        Abaixo você terá uma explicação de como cada porta funciona:
        <br />
        <br />
        <br />
        OR: Para você passar energia por esta porta, é necessário que você tenha pelo menos um valor
        1 em uma das entradas.
        <br />
        <br />
        NOR: Para você passar energia por esta porta, é necessário que você tenha somente 0 nas duas
        entradas.
        <br />
        <br />
        AND: Para você passar energia por esta porta, é necessário que você tenha somente 1 nas duas
        entradas.
        <br />
        <br />
        NAND: Para você passar energia por esta porta, é necessário que você não tenha valores 1 nas
        duas entradas.
        <br />
        <br />
        XOR: Para você passar energia por esta porta, é necessário que você não tenha valores iguais
        nas duas entradas.
        <br />
        <br />
        NOT: Todo valor passado por esta porta é invertido.
        <br />
        <br />
      </Text>
    </React.Fragment>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index:2;
  filter: blur(10px);
`;

const Text = styled.div`
  font-size: 20px;
  position: absolute;
  z-index:3;
  width: 50%;
  height: 50%;
  filter: none;
  padding: 50px;
  overflow: scroll;
  background-color: #F3F3F3;
  border-radius: 20px;
`;

export default Modal;
