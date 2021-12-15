import React from "react";

import { Modal, Button } from "react-bootstrap";

function ModalMessage({ title, message, errorMessage, setErrorMessage }) {
  const handleClose = () => setErrorMessage(false);

  return (
    <Modal size="md" show={errorMessage} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMessage;
