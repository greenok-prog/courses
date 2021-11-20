import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

function UserPhoto() {
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const saveChanges = () => {
    localStorage.setItem("image", JSON.stringify(selectedPhoto));
  };
  return (
    <div className="col-sm-6 profile_form">
      <div className="profile_form__info text-lg-center text-center">
        <h3>Фотография</h3>
        <p>Здесь вы можете изменить вашу фотографию</p>
      </div>
      <div className="profile_form__inputs align-items-center justify-content-center">
        <AvatarEditor
          image={selectedPhoto}
          height={200}
          border={20}
          width={200}
          borderRadius={150}
          color={[255, 255, 255, 0.6]}
          scale={1.2}
          rotate={0}
          className="photo_preview"
        />
        <div className="input-group mb-3">
          <input
            onChange={(e) => setSelectedPhoto(e.target.files[0])}
            type="file"
            className="input form-control input-file"
            id="inputGroupFile01"
          />
        </div>
        <button
          onClick={saveChanges}
          className="btn bord profile_form__input-button"
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default UserPhoto;
