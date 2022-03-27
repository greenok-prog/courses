import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeUserData, createUser, getUserData } from "../store/actions/user";

const ChangeUser = () => {
  const roles = ["ADMIN", "USER", "TEACHER"];
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  useEffect(() => {
    dispatch(getUserData(params.id));
  }, []);

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

    roles: [],
    username: "",

    firstName: "",
    secondName: "",
  });
  const changeUserHandler = (e) => {
    e.preventDefault();

    dispatch(
      changeUserData(
        userData._id,
        userForm.email,
        userForm.roles,
        userForm.username,
        userForm.firstName,

        userForm.secondName
      )
    ).then(() => navigate("/admin"));
  };

  const loadUserData = (e) => {
    e.preventDefault();
    setUserForm(userData);
  };
  console.log(userForm.roles);
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

        <p className="my-1 d-flex">
          {userForm.roles
            ? userForm.roles.map((el) => (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setUserForm({
                      ...userForm,
                      roles: userForm.roles.filter((role) => role !== el),
                    })
                  }
                  className="d-inline mx-2"
                >
                  {el}
                </li>
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
            setUserForm({ ...userForm, firstName: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Имя"
          value={userForm.firstName}
        />
        <input
          onChange={(e) =>
            setUserForm({ ...userForm, secondName: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Фамилия"
          value={userForm.secondName}
        />
        <div className="row">
          <button className="btn col-6" onClick={(e) => changeUserHandler(e)}>
            Изменить пользователя
          </button>
          <button className="btn col-6" onClick={(e) => loadUserData(e)}>
            Загрузить данные
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangeUser;
