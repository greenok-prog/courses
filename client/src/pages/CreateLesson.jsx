import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLesson } from "../store/actions/cards";

function CreateLesson() {
  const [form, setForm] = useState({
    title: "",
    text: "",
    links: [],
  });

  const [selectedVideo, setSelectedVideo] = useState({});
  const [link, setLink] = useState("");
  const selectVideo = (e) => {
    setSelectedVideo(e.target.files[0]);
  };
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const addLink = (e) => {
    e.preventDefault();
    setForm({ ...form, links: [...form.links, link] });
    setLink("");
  };
  const createLessonHandler = (e) => {
    e.preventDefault();

    dispatch(
      addLesson(
        params.block_id,
        form.title,
        form.text,
        form.links,
        selectedVideo
      )
    ).then(() => navigate("/lesson/" + params.card_id));
  };

  return (
    <div className="container ">
      <form action="" onSubmit={(e) => createLessonHandler(e)}>
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
        <div className="w-100 mt-3 d-flex justify-content-between">
          <div>
            {form.links.map((el) => (
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
          <button onClick={(e) => addLink(e)} className="btn p-2 ">
            Добавить
          </button>
        </div>
        <div className="w-100 mt-3 d-flex justify-content-center"></div>
        <div className="w-100 mt-3 d-flex justify-content-center">
          <button className="btn w-50">Создать</button>
        </div>
      </form>
    </div>
  );
}

export default CreateLesson;
