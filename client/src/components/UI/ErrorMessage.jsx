import React from "react";

function ErrorMessage({ message }) {
  return (
    <>
      <p className="text-danger">{message}</p>
    </>
  );
}

export default ErrorMessage;
