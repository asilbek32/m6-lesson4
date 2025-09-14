import React, { useRef, useState } from "react";

function Controllerd() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("info")) || []
  );

  const submit = (e) => {
    e.preventDefault();
    let data = [...value, { name, surname }];
    setValue(data);
    localStorage.setItem("info", JSON.stringify(data)); 
    console.log(data);
  };

  return (
    <div className="w-[60%] m-auto py-5">
      <form onSubmit={submit} className="flex flex-col gap-5">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1"
          placeholder="Name"
        />
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1"
          placeholder="Surname"
        />
        <button className="bg-blue-500 rounded-lg text-white py-1 cursor-pointer">
          add
        </button>
      </form>
    </div>
  );
}

export default Controllerd;
