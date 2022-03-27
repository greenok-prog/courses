import React, { useState, useEffect, useCallback } from "react";
import Loader from "../components/UI/Loader";

import { Accordion } from "react-bootstrap";
import config from "../config/default.json";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import {
  addComment,
  addLessonBlock,
  getLessons,
  loadComments,
} from "../store/actions/cards";

function Lesson() {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [lessonBlock, setLessonBlock] = useState("");
  const { currentLessons, comments } = useSelector((state) => state.course);
  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.user?.roles?.includes("ADMIN");
  const { API_SERVER } = config;

  const { id } = useParams();
  const dispatch = useDispatch();
  const [lesson, setLesson] = useState({});

  const [commentText, setCommentText] = useState("");
  const addBlock = () => {
    dispatch(addLessonBlock(id, lessonBlock));
    setLessonBlock("");
    dispatch(getLessons(id));
    setIsActiveInput(false);
  };
  useEffect(() => {
    dispatch(getLessons(id));
    dispatch(loadComments());
  }, [dispatch, id]);

  useEffect(() => {
    setLesson(currentLessons[0]?.lessons[0]);
  }, [currentLessons]);

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
                  <h3 className="courseTasks_theory__title">Теория:</h3>
                  <div>
                    <p className="courseTasks_theory__subtitle"></p>
                    <p className="courseTasks_theory__text">{lesson.text}</p>
                  </div>
                </div>
                <div className="courseTasks_links ">
                  <h3 className="courseTasks_links__title">Полезные ссылки:</h3>
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
                              <p>fd</p>
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
                <Accordion className="" defaultActiveKey="0">
                  {currentLessons.map((el, index) => (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>{el.title}</Accordion.Header>
                      <Accordion.Body>
                        {el.lessons ? (
                          <ul>
                            {el.lessons.map((les) => (
                              <li
                                onClick={() => {
                                  setLesson(les);
                                }}
                                className="text-dark d-flex align-items-center justify-content-between"
                              >
                                <p
                                  role="button"
                                  className="text-dark cursor-pointer"
                                >
                                  {les.title}
                                </p>
                              </li>
                            ))}
                            {isAdmin && (
                              <li className="text-dark d-flex align-items-center justify-content-between">
                                Добавить урок
                                <Link
                                  style={{ padding: "0px" }}
                                  className="btn"
                                  to={`/card/${id}/${el._id}/addLession`}
                                >
                                  <img
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

              {isAdmin && (
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
                    className={`btn ml-3 mt-2 ${isActiveInput ? "d-none" : ""}`}
                  >
                    Добавить блок
                  </button>
                </>
              )}
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
