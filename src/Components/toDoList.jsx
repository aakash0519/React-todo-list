import React, { useState } from "react";
import "./toDoList.css";

  const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    if (inputText.trim() !== "") {
      setUncompletedList([
        ...uncompletedList,
        { text: inputText, id: Date.now() },
      ]);
      setInputText("");
    }
  };

  const handleCheckboxChange = (id, isCompleted) => {
    const itemToMove = isCompleted
      ? completedList.find((item) => item.id === id)
      : uncompletedList.find((item) => item.id === id);

    if (isCompleted) {
      setCompletedList(completedList.filter((item) => item.id !== id));
      setUncompletedList([...uncompletedList, itemToMove]);
    } else {
      setUncompletedList(uncompletedList.filter((item) => item.id !== id));
      setCompletedList([...completedList, itemToMove]);
    }
  };

  return (
    <div className="aih">

    <div className="gx ua arr cez dde">
      <div className="gx tw">
        <div className="alm bbh cdg">
          <div className="arh asc cen">
          <h3 className="avx awf awo axu">Add Your List Item</h3>
          <div className="lb uk avz axq">
            <p>add Todo list items and manage it</p>
          </div>
            <form onSubmit={handleSubmit} className="lj bxo cbf">
              <div className="tn">
                <label for="email" className="t">List Item</label>
                <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} className="lu tn adu afa arp axu bbm bbs bbw bce bgc bnd bne bnq cia cic" placeholder="Type here..." />
              </div>
              <button type="submit" className="lf ly tn yz ze adu ajp are aru avz awf bag bbm bir box boy bpa bph bwe bws bzf">Add</button>
            </form>
          </div>
        </div>
      </div>
    <div className="gx ld mb tv yg aaj aao caq ctd cxj cyo">
    <div className="alm bbh cdg">
          <div className="arh asc cen">
        <h2 className="items-center  text-l font-bold text-green-700">Uncompleted List</h2>
        <ul> {uncompletedList.length>0 ? uncompletedList.map((item) => ( <li key={item.id}>
            <input type="checkbox" id={item.id} onChange={()=> handleCheckboxChange(item.id, false)} /> <label htmlFor={item.id}>{item.text}</label>
          </li> )): "No Task Created"} </ul>
      </div>
      </div>
      <div className="alm bbh cdg">
          <div className="arh asc cen">
      <h2 className="items-center  text-l font-bold text-red-700">Completed List</h2>
       
        <ul className="list-items"> {completedList.length > 0? completedList.map((item) => ( <li key={item.id}>
            <input id={item.id} type="checkbox" checked onChange={()=> handleCheckboxChange(item.id, true)} /> <label htmlFor={item.id}>{item.text}</label>
          </li> )): "No Task Completed"} </ul>
      </div>
      </div>
    </div>
    </div>
  

</div>
  );
};

export default ToDoList;
