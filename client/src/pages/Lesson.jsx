import React, { useState, useEffect } from "react";
import Loader from "../components/UI/Loader";

import { Accordion } from "react-bootstrap";
import config from "../config/default.json";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import {
  addComment,
  addLessonBlock,
  changeLessonBlock,
  deleteLesson,
  deleteLessonBlock,
  getLessons,
  loadComments,
} from "../store/actions/cards";
import { setCurrentLesson } from "../store/actions/user";

function Lesson() {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const { id } = useParams();
  const [lessonBlock, setLessonBlock] = useState("");
  const [currentLessonBlock, setCurrentLessonBlock] = useState("");
  const [changeBlockInput, setChangeBlockInput] = useState("");
  const [changeBlockActive, setChangeBlockActive] = useState(false);
  const { currentLessons, comments, cards } = useSelector(
    (state) => state.course
  );

  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.user?.roles?.includes("ADMIN");
  const isTeacher = cards.find((el) => el.author === currentUser.user._id);
  const hasRights = isAdmin || isTeacher;
  const { API_SERVER } = config;

  const dispatch = useDispatch();
  const [lesson, setLesson] = useState({});

  const [commentText, setCommentText] = useState("");
  const addBlock = () => {
    dispatch(addLessonBlock(id, lessonBlock));
    setLessonBlock("");
    setIsActiveInput(false);
  };
  useEffect(() => {
    dispatch(getLessons(id));
    dispatch(loadComments());
  }, [dispatch, id]);
  const changeBlock = () => {
    dispatch(changeLessonBlock(currentLessonBlock._id, changeBlockInput)).then(
      () => dispatch(getLessons(id))
    );
    setCurrentLessonBlock("");
    setChangeBlockActive(false);
  };

  useEffect(() => {
    const findetCard = currentUser.user.currentLesson.filter(
      (les) => les.cardId === id
    )[0];

    if (findetCard) {
      const lessons = currentLessons.map((el) =>
        el.lessons.find((les) => les._id === findetCard.lesson)
      );
      setLesson(lessons.find((el) => el !== undefined));
    } else {
      setLesson(currentLessons?.find((el) => el?.lessons.length)?.lessons[0]);
    }
  }, [currentLessons, currentUser.user.currentLesson, id]);

  return (
    <>
      {currentLessons ? (
        <div className="container-lg courseTasks">
          <div className="row">
            {lesson ? (
              <div className="col-sm-8 courseTasks_info">
                <h2>{lesson.title}</h2>
                {lesson.video && (
                  <video
                    className="courseTasks_video w-100"
                    controls="controls"
                  >
                    <source
                      src={`${API_SERVER + lesson.video}`}
                      type="video/mp4"
                    />
                  </video>
                )}

                <div className="courseTasks_theory">
                  <div>
                    <p className="courseTasks_theory__subtitle"></p>
                    <p
                      style={{ whiteSpace: "pre-wrap" }}
                      className="courseTasks_theory__text"
                    >
                      {lesson.text}
                    </p>
                  </div>
                </div>
                <div className="courseTasks_links ">
                  <ul className="d-flex justify-content-between">
                    {lesson.links &&
                      lesson.links.map((d) => (
                        <li>
                          <Link to={d}>{d}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="courseTasks_comments">
                  <h3 className="courseTasks_comments__title">
                    Коментарии:{" "}
                    <small>
                      {
                        comments.filter(
                          (comment) => comment.lesson === lesson._id
                        ).length
                      }
                    </small>
                  </h3>
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    type="text"
                    rows={2}
                    className="input w-100"
                    placeholder="Добавить коментарий"
                  />
                  <button
                    onClick={() =>
                      dispatch(
                        addComment(
                          id,
                          lesson._id,
                          currentUser.user._id,
                          commentText
                        )
                      )
                    }
                    className="btn"
                  >
                    Отправить
                  </button>
                  {comments &&
                    comments.map((comment, index) =>
                      comment.lesson === lesson._id ? (
                        <div key={index} className="courseTasks_comment row">
                          <div className="courseTasks_comment__info d-flex justify-content-start">
                            {comment.user.avatar ? (
                              <div className="courseTasks_comment__avatar">
                                <img
                                  src={API_SERVER + comment.user.avatar}
                                  alt=""
                                />
                              </div>
                            ) : (
                              <div className="courseTasks_comment__avatar"></div>
                            )}
                            <p className="courseTasks_comment__username mx-3">
                              {comment.user.username}
                            </p>
                          </div>
                          <p className="courseTasks_comment_text">
                            <small>{comment.text}</small>
                          </p>
                          <hr />
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
              </div>
            ) : (
              <Loader className="col-sm-8" />
            )}
            <div className="col-sm-4 courseTasks_sidebar">
              {currentLessons.length > 0 ? (
                <Accordion className="bg-primary" defaultActiveKey={["1"]}>
                  {currentLessons.map((el, index) => (
                    <Accordion.Item
                      onClick={() => setCurrentLessonBlock(el)}
                      eventKey={index}
                    >
                      <Accordion.Header>
                        <div className="w-100 text-dark d-flex justify-content-between">
                          {el.title}{" "}
                          {hasRights && (
                            <div className="d-flex justify-conten-start align-items-center">
                              <button
                                onClick={() => {
                                  setChangeBlockActive(true);
                                  setCurrentLessonBlock(el);
                                  setChangeBlockInput(el.title);
                                }}
                                className="lessonBlock_btn d-flex align-items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                              </button>

                              <button
                                onClick={() =>
                                  dispatch(deleteLessonBlock(el._id))
                                }
                                className="lessonBlock_btn d-flex align-items-center"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-x-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="p-0">
                        {el.lessons ? (
                          <ul>
                            {el.lessons.map((les) => (
                              <>
                                <li
                                  onClick={() => {
                                    setLesson(les);
                                    dispatch(
                                      setCurrentLesson(
                                        les._id,
                                        currentUser.user._id,
                                        id
                                      )
                                    );
                                  }}
                                  role={"button"}
                                  className={`text-dark d-flex py-2 justify-content-between align-items-center ${
                                    les._id === lesson?._id
                                      ? "lesson-active"
                                      : ""
                                  }`}
                                >
                                  <div className="w-100 text-dark d-flex justify-content-between align-items-center">
                                    <p
                                      role="button"
                                      className="m-0 py-2 text-dark cursor-pointer px-3 d-flex justify-content-between align-items-center"
                                    >
                                      {les.title}
                                    </p>

                                    {hasRights && (
                                      <div className="d-flex justify-conten-start align-items-center">
                                        <Link
                                          to={`/${id}/${les._id}/changeLesson`}
                                          className="lessonBlock_btn d-flex align-items-center"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-fill"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                          </svg>
                                        </Link>

                                        <button
                                          onClick={() => {
                                            dispatch(deleteLesson(les._id));
                                            dispatch(getLessons(id));
                                          }}
                                          className="lessonBlock_btn d-flex align-items-center"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-x-lg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                                            />
                                            <path
                                              fill-rule="evenodd"
                                              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </li>
                                <hr className="m-0 p-0 lesson-line w-50" />
                              </>
                            ))}
                            {hasRights && (
                              <li className="py-2 px-3 text-dark d-flex align-items-center justify-content-between">
                                Добавить урок
                                <Link
                                  style={{ padding: "0px" }}
                                  className="btn"
                                  to={`/card/${id}/${el._id}/addLession`}
                                >
                                  <img
                                    alt="add_lesson"
                                    style={{ width: "30px", height: "30px" }}
                                    src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/96/000000/external-plus-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
                                  ></img>
                                </Link>
                              </li>
                            )}
                          </ul>
                        ) : (
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-dark m-0">
                              В этом блоке пока нет уроков
                            </p>
                            <Link
                              to={`/card/${el._id}/addLession`}
                              className="btn"
                              style={{ padding: "0px" }}
                            >
                              <img
                                alt="addLesson"
                                style={{ width: "30px", height: "30px" }}
                                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/96/000000/external-plus-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
                              ></img>
                            </Link>
                          </div>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              ) : (
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Пока нет уроков</Accordion.Header>
                  </Accordion.Item>
                </Accordion>
              )}

              {hasRights &&
                (changeBlockActive ? (
                  <div>
                    <input
                      type="text"
                      value={changeBlockInput}
                      onChange={(e) => setChangeBlockInput(e.target.value)}
                      className="w-100 form-control mt-3"
                    />
                    <div>
                      <button onClick={changeBlock} className={`btn ml-3 mt-2`}>
                        Изменить
                      </button>
                      <button
                        onClick={() => setCurrentLessonBlock("")}
                        className={`btn ml-3 mt-2 mx-2`}
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      value={lessonBlock}
                      onChange={(e) => setLessonBlock(e.target.value)}
                      type="search"
                      className={`${
                        !isActiveInput ? "d-none" : ""
                      } w-100 form-control mt-3`}
                    />
                    <button
                      onClick={addBlock}
                      className={`btn ml-3 mt-2 ${
                        !isActiveInput ? "d-none" : ""
                      }`}
                    >
                      Добавить
                    </button>
                    <button
                      onClick={() => setIsActiveInput(true)}
                      className={`btn ml-3 mt-2 ${
                        isActiveInput ? "d-none" : ""
                      }`}
                    >
                      Добавить блок
                    </button>
                  </>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}

export default Lesson;
