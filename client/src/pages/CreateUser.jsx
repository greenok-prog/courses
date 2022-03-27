import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../store/actions/user";

const CreateUser = () => {
  const roles = ["ADMIN", "USER", "TEACHER"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const selectRole = (e) => {
    setSelectedRole(e);
  };
  const addRole = (e) => {
    if (!userForm.roles.includes(selectedRole)) {
      e.preventDefault();
      setUserForm({ ...userForm, roles: [...userForm.roles, selectedRole] });
    } else {
      e.preventDefault();
    }
  };
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",

    roles: [],
    username: "",

    firstname: "",
    surname: "",
  });
  const createUserHandler = (e) => {
    e.preventDefault();

    dispatch(
      createUser(
        userForm.email,
        userForm.password,
        userForm.roles,
        userForm.username,
        userForm.firstname,
        userForm.surname
      )
    ).then(() => navigate("/admin"));
  };

  return (
    <>
      <form
        action=""
        className="forms col-8 d-flex flex-column justify-content-center"
      >
        <h3 className="text-center">Обязательные данные</h3>
        <input
          onChange={(e) =>
            setUserForm({ ...userForm, username: e.target.value })
          }
          value={userForm.username}
          className="input"
          type="text"
          placeholder="Имя пользователя"
        />
        <input
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
          className="input"
          type="text"
          placeholder="Email"
          value={userForm.email}
        />
        <input
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Пароль"
          value={userForm.password}
        />

        <p className="my-1 d-flex">
          {userForm.roles
            ? userForm.roles.map((el) => (
                <li className="d-inline mx-2">{el}</li>
              ))
            : "Роли пользователя"}
        </p>
        <div className="d-flex">
          <DropdownButton title={selectedRole}>
            {roles.map((el) => (
              <Dropdown.Item onClick={() => selectRole(el)}>{el}</Dropdown.Item>
            ))}
          </DropdownButton>
          <button onClick={(e) => addRole(e)} className="w-25 mx-2">
            Добавить роль
          </button>
        </div>
        <h3 className="text-center mt-3">Дополнительные данные</h3>
        <input
          onChange={(e) =>
            setUserForm({ ...userForm, firstname: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Имя"
          value={userForm.firstname}
        />
        <input
          onChange={(e) =>
            setUserForm({ ...userForm, surname: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Фамилия"
          value={userForm.surname}
        />
        <button className="btn" onClick={(e) => createUserHandler(e)}>
          Создать пользователя
        </button>
      </form>
    </>
  );
};

export default CreateUser;
