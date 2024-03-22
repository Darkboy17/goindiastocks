"use client";

import Image from "next/image";

import React from "react";
import ForumCard from "./ForumCard";
import MSCard from "./MSCard";

export default function Dashboard() {
  // Create an array of 4 elements to loop over
  const forumCards = Array.from({ length: 4 });
  const msCards = Array.from({ length: 3 });

  return (
    <div className="flex">
      <div className="w-auto">
        <h1>Discussion Forum</h1>

        {forumCards.map((_, index) => (
          <ForumCard key={index} />
        ))}
      </div>

      <div className="ml-2">
        <h1>Market Stories</h1>
        {msCards.map((_, index) => (
          <div key={index} className="mb-4">
            <MSCard key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
