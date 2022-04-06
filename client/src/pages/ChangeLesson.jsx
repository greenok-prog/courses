import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeLesson } from "../store/actions/cards";

function ChangeLesson() {
  const dispatch = useDispatch();
  const params = useParams();

  const navigate = useNavigate();
  const { currentLessons } = useSelector((state) => state.course);
  const [currentLesson, setCurrentLesson] = useState({});
  const [form, setForm] = useState({
    title: "",
    text: "",
    links: [],
  });
  useEffect(() => {
    setCurrentLesson(
      currentLessons
        .map((block) =>
          block.lessons.find((les) => les._id === params.lessonId)
        )
        .filter((el) => el !== undefined)[0]
    );
    setForm(currentLesson);
  }, [
    params.id,
    currentLessons,
    currentLesson.text,
    currentLesson,
    params.lessonId,
  ]);
  console.log(form);

  const [selectedVideo, setSelectedVideo] = useState({});
  const [link, setLink] = useState("");
  const selectVideo = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  const addLink = () => {
    if (link !== "") {
      setForm({ ...form, links: [...form.links, link] });
      setLink("");
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    dispatch(
      changeLesson(
        params.lessonId,
        form.title,
        form.text,
        form.links,
        selectedVideo
      )
    ).then(() => navigate("/lesson/" + params.cardId));
  };

  return (
    <div className="container ">
      <form action="" onSubmit={(e) => changeHandler(e)}>
        <div className="w-100 mt-3 d-flex justify-content-center">
          <input
            type="text"
            name="title"
            placeholder="Заголовок"
            className="input w-100"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="w-100 mt-3 d-flex justify-content-center">
          <textarea
            type="text"
            name="text"
            placeholder="Текст урока"
            className="input w-100"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
        </div>
        <div className="w-100 mt-3 d-flex justify-content-center">
          <input
            type="file"
            onChange={(e) => selectVideo(e)}
            className="input form-control input-file w-100"
          />
        </div>

        <div className="w-100 mt-3 d-flex justify-content-center">
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Полезные ссылки"
            className="input w-100 m-0 mr-2"
          />
        </div>
      </form>
      <div className="w-100 mt-3 d-flex justify-content-between">
        <div>
          {form.links &&
            form?.links.map((el) => (
              <span
                role={"button"}
                onClick={() =>
                  setForm({
                    ...form,
                    links: form.links.filter((link) => link !== el),
                  })
                }
                className="mx-2"
              >
                {el}
              </span>
            ))}
        </div>
        <button onClick={addLink} className="btn p-2 ">
          Добавить
        </button>
      </div>
      <div className="w-100 mt-3 d-flex justify-content-center"></div>
      <div className="w-100 mt-3 d-flex justify-content-center">
        <button onClick={(e) => changeHandler(e)} className="btn w-50">
          Изменить
        </button>
      </div>
    </div>
  );
}

export default ChangeLesson;
