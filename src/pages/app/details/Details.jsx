import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import courses from "../../../data/courses.json";

function Details() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  // Show button after animation
  const [showButton, setShowButton] = useState(false);

  // GSAP Refs
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power3.out",
      onComplete: () => {
        // 🔥 Show button after animation
        setShowButton(true);

        // Animate the button when it appears
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.7,
          duration: 0.6,
          ease: "bounce.out",
        });
      },
    });

    tl.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    })
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.6,
        rotate: 10,
        duration: 0.6,
      })
      .from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
      })
      .from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
      });
  }, []);

  if (!course)
    return <h1 className="text-center text-red-500">Course Not Found</h1>;

  return (
    <div
      ref={containerRef}
      className="max-w-3xl mx-auto p-8 text-center 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      rounded-2xl shadow-2xl mt-10 border border-gray-700
      transition-all duration-500"
    >
      {/* IMAGE */}
      <img
        ref={imageRef}
        src={course.img}
        alt={course.title}
        className="w-40 mx-auto drop-shadow-2xl
        transition-all duration-500 transform
        hover:scale-110 hover:rotate-6
        hover:drop-shadow-[0_0_20px_#00aaff]"
      />

      {/* TITLE */}
      <h1
        ref={titleRef}
        className="text-4xl font-extrabold mt-6
        tracking-wide bg-gradient-to-r from-yellow-400 to-green-500 
        bg-clip-text text-transparent drop-shadow-lg animate-pulse"
      >
        {course.title}
      </h1>

      {/* DESCRIPTION */}
      <p
        ref={descRef}
        className="text-black mt-4 text-xl leading-relaxed"
      >
        {course.description}
      </p>

      {/* BUTTON appears AFTER animation finishes */}
      <div className="mt-8">
      {showButton && (
  <Link
    ref={buttonRef}
    to={`/course/${id}/chapter`}
    className="relative px-10 py-4 
      bg-gradient-to-r from-yellow-500 to-purple-600
      text-white rounded-2xl shadow-2xl
      text-2xl font-bold tracking-wide 
      transition-all duration-300
      hover:scale-110 active:scale-95
      border-2 border-white/60
      hover:shadow-[0_0_40px_#7c3aed]
    "
  >
    🚀 View Chapters

    {/* GLOW BEHIND BUTTON */}
    <span className="
      absolute inset-0 rounded-2xl 
      bg-white/20 blur-xl -z-10
    "></span>
  </Link>
)}


      </div>
    </div>
  );
}

export default Details;
