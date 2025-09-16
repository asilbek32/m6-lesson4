import React, { act, useRef, useState } from "react";
import Card from "./card";

function Todo() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem("info")) || []
  );
  const [currentId, setId] = useState(0);
  const [search, setSearch] = useState("");
  const edetTod = ({ id, name, surname }) => {
    nameRef.current.value = name;
    surnameRef.current.value = surname;
    setId(id);
    setActive(true);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!active) {
      let data = [
        {
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          id: Date.now(),
          createdAt: new Date().toLocaleString(),
          updatedAt: null,
          done: false,
        },
        ...value,
      ];
      setValue(data);
      localStorage.setItem("info", JSON.stringify(data));
    } else {
      let new_data = value.map((item) =>
        item.id === currentId
          ? {
              ...item,
              name: nameRef.current.value,
              surname: surnameRef.current.value,
              updatedAt: new Date().toLocaleString(),
            }
          : item
      );
      setValue(new_data);
      localStorage.setItem("info", JSON.stringify(new_data));

      setActive(false);
    }

    setActive(false);

    nameRef.current.value = "";
    surnameRef.current.value = "";
  };

  const deleteTod = (id) => {
    let new_date = value.filter((item) => item.id !== id);
    localStorage.setItem("info", JSON.stringify(new_date));
    setValue(new_date);
  };

  const toggleDone = (id) => {
    let new_data = value.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setValue(new_data);
    localStorage.setItem("info", JSON.stringify(new_data));
  };

  const doneCount = value.filter((item) => item.done).length;
  const progress = value.length
    ? Math.round((doneCount / value.length) * 100)
    : 0;

  return (
    <div className="w-[60%] m-auto py-5 mt-6">
      <form onSubmit={submit} className="flex flex-col gap-5 ">
        <input
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1 shadow"
          placeholder="Name"
          required
        />
        <input
          ref={surnameRef}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          className="border border-gray-500 rounded outline-none px-2 py-1 shadow"
          placeholder="Surname"
          required
        />
        <button className="bg-blue-500 rounded-lg text-white py-1 cursor-pointer w-[20%] ">
          {active ? "etet" : "add"}
        </button>
      </form>

      <div className="mt-4">
        <div className="h-4 bg-gray-200 rounded">
          <div
            className="h-4 bg-green-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">
          Progress: {doneCount}/{value.length} ({progress}%)
        </p>
      </div>

      <div className="mt-5">
        {value.map((item) => {
          return (
            <Card
              key={item.id}
              {...item}
              deleteTod={deleteTod}
              edetTod={edetTod}
              toggleDone={toggleDone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
