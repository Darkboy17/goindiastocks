"use client";

import React from "react";
import cardimg from "../../../public/card-top.jpg";

interface MSCardProps {
  title: string;
  content: string;
  image: string;
}

export default function MSCard({ title, content, image }: MSCardProps) {
  return (
    <div>
      <div className="min-w-auto max-w-auto h-auto ml-5 rounded overflow-hidden shadow-lg">
        <img
          className=" w-auto h-auto object-fit"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="px-4 py-2">
          <div className="font-bold text-sm mb-2">{title}</div>
          <p className="text-gray-700 text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
}
