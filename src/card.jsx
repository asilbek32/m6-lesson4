import React from "react";

function Card({
  id,
  name,
  surname,
  done,
  deleteTod,
  edetTod,
  toggleDone,
  updatedAt,
  createdAt,
}) {
  return (
    <div className="flex justify-between items-center p-3 rounded-[8px]  bg-blue-400 mb-5">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id)}
          className="w-5 h-5 cursor-pointer"
        />

        <div>
          <p
            className={`${
              done ? "line-through text-gray-500" : ""
            } font-semibold`}
          >
            {name} {surname}
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-2 items-center flex-1">
        <p className="text-xs text-white text-[10px]">
          <span className="text-black">Created:</span> {createdAt}
        </p>
        {updatedAt && (
          <p className="text-xs text-white text-[10px]">
            <span className="text-black">Edited:</span> {updatedAt}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4 ">
        <button
          onClick={() => edetTod({ id, name, surname })}
          className="bg-green-600 px-1 rounded text-white cursor-pointer"
        >
          edet
        </button>
        <button
          onClick={() => deleteTod(id)}
          className="text-white bg-red-600 rounded px-1 cursor-pointer"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Card;
