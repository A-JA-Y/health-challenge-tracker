import React, { useState } from "react";

function InputData() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    const name = document.querySelector('input[name="name"]').value;
    const type = document.querySelector('select[name="type"]').value;
    const minutes = document.querySelector('input[name="minutes"]').value;

    setData([...data, { name, type, minutes }]);
  }
  return (
    <div className="w-full font-sans font-medium flex items-center justify-center">
      <div className=" w-1/3">

      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border border-gray-400 w-full p-2 mb-4 rounded-md"
          placeholder="Enter your name here" onChange={(e)=> e.target.value=value}
        />
      </div>
      <div className="type">
        <label htmlFor="type">Workout Type</label>
        <select name="type" id="type" className="border border-gray-400 w-full p-2 mb-4 rounded-md">
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
          <option value="Cardio">Cardio</option>
          <option value="Yoga">Yoga</option>
          
        </select>
      </div>
      <div className="type">
        <label htmlFor="minutes">Workout Minutes</label>
        <input
          type="number"
          name="minutes"
          className="border border-gray-400 w-full p-2 mb-4 rounded-md"
          placeholder=" Enter workout type"
        />
      </div>
      <div className="btn">
        <button className=" rounded p-3 px-5 font-bold bg-slate-400 hover:bg-slate-600 hover:text-white hover:scale-95 transition-all" onClick={handleClick}>Add Workout</button>
      </div>
      </div>
    
    </div>
  );
}

export default InputData;
