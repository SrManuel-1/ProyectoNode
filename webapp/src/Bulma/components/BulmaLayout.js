import React from 'react'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import Formulario from './Formulario';
import ModalReact from './ModalReact';

export default function BulmaLayout() {
    return (
        <div>
            <Button color="primary">Mi primer boton bulma</Button>
            <Formulario></Formulario>
            <ModalReact></ModalReact>
        </div>
    )
}

