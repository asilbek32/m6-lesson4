import React, { useRef, useState } from "react";
import Card from "./card";

function Todo() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("info")) || []
  );

  const submit = (e) => {
    e.preventDefault();
    let data = [
      ...value,
      {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        id: Date.now(),
      },
    ];
    setValue(data);
    localStorage.setItem("info", JSON.stringify(data));
    setActive(false);
    nameRef.current.value = "";
    surnameRef.current.value = "";
  };

  const deleteTod = (id) => {
    let new_date = value.filter((item) => item.id !== id);
    localStorage.setItem("info", JSON.stringify(new_date));
    setValue(new_date);
  };

  const edetTod = ({ id, name, surname }) => {
    nameRef.current.value = name;
    surnameRef.current.value = surname;
    setActive(true);
  };

  return (
    <div className="w-[60%] m-auto py-5">
      <form onSubmit={submit} className="flex flex-col gap-5">
        <input
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1"
          placeholder="Name"
          required
        />
        <input
          ref={surnameRef}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1"
          placeholder="Surname"
          required
        />
        <button className="bg-blue-500 rounded-lg text-white py-1 cursor-pointer">
          {active ? "etet" : "add"}
        </button>
      </form>

      <div className="mt-5">
        {value.map((item) => {
          return (
            <Card
              key={item.id}
              {...item}
              deleteTod={deleteTod}
              edetTod={edetTod}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
