import React from "react";

import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function AddCard({ form, setCard }) {
  const trends = [
    { type: "design", name: "Дизайн" },
    { type: "programming", name: "Программирование" },
    { type: "marketing", name: "Маркетинг" },
  ];
  const [selectedType, setSelectedType] = useState(trends[0]);

  const selectFile = (event) => {
    setCard({ ...form, image: event.target.files[0] });
  };
  const selectType = (e) => {
    setSelectedType(e);
    setCard({ ...form, type: e.type });
  };

  return (
    <>
      <h3 className="text-center">Карточка</h3>
      <input
        required
        onChange={(e) => setCard({ ...form, title: e.target.value })}
        value={form.title}
        type="text"
        className="input"
        placeholder="Название карточки"
      />

      <textarea
        required
        onChange={(e) => setCard({ ...form, text: e.target.value })}
        value={form.text}
        className="input"
        type="text"
        placeholder="Описание"
      />
      <DropdownButton title={selectedType.name}>
        {trends.map((el) => (
          <Dropdown.Item onClick={() => selectType(el)}>
            {el.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <label form="card_file">Фото для карточки</label>
      <input
        required
        className="input form-control input-file mt-2"
        onChange={(e) => selectFile(e)}
        id="card_file"
        name="file"
        type="file"
        placeholder="Файл"
      />
    </>
  );
}

export default AddCard;
