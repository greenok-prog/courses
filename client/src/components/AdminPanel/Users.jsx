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
import { Link } from "react-router-dom";
import { deleteUser, getUserData } from "../../store/actions/user";

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
                <td>{user.roles.map((el) => el + " ")}</td>
                <td className="d-flex justify-content-around">
                  <Link
                    to={"/user/" + user._id}
                    className="btn"
                    // onClick={() => dispatch(getUserData(user._id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => dispatch(deleteUser(user._id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
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
