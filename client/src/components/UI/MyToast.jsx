import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetMessageAction } from "../../store/actions/user";

function MyToast() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);
  const close = () => {
    dispatch(resetMessageAction());
    setShow(false);
  };
  return (
    <ToastContainer position="top-end" className="position-fixed">
      <Toast onClose={close} autohide show={show} delay={3000} bg="success">
        <Toast.Header className="bg-success">
          <strong className="me-auto"></strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;
