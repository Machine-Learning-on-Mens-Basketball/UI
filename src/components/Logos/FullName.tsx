import React from "react";

export const FullName: React.FC = () => (
  <>
    <h1
      className="mt-16 text-5xl text-center md:text-7xl"
      style={{
        fontFamily: "Legacy Regular",
        color: "#f57c00",
        whiteSpace: "nowrap",
      }}
    >
      Machine Learning <br />{" "}
      <span className="text-4xl text-blue-700 md:text-6xl">on </span>
      Men&apos;s Basketball
    </h1>
  </>
);
