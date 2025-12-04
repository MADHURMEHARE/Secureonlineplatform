import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import courses from "../../../data/courses.json";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);

      // 👇 Automatically redirect to first chapter
      navigate(`/course/${id}/chapter/1`);
    }, 1200);
  }, [id, navigate]);

  if (!course)
    return <h1 className="text-center text-red-500">Course Not Found</h1>;

  // 🔵 Loading Screen
  if (loading) {
    return (
        <>
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"> </div>
      </div>
      <div> 
        <h1> loading ... </h1>
      </div>
      </>
    );
  }

  return null; // User never sees this page because auto redirect happens
}

export default Details;
