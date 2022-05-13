import React from "react";
import "./index.css";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(
      evt.target.select.value,
      evt.target.name.value,
      evt.target.myId.value,
      evt.target.checked.value,
      evt.target.myfile.value
    );
    evt.target.select.value = "";
    evt.target.name.value = "";
    evt.target.myId.value = "";
    evt.target.checked.value = "";
    evt.target.myfile.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="heading">Create Table</h3>
      <hr />
      <div className="divs">
        <label for="cars" className="labels">
          Layout:
        </label>
        <select name="select" id="select" className="myInputs">
          <option value="volvo">Select Layout</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="divs">
        <label for="name" className="labels">
          Name:
        </label>
        <input placeholder="Enter Name" name="name" className="myInputs" />
      </div>
      <div className="divs">
        <label for="name" className="labels">
          Capacity:
        </label>
        <input
          placeholder="Enter Number of Capacity"
          name="myId"
          className="myInputs"
          style={{ marginLeft: "-20px" }}
        />
      </div>
      <div className="divs">
        <label for="name" className="labels">
          Status:
        </label>
        <input type="checkbox" name="checked" value="true" />
      </div>
      <br />{" "}
      <div className="divs">
        <label for="myfile" className="labels">
          Image:
        </label>
        <input type="file" id="myfile" name="myfile"></input>
      </div>
      <br />
      <div className="divs" style={{ marginLeft: "380px" }}>
        <button onSubmit={handleOnSubmit} className="createTable">
          Create table
        </button>
        <button className="cancel">Cancel</button>
      </div>
      <hr />
    </form>
  );
};
