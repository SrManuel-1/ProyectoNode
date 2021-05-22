import React, {useState, Block, args} from 'react'
import 'bulma/css/bulma.min.css';
import { Button, Modal, Media, Image, Content } from 'react-bulma-components';
import Formulario from './Formulario';

export default function ModalReact() {
    const [openModal, setOpenModal] = useState();
    return (
        <div>
            <>
      <Button.Group renderAs={Block}>
        <Button
          color="info"
          onClick={() => {
            return setOpenModal('card');
          }}
        >
          Open Card Modal
        </Button>
      </Button.Group>
      <Modal
        {...args}
        show={openModal === 'card'}
        onClose={() => {
          return setOpenModal();
        }}
      >
        <Modal.Card>
          <Modal.Card.Header showClose>
            <Modal.Card.Title>Title</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Media>
              <Media.Item renderAs="figure" align="left">
                <Image
                  size={64}
                  alt="64x64"
                  src="http://bulma.io/images/placeholders/128x128.png"
                />
              </Media.Item>
              <Media.Item>
                <Content>
                    <Formulario></Formulario>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    If the children of the Modal is a card, the close button
                    will be on the Card Head instead than the top-right corner
                    You can also pass showClose = false to Card.Head to hide the
                    close button
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Modal.Card.Body>
          <Modal.Card.Footer renderAs={Button.Group} align="right" hasAddons>
            <Button color="success">Like</Button>
            <Button>Share</Button>
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    </>
        </div>
    )
}

