import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ChangeEmailModal({ value, isLink }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleClose = () => {
    setShow(false);
    setForm({ ...form, email: "", password: "" });
  };
  const handleShow = () => {
    setShow(true);
    setForm({ ...form, email: "", password: "" });
  };
  const showInformation = () => {
    console.log(form);
  };

  return (
    <>
      <div className={!isLink ? "btn bord" : ""} onClick={handleShow}>
        {value}
      </div>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Поможем в выборе!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="text"
              placeholder="email"
              className="input"
              style={{ width: "45%" }}
            />
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="text"
              placeholder="Пароль"
              className="input"
              style={{ width: "45%" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={showInformation}>
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeEmailModal;
