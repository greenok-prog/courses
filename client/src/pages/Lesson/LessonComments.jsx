import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, loadComments } from "../../store/actions/cards";
import config from "../../config/default.json";

function LessonComments(id, lessonId) {
  const { API_SERVER } = config;
  const { currentUser } = useSelector((state) => state.user);
  const { comments, currentLessons } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  return (
    <div className="courseTasks_comments">
      <h3 className="courseTasks_comments__title">
        Коментарии:{" "}
        {comments && (
          <small>
            {comments.filter((comment) => comment.lesson === lessonId).length}
          </small>
        )}
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
          dispatch(addComment(id, lessonId, currentUser.user._id, commentText))
        }
        className="btn"
      >
        Отправить
      </button>
      {comments &&
        comments.map((comment, index) =>
          comment.lesson === lessonId ? (
            <div key={index} className="courseTasks_comment row">
              <div className="courseTasks_comment__info d-flex justify-content-start">
                {comment.user.avatar ? (
                  <div className="courseTasks_comment__avatar">
                    <img src={API_SERVER + comment.user.avatar} alt="" />
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
  );
}

export default LessonComments;
