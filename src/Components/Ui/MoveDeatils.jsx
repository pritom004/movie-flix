import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function MoveDeatils() {
  const Data = useLoaderData();
  const [activeTab, setActiveTab] = useState("overview"); // State for managing the active tab

  // Content for the "Overview" tab
  const OverviewContent = (
    <>
    <p className="mt-4 ml-4 text-gray-700 text-lg">
      {Data.Plot || "No overview available for this movie."}
    </p>
    <ul className="mt-4 ml-4 text-gray-700 text-lg">
    <li><strong>Genre:</strong> {Data.Genre || "N/A"}</li>
    </ul>
    </>
  );

  // Content for the "Details" tab
  const DetailsContent = (
    <ul className="mt-4 ml-4 text-gray-700 text-lg space-y-4">
      <li><strong>Genre:</strong> {Data.Genre || "N/A"}</li>
      <li><strong>Director:</strong> {Data.Director || "N/A"}</li>
      <li><strong>Actors:</strong> {Data.Actors || "N/A"}</li>
      <li><strong>IMDB Rating:</strong> {Data.imdbRating || "N/A"}/10</li>
      <li><strong>Runtime:</strong> {Data.Runtime || "N/A"}</li>
      <li><strong>Awards:</strong> {Data.Awards	 || "N/A"}</li>
      <li><strong>Boxoffice Collection:</strong> {Data.BoxOffice	 || "N/A"}</li>
    </ul>
  );

  return (
    <div className="flex mt-12 max-w-7xl justify-center mb-16 mx-auto">
      <div className="w-1/2 flex justify-start">
        <img
          src={Data.Poster}
          width={450}
          height={400}
          alt={Data.Title}
          className="ml-8"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <h1 className="text-4xl font-semibold text-indigo-800">{Data.Title}</h1>
        <h2 className="text-2xl ml-2 text-gray-900">{Data.Released}</h2>

        {/* Navigation Tabs */}
        <div className="font-bold flex gap-10 mt-20 ml-4 border-b-2 pb-2 border-gray-700">
          <button
            className={`${
              activeTab === "overview" ? "text-indigo-800 border-b-2 border-indigo-800" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`${
              activeTab === "details" ? "text-indigo-800 border-b-2 border-indigo-800" : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "overview" && OverviewContent}
          {activeTab === "details" && DetailsContent}
        </div>
      </div>
    </div>
  );
}
