import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCardPromo } from "../store/actions/cards";

function AddCardPromo() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cards } = useSelector((state) => state.course);
  const card = cards?.find((card) => card._id === params.id);

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    price: "",
    willLearn: [],
    image: card.image,
    description: "",
    willLearnStr: "",
  });
  const [will, setWill] = useState([]);
  const add = () => {
    dispatch(
      addCardPromo(params.id, {
        ...form,

        willLearn: will,
      })
    ).then((res) => navigate("/admin"));
  };
  const addToWillLearn = () => {
    setWill([...will, form.willLearnStr]);
    setForm({ ...form, willLearnStr: "" });
  };
  return (
    <div className="forms col-8 d-flex flex-column justify-content-center">
      <input
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="input"
        value={form.title}
        type="text"
        placeholder="Title"
      />
      <input
        onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        value={form.subtitle}
        className="input"
        type="text"
        placeholder="Subtitle"
      />
      <textarea
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        value={form.description}
        className="input"
        type="text"
        placeholder="Description"
      />
      <input
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        value={form.price}
        className="input"
        type="number"
        placeholder="Price"
      />
      <div>
        <ul className="mb-2">
          {will.map((item, index) => (
            <li
              className="mx-2"
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setWill(will.filter((el) => el !== item))}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <input
          onChange={(e) => setForm({ ...form, willLearnStr: e.target.value })}
          value={form.willLearnStr}
          className="input form-control"
          type="text"
          placeholder="WillLearn"
        />
        <button onClick={addToWillLearn} className="btn">
          Добавить
        </button>
      </div>

      <button className="mt-4" onClick={add}>
        Отправить
      </button>
    </div>
  );
}

export default AddCardPromo;
