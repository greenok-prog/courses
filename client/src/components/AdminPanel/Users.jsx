import React from "react";
import { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Table,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/user";

function Users({ users }) {
  const [searchBy, setSearchBy] = useState("Искать по");
  const [searchValue, setsearchValue] = useState("");
  const dispatch = useDispatch();

  const values = ["email", "username", "_id", "firstName", "secondName"];
  const searchedUsers = values.includes(searchBy)
    ? users.filter((el) => el[searchBy]?.includes(searchValue))
    : users;

  return (
    <div className="container">
      <InputGroup
        type="search"
        onChange={(e) => setsearchValue(e.target.value)}
        className="text-dark"
      >
        <FormControl />
      </InputGroup>
      <DropdownButton className="search_dropdown mb-3" title={searchBy}>
        {values.map((el, index) => (
          <Dropdown.Item key={index} onClick={() => setSearchBy(el)}>
            {el}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      {searchedUsers.length ? (
        <Table striped bordered hover>
          <thead>
            <tr className="bg-secondary">
              <th>_id</th>
              <th>email</th>
              <th>username</th>
              <th>firstname</th>
              <th>last name</th>
              <th>roles</th>
              <th>actions</th>
            </tr>

            {searchedUsers.map((user, index) => (
              <tr key={index}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.secondName}</td>
                <td>{user.roles.map((el, index) => el)}</td>
                <td className="d-flex justify-content-around">
                  <button className="btn">Изменить</button>
                  <button
                    className="btn"
                    onClick={() => dispatch(deleteUser(user._id))}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      ) : (
        <h3 style={{ textAlign: "center" }}>Ничего не найдено</h3>
      )}
    </div>
  );
}

export default Users;
