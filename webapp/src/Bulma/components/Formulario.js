import React from 'react'
import 'bulma/css/bulma.min.css';
import { Button, Form, Icon } from 'react-bulma-components';

export default function Formulario() {
    return (
        <div>
            <Form.Field>
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Username" name="name" />
                    <Icon align="left">
                        <i className="github" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Password" name="password" type="password"  />
                    <Icon align="left">
                        <i className="github" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Button.Group>
                <Button fullwidth rounded color="primary" >Login</Button>
            </Button.Group>
        </div>
    )
}

