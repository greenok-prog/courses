import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalWindow({ value, isLink }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <p>
            Если у вас есть вопросы о формате или вы не знаете что выбрать,
            оставьте свой номер: мы позвоним, чтобы ответить на все ваши
            вопросы.
          </p>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Ваше имя"
            className="input"
            style={{ width: "100%" }}
          />
          <div className="d-flex justify-content-between">
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type="text"
              placeholder="Номер телефона"
              className="input"
              style={{ width: "45%" }}
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="text"
              placeholder="email"
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
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
