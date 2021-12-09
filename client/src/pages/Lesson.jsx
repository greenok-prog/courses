import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lesson() {
  return (
    <div className="container-lg courseTasks">
      <div className="row">
        <div className="col-sm-8 courseTasks_info">
          <video className="courseTasks_video w-100" controls="controls">
            <source
              src="/videos/Miyagi  Andy Panda feat. Mav-d - Marmalade Official Audio.mp4"
              type="video/mp4"
            />
          </video>
          <div className="courseTasks_theory">
            <h3 className="courseTasks_theory__title">Теория:</h3>
            <div>
              <p className="courseTasks_theory__subtitle">Оператор вывода</p>
              <p className="courseTasks_theory__text">
                Для вывода текстовых сообщений используется оператор print(), в
                качестве аргумента в двойных кавычках указывается текст
                сообщения. Важно помнить, что синтаксис языка является
                регистрозависимым, то есть оператор print(), как и другие
                ключевые слова и функции Python должны записываться строчными
                буквами.
              </p>
            </div>
            <div>
              <p className="courseTasks_theory__subtitle">Комментарии</p>
              <p className="courseTasks_theory__text">
                Если отдельные фрагменты программы требуют пояснений, необходимо
                использовать комментарии. Однострочные комментарии начинаются с
                символа «#».{" "}
              </p>
              <p className="courseTasks_theory__text">
                Для вывода текстовых сообщений используется оператор print(), в
                качестве аргумента в двойных кавычках указывается текст
                сообщения. Важно помнить, что синтаксис языка является
                регистрозависимым, то есть оператор print(), как и другие
                ключевые слова и функции Python должны записываться строчными
                буквами.{" "}
              </p>
            </div>
          </div>
          <div className="courseTasks_links ">
            <h3 className="courseTasks_links__title">Полезные ссылки:</h3>
            <ul>
              <li>
                <Link to="https://google.com">https://google.com</Link>
              </li>
              <li>
                <Link to="https://google.com">https://google.com</Link>
              </li>
            </ul>
          </div>
          <div className="courseTasks_comments">
            <h3 className="courseTasks_comments__title">
              Коментарии: <small>1</small>
            </h3>
            <div className="courseTasks_comment row">
              <div className="courseTasks_comment__avatar col-1">
                <img src="/images/facebook.svg" alt="" />
              </div>
              <div className="courseTasks_comment__info col-11">
                <p className="courseTasks_comment__username">Токаев Ильяр</p>
                <p className="courseTasks_comment_text">
                  <small>
                    для тех, кто не хочет изобретать велосипед, в Numpy
                    существует функция polyval(p,x), где: p - массив
                    коэффициентов полинома (то есть, например, результат
                    знакомой нам функции polyfit) x - массив или значение
                  </small>
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-sm-4 courseTasks_sidebar">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Введение</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li className="text-dark">Введение</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
