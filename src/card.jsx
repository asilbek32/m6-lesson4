import React from "react";

function Card({ name, surname,id, deleteTod, edetTod }) {
  return (
    <div className="flex justify-between items-center p-3 rounded-[8px]  bg-blue-400 mb-5">
      <div className="flex items-center gap-4  rounded  text-white">
        <div>{name}</div>
        <div>{surname}</div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={()=> edetTod({id, name, surname})} className="bg-green-600 px-1 rounded text-white cursor-pointer">
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
