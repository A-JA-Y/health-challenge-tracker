import React, { useEffect, useState } from "react";


function InputData() {
  let [dataArr, setDataArr] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", minutes: "" });
  useEffect(() => {
    let workoutData = localStorage.getItem("workoutData");

    if (workoutData) {
      setDataArr(JSON.parse(workoutData));
    }
  }, []);

  const handleClick = () => {
    setDataArr([...dataArr, form]);
    localStorage.setItem("workoutData", JSON.stringify([...dataArr, form]));
    setForm({ name: "", type: "", minutes: "" });
    console.log([...dataArr, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto">
      <div className="w-full font-gilroy font-medium flex items-center justify-center">
        <div className=" w-1/3">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              className="border border-gray-400 w-full p-2 mb-4 rounded-md"
              placeholder="Enter your name here"
              onChange={handleChange}
            />
          </div>
          <div className="type">
            <label htmlFor="type">Workout Type</label>
            <select
              name="type"
              id="type"
              value={form.type}
              onChange={handleChange}
              className="border border-gray-400 w-full p-2 mb-4 rounded-md"
            >
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
              value={form.minutes}
              onChange={handleChange}
              className="border border-gray-400 w-full p-2 mb-4 rounded-md"
              placeholder=" Enter workout type"
            />
          </div>
          <div className="btn">
            <button
              className=" rounded p-3 px-5 font-bold bg-slate-400 hover:bg-slate-600 hover:text-white hover:scale-95 transition-all"
              onClick={handleClick}
            >
              Add Workout
            </button>
          </div>
          <div className="saved">
            <h2 className="text-2xl font-bold mt-5">Saved Workouts</h2>
            <div className="container mx-auto p-4">
              {dataArr.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                        Name
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                        Workouts
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                        Total Workout Minutes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataArr.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="py-2 px-4 text-sm text-gray-700">
                          {item.name}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-700">
                          {item.type}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-700">
                          {item.minutes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                
              ) : (
                <div className="text-center text-xl mt-4">
                  No data available
                </div>
              )}
            </div>
               
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputData;
