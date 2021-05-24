import React from 'react'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import Formulario from './Formulario';
import ModalReact from './ModalReact';

import Grafica from './Grafica';
import GraficaBar from './GraficaBar';
export default function BulmaLayout() {
    return (
        <div>
            <Button color="primary">Mi primer boton bulma</Button>
            <Formulario></Formulario>
            <ModalReact></ModalReact>
            <Grafica></Grafica>
        </div>
    )
}

