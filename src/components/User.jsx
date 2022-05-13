import React, { useState } from "react";
import "./index.css";

export const User = ({
  id,
  myId,
  name,
  checked,
  myfile,
  select,
  onEdit,
  onDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(
      id,
      evt.target.myId.value,
      evt.target.name.value,
      evt.target.email.value,
      evt.target.checked.value,
      evt.target.myfile.value
    );
    setIsEdit(!isEdit);
  };

  return (
    <div className="list">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit} className="displayForm">
          <select name="cars" id="cars">
            <option value="select">Select Layout</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>{" "}
          <input placeholder="Name" name="name" defaultValue={name} />{" "}
          <input placeholder="Email" name="email" defaultValue={myId} />{" "}
          <input type="checkbox" name="vehicle1" defaultvalue={true} />{" "}
          <input type="file" id="myfile" name="myfile"></input>
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{select}</span>{" "}
          <span className="user-name">{name}</span>{" "}
          <span className="user-email">{myId}</span>{" "}
          <span className="user-email">{checked ? "true" : "false"}</span>{" "}
          <span className="user-email">{myfile}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
