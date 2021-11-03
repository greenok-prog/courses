import React from "react";

function Footer() {
  return (
    <div className="footer py-5">
      <div className="justify-content-center container-sm">
        <div className="footer-inner rounded row align-items-center p-4">
          <div className="col-sm-6">
            <h3>Поможем в выборе</h3>
            <span>
              Если у вас есть вопросы или вы не знаете что выбрать, оставьте
              свой номер: мы позвоним, чтобы ответить на ваши вопросы
            </span>
          </div>

          <form action="" className="fortm-inline col-sm-6 py-4">
            <input
              type="text"
              style={{ width: "100%" }}
              className="form-control"
              placeholder="Имя"
              aria-label="Имя"
            ></input>
            <div className="d-sm-flex justify-content-between my-3">
              <input
                type="text"
                style={{ width: "15rem" }}
                className="form-control my-3"
                placeholder="Номер"
                aria-label="Поиск"
              ></input>
              <input
                type="text"
                style={{ width: "15rem" }}
                className="form-control my-3"
                placeholder="Электронная почта"
              ></input>
            </div>
            <button type="button" className="btn btn-filled">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
