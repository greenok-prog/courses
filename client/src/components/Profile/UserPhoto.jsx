import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AvatarEditor from "react-avatar-editor";

import Slider from "@mui/material/Slider";

import { setUserAvatarAction } from "../../store/actions/user";

function UserPhoto() {
  const dispatch = useDispatch();
  var editor = "";
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg: "",
  });

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value,
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false,
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      dispatch(setUserAvatarAction(croppedImg));
      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      let url = URL.createObjectURL(e.target.files[0]);
      setPicture({
        ...picture,
        img: url,
        cropperOpen: true,
      });
    }
  };
  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Фотография</h3>
        <p>Здесь вы можете изменить вашу фотографию</p>
      </div>
      <div className="profile_form__inputs align-items-center justify-content-center">
        {picture.cropperOpen ? (
          <>
            <AvatarEditor
              ref={setEditorRef}
              image={picture.img}
              value={picture.zoom}
              height={200}
              border={20}
              width={200}
              color={[255, 255, 255, 0.2]}
              scale={picture.zoom}
              rotate={0}
              className="photo_preview"
            />
            <Slider
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            ></Slider>
          </>
        ) : (
          ""
        )}
        <div className="input-group mb-3">
          <input
            onChange={handleFileChange}
            type="file"
            className="input form-control input-file"
            id="inputGroupFile01"
          />
        </div>
        {picture.cropperOpen && (
          <>
            <button
              onClick={handleSave}
              className="btn bord profile_form__input-button"
            >
              Сохранить
            </button>

            <button
              onClick={handleCancel}
              className="btn bord profile_form__input-button"
            >
              Отмена
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UserPhoto;
