import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  // Auto redirect back
  // useEffect(() => {
  //   const timer = setTimeout(() => navigate(-1), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 px-4">
      <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 text-center max-w-lg w-full">

        {/* Animated Emoji */}
        <div className="text-7xl animate-bounce mb-4">😵‍💫</div>

        <h1 className="text-6xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-300 mt-3">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          The page <code className="text-yellow-400">{location.pathname}</code>{" "}
          doesn't exist.  
          <br />
          <span className="text-blue-400 font-semibold">
            Even Google can't find it. 😭
          </span>
        </p>

        {/* Funny Quote */}
        <p className="text-purple-400 mt-4 italic">
          “You didn't break the internet...  
          <br/>just my React routes 💔”
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
          text-white text-lg font-semibold rounded-xl shadow-xl
          hover:scale-110 transition-all duration-300 active:scale-95"
        >
          🏠 Go Home
        </button>

        <p className="text-gray-500 mt-3 text-sm">
          Redirecting you back in 3 seconds…
        </p>
      </div>
    </div>
  );
}

export default Page404;
