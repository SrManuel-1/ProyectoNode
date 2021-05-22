import React from 'react'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import Formulario from './Formulario';
import ModalReact from './ModalReact';
import Lineal from './Lineal';
import GraficaBar from './GraficaBar';

export default function Bulma() {
  return (
    <div>
      <Button color="primary">My Bulma button</Button>
      <Formulario></Formulario>
      <ModalReact></ModalReact>
      <Lineal></Lineal>
      <GraficaBar></GraficaBar>
      
    </div>
  )
}
