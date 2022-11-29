import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItems = (props) => {
    const [itemDel,setItemDel] = useState(false); 

    const LineThrough=()=>{
        setItemDel(!itemDel);
    }
  return (
    <>
      <div className="todo_style">
        <span onClick={LineThrough} ><DeleteIcon className="deleteIcon"/></span>
        <li style= {{textDecoration : itemDel ? "line-through" : "none"}}>{props.list}</li>
      </div>
    </>
  );
};
export default ListItems;
