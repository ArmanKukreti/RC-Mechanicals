import React from "react";

const CoreValues = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ padding: "60px 20px", marginTop: "50px" }}
    >
      {/* Title */}
      <h2
        className="text-3xl md:text-5xl font-bold text-black"
        style={{ marginBottom: "10px" }}
      >
        Core Values
      </h2>

      {/* Underline */}
      <div
        className="bg-indigo-600 w-full max-w-xl h-[3px] rounded-xl"
        style={{ marginBottom: "50px" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Value 1 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-handshake"></i>
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"
            style={{ marginBottom: "8px" }}
          >
            Integrity
          </h3>
          <p className="text-gray-600">
            Upholding the highest ethical standards in all our dealings.
          </p>
        </div>

        {/* Value 2 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-lightbulb"></i>{" "}
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"
            style={{ marginBottom: "8px" }}
          >
            Innovation
          </h3>
          <p className="text-gray-600">
            Continuously seeking new and better ways to solve challenges.
          </p>
        </div>

        {/* Value 3 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-shield-alt"></i>{" "}
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"
            style={{ marginBottom: "8px" }}
          >
            Safety
          </h3>
          <p className="text-gray-600">
            Prioritizing the well-being of our team and clients above all else.
          </p>
        </div>

        {/* Value 4 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-yellow-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-users"></i>{" "}
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"
            style={{ marginBottom: "8px" }}
          >
            Collaboration
          </h3>
          <p className="text-gray-600">
            Working together to achieve common goals and share success.
          </p>
        </div>

        {/* Value 5 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-red-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-rocket"></i>{" "}
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"
            style={{ marginBottom: "8px" }}
          >
            Excellence
          </h3>
          <p className="text-gray-600">
            Striving for the highest quality in every aspect of our work.
          </p>
        </div>

        {/* Value 6 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300" style={{padding: '24px'}}>
          <div
            className="w-16 h-16 bg-indigo-500 text-white flex items-center justify-center rounded-full text-2xl"
            style={{ marginBottom: "16px" }}
          >
            <i className="fas fa-tools"></i>{" "}
          </div>
          <h3
            className="text-xl font-semibold text-gray-900"

            style={{ marginBottom: "8px" }}
          >
            Precision
          </h3>
          <p className="text-gray-600">
            Executing with meticulous accuracy and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
