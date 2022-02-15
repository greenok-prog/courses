import React from "react";

function AddCardPromo({ form, setForm, addToWillLearn, will, setWill }) {
  return (
    <>
      <h3 className="text-center">Промо карточки</h3>
      <input
        onChange={(e) => setForm({ ...form, promoTitle: e.target.value })}
        className="input"
        value={form.title}
        type="text"
        placeholder="Title"
      />
      <input
        onChange={(e) => setForm({ ...form, promoSubtitle: e.target.value })}
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
    </>
  );
}

export default AddCardPromo;
