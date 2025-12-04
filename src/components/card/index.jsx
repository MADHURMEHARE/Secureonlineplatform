import React from "react";
import { Link } from "react-router-dom";

function Card({ title, img, id }) {
  return (
    <Link
      to={`/course/${id}`}
      className="cursor-pointer block bg-white shadow-md rounded-lg p-4 hover:scale-105 transition"
    >
      <div className="flex justify-center">
        <img src={img} alt={title} className="w-24 h-24 object-contain" />
      </div>

      <h1 className="text-center text-xl font-semibold mt-4">{title}</h1>
    </Link>
  );
}

export default Card;
