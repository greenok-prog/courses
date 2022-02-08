import React, { useState } from "react";
import { Modal, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { changeAvatar, setMessageAction } from "../../store/actions/user";
import MyToast from "../UI/MyToast";

function UserPhoto() {
  const dispatch = useDispatch();
  const { currentUser, message } = useSelector((state) => state.user);
  const [file, setFile] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSave = () => {
    if (file !== "") {
      dispatch(changeAvatar(currentUser.user._id, file));
    } else {
      dispatch(setMessageAction("Выберите фото"));
      setIsError(true);
      // dispatch(setMessageAction(""));
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Фотография</h3>
        <p>Здесь вы можете изменить вашу фотографию</p>
      </div>
      <div className="profile_form__inputs align-items-center justify-content-center">
        {isError && <p className="text-danger">{message}</p>}
        <div className="input-group mb-3">
          <input
            onChange={(e) => handleFileChange(e)}
            type="file"
            accept="image/png, image/gif, image/jpeg"
            className="input form-control input-file"
            id="inputGroupFile01"
          />
        </div>

        <>
          <button
            onClick={handleSave}
            className="btn bord profile_form__input-button"
          >
            Сохранить
          </button>
        </>
      </div>
    </div>
  );
}

export default UserPhoto;
