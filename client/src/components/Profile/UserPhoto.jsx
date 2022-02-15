import React, { useState } from "react";
import { Modal, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  changeAvatar,
  setErrorAction,
  setMessageAction,
} from "../../store/actions/user";
import ErrorToast from "../UI/ErrorToast";
import MyToast from "../UI/MyToast";

function UserPhoto() {
  const dispatch = useDispatch();
  const { currentUser, isError, isMessage } = useSelector(
    (state) => state.user
  );
  const [file, setFile] = useState("");

  const handleSave = () => {
    if (file !== "") {
      dispatch(changeAvatar(currentUser.user._id, file));
    } else {
      dispatch(setErrorAction());
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
        {isError && <ErrorToast />}
        {isMessage && <MyToast />}
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
