import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorAction } from "../../store/actions/user";

function ErrorToast() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const close = () => {
    dispatch(resetErrorAction());
    setShow(false);
  };
  return (
    <ToastContainer position="top-end" className="my_toast position-fixed">
      <Toast
        onClose={close}
        className="sticky"
        autohide
        show={show}
        delay={3000}
        bg="danger"
      >
        <Toast.Header className="bg-danger">
          <strong className="me-auto"></strong>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ErrorToast;
