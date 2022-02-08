import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function MyToast({ message }) {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="top-end">
      <Toast
        onClose={() => setShow(false)}
        autohide
        show={show}
        delay={3000}
        bg="secondary"
      >
        <Toast.Header>
          <strong className="me-auto ">FizCourses</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;
