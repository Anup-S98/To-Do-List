import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListItems from "./ListItems";

function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const Addfields = (e) => {
    setItem(e.target.value);
  };

  const Additem = (e) => {
    setItemArr((preItem) => {
      return [...preItem, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />

          <h1> ToDo List </h1>

          <br />

          <input
            type="text"
            value={item}
            placeholder="Add an Items"
            onChange={Addfields}
          />

          <Button onClick={Additem} className="newBtn">
            <AddIcon />
          </Button>

          <br />

          <ol>
            {itemArr.map((element, index) => {
              return <ListItems list={element} key={index} />;
            })}
          </ol>

          <br />
        </div>
      </div>
    </>
  );
}

export default App;
