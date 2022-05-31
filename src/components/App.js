import React from "react";
import "./../styles/App.css";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [tododata, setData] = useState([]);

  // let elm = tododata.map((dataEl) => <li>{dataEl}</li>);

  return (
    <>
      <div id="main">
        <h1>What do you want to do today?</h1>
        <input
          id="task"
          type="text"
          onChange={function (event) {
            setInputVal(event.target.value);
          }}
          value={inputVal}
        />
        <button
          id="btn"
          onClick={function () {
            //! create a new ref
            let copyOfData = tododata.slice();
            //! add the data to the new ref
            copyOfData.push(inputVal);
            //! give the new reference in the state change
            setData(copyOfData);

            setInputVal("");
          }}
        >
          Add
        </button>
        {tododata &&
          tododata.map((dataEl) => (
            <div>
              <li>{dataEl}</li>
              <button className="btn btn-secondary" onClick="">
                Edit
              </button>
              <button className="btn btn-danger" onClick="">
                Delete
              </button>
            </div>
          ))}

        {/* <ol className="list">{tododata}</ol> */}
        {/* <div> */}
        {/* <div> */}
        {/* <span>{item.task}</span> */}
        {/* <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-danger">Delete</button> */}
        {/* </div> */}

        {/* </div> */}
      </div>
    </>
  );
}

export default App;
