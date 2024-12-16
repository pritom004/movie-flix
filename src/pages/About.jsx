import React from "react";
import { NavLink } from "react-router-dom";
import MovieImage from "../assets/movieposter.jpg";

export default function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-[55%] mb-10 lg:mb-0">
          <h1 className="font-extrabold text-4xl mb-6 text-indigo-600">
            About MovieFlix
          </h1>
          <p className="text-lg leading-relaxed font-medium text-gray-700">
            Welcome to <span className="text-indigo-600 font-semibold">MovieFlix</span>, your ultimate destination for exploring the exciting world of movies! Whether you’re a fan of thrilling action, heartwarming dramas, hilarious comedies, or stunning animations, we’re here to help you discover something you’ll love.
          </p>
          <p className="mt-4 text-lg leading-relaxed font-medium text-gray-700">
            At <span className="text-indigo-600 font-semibold">MovieFlix</span>, we believe movies are more than just entertainment they’re a way to tell stories, spark emotions, and bring people together. That’s why we’ve made it our mission to help you uncover your next unforgettable cinematic experience.
          </p>
          <NavLink to='/movies'>
          <button className="mt-8 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Start Exploring
          </button>
          </NavLink>
          
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <img
            src={MovieImage}
            alt="Movie Flix"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
