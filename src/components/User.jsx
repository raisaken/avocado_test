import React, { useState } from "react";
import "./index.css";

export const User = ({ username,name, email, id, onEdit, onDelete,address }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div className="list">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit} className="displayForm">
          <select name="cars" id="cars">
            <option value="volvo">Select Layout</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>{" "}
          <input placeholder="Name" name="name" defaultValue={name} />{" "}
          <input placeholder="Email" name="email" defaultValue={email} />{" "}
          <input type="checkbox" name="vehicle1" defaultvalue={true} />{" "}
          <input type="file" id="myfile" name="myfile"></input>
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{username}</span>{" "}
          <span className="user-name">{name}</span>{" "}
          <span className="user-email">{id}</span>{" "}
          <span className="user-email">{id?'true':'false'}</span>{" "}
          <span className="user-email">{address}</span>


          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
