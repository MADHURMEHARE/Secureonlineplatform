import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../../data/courses.json";
import Sidebar from "./Sidebar";

function Chapter() {
  const { id, num } = useParams();

  const course = courses.find((c) => c.id === id);
  if (!course) return <h1>Course Not Found</h1>;

  const chapter = course.chapters.find((ch) => ch.chapter == num);
  if (!chapter) return <h1>Chapter Not Found</h1>;

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white">{chapter.title}</h1>
        <p className="text-white  mt-3">{chapter.details}</p>
        {chapter.video ? (
          <div className="mt-6 flex justify-center">
            <iframe
              src={chapter.video}
              width="800"
              height="450"
              className="rounded-lg shadow-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-red-500 mt-6 text-xl font-semibold text-center">
            No video available for this chapter.
          </p>
        )}

      </div>
    </div>
  );
}

export default Chapter;
