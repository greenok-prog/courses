import React from "react";

import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCard } from "../store/actions/cards";

function AddCard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const trends = [
    { type: "design", name: "Дизайн" },
    { type: "programming", name: "Программирование" },
    { type: "marketing", name: "Маркетинг" },
  ];
  const [selectedType, setSelectedType] = useState(trends[0]);
  const [selectedFile, setSelectedFile] = useState();
  const [form, setForm] = useState({
    title: "",
    text: "",
  });
  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const upload = () => {
    dispatch(
      addCard(form.title, form.text, selectedType.type, selectedFile)
    ).then((res) => navigate(`/card/${res.card._id}/addCardPromo`));
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
      <DropdownButton title={selectedType.name}>
        {trends.map((el) => (
          <Dropdown.Item onClick={() => setSelectedType(el)}>
            {el.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
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
