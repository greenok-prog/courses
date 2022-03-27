import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { changeCardInfo, getCard, getCardAction } from "../store/actions/cards";
import Loader from "../components/UI/Loader";

function ChangeCardInfo() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState({});
  const { currentCard, isFetching } = useSelector((state) => state.course);
  const [card, setCard] = useState({
    title: "",
    text: "",
    type: "",
    image: null,
  });
  useEffect(() => {
    dispatch(getCard(params.id));
    return () => {
      dispatch(getCardAction({}));
    };
  }, []);
  const trends = [
    { type: "design", name: "Дизайн" },
    { type: "programming", name: "Программирование" },
    { type: "marketing", name: "Маркетинг" },
  ];

  const [selectedType, setSelectedType] = useState(trends[0]);

  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const selectType = (e) => {
    setSelectedType(e);
    setCard({ ...card, type: e.type });
  };
  const [will, setWill] = useState([]);

  const [cardPromo, setCardPromo] = useState({
    title: "",
    subtitle: "",
    price: "",
    willLearn: "",
    description: "",
    willLearnStr: "",
  });
  const addToWillLearn = () => {
    setWill([...will, cardPromo.willLearnStr]);
    setCardPromo({ ...cardPromo, willLearnStr: "" });
  };
  const upload = () => {
    dispatch(
      changeCardInfo(
        params.id,
        { ...cardPromo, willLearn: will },
        card,
        selectedFile
      )
    ).then(() => navigate("/admin"));
  };
  const loadData = () => {
    setCard(currentCard.card);
    setCardPromo(currentCard.promo);
    setWill(currentCard.promo.willLearn);
  };

  return (
    <div className="addCard_form  d-flex flex-column justify-content-center col-md-8 ">
      <button className="btn">
        <Link to={"/lesson/" + params.id}>Уроки</Link>
      </button>
      {currentCard ? (
        <>
          <h3 className="text-center">Карточка</h3>
          <input
            required
            onChange={(e) => setCard({ ...card, title: e.target.value })}
            value={card.title}
            type="text"
            className="input"
            placeholder="title"
          />

          <textarea
            required
            onChange={(e) => setCard({ ...card, text: e.target.value })}
            value={card.text}
            className="input"
            type="text"
            placeholder="text"
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
            placeholder="file"
          />
          <h3 className="text-center">Промо карточки</h3>
          <input
            onChange={(e) =>
              setCardPromo({ ...cardPromo, title: e.target.value })
            }
            className="input"
            value={cardPromo.title}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) =>
              setCardPromo({ ...cardPromo, subtitle: e.target.value })
            }
            value={cardPromo.subtitle}
            className="input"
            type="text"
            placeholder="Subtitle"
          />
          <textarea
            onChange={(e) =>
              setCardPromo({ ...cardPromo, description: e.target.value })
            }
            value={cardPromo.description}
            className="input"
            type="text"
            placeholder="Description"
          />
          <input
            onChange={(e) =>
              setCardPromo({ ...cardPromo, price: e.target.value })
            }
            value={cardPromo.price}
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
              onChange={(e) =>
                setCardPromo({ ...cardPromo, willLearnStr: e.target.value })
              }
              value={cardPromo.willLearnStr}
              className="input form-control"
              type="text"
              placeholder="WillLearn"
            />
            <button onClick={addToWillLearn} className="btn">
              Добавить
            </button>
          </div>
          <div className="w-100 justify-content-center text-center">
            <button onClick={upload} className="btn mt-3 mb-4 w-50 ">
              Изменить
            </button>
            <button onClick={loadData} className="btn mt-3 mb-4 w-50 ">
              Загрузить
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ChangeCardInfo;
