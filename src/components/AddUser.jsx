import React from "react";
import "./index.css";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="heading">Create Table</h3>
      <hr />
      <div className="divs">
        <label for="cars" className="labels">
          Layout:
        </label>
        <select name="cars" id="cars" className="myInputs">
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
          name="email"
          className="myInputs"
          style={{marginLeft:'-20px'}}
        />
      </div>
      <div className="divs">
        <label for="name" className="labels">
          Status:
        </label>
        <input
          type="checkbox"
          name="vehicle1"
          value="Bike"
        />
      </div>
      <br />{" "}
      <div className="divs">

      <label for="myfile" className="labels">
        Image:
      </label>
      <input type="file" id="myfile" name="myfile" ></input>
      </div><br />
      <div className="divs" style={{marginLeft:'380px'}}>
      <button onSubmit={handleOnSubmit} className="createTable">
        Create table
      </button>
      <button className="cancel">Cancel</button>
      </div>
      <hr />
      <p style={{marginLeft:"50px"}}>Note: could not find the api that matches the given form, so cannot update the form accordingly,Thank you</p>
    </form>
  );
};
