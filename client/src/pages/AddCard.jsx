import axios from "axios";
import React from "react";

import { useState } from "react";

function AddCard() {
  const [selectedFile, setSelectedFile] = useState();
  const [form, setForm] = useState({
    title: "",
    text: "",
  });
  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const upload = async () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("text", form.text);
    formData.append("file", selectedFile);
    const res = await axios.post(
      "http://localhost:5000/api/cards/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res);
  };
  return (
    <div className="forms col-8 d-flex flex-column justify-content-center">
      <input
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        value={form.title}
        type="text"
        className="input"
        placeholder="title"
      />
      <textarea
        onChange={(e) => setForm({ ...form, text: e.target.value })}
        value={form.text}
        className="input"
        type="text"
        placeholder="text"
      />
      <label form="card_file">Фото для карточки</label>
      <input
        className="input form-control input-file mt-2"
        onChange={(e) => selectFile(e)}
        id="card_file"
        name="file"
        type="file"
        placeholder="file"
      />
      <button onClick={upload}>Отправить</button>
    </div>
  );
}

export default AddCard;
