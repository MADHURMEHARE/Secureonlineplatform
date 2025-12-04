import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../../../data/courses.json";

function Sidebar() {
  const { id, num } = useParams();

  const course = courses.find((c) => c.id === id);

  return (
    <div className="w-72 h-screen border-r bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{course.title} – Chapters</h2>

      <ul className="space-y-2">
        {course.chapters.map((ch) => (
          <li key={ch.chapter}>
            <Link
              to={`/course/${id}/chapter/${ch.chapter}`}
              className={`block px-3 py-2 rounded-md ${
                num == ch.chapter
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {ch.chapter}. {ch.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
