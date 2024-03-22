"use client";

import React from "react";

import { dummyData } from "../data/dummyData";
import { timeAgo } from "../utility";

interface ForumCardProps {
  key:number;
  id: string | number;
  title: string;
  sector: string;
  time: string;
  comment: string;
  likes: number;
  views: number;
  noOfComments: number;
}

export default function ForumCard({
  id,
  title,
  sector,
  time,
  comment,
  likes,
  views,
  noOfComments,
}: ForumCardProps) {
  // Assuming you're looking for a post in the discussionForum array
  const post = dummyData.discussionForum.find(
    (item: { id: any }) => item.id === id
  );

  // Calculate the relative time
  const relativeTime = timeAgo(time);

  // If no post is found, return null or a placeholder
  if (!post) {
    return <div>No post found with id: {id}</div>;
  }

  return (
    <div className=" min-w-auto sm:w-auto rounded overflow-hidden shadow-xl ml-1 h-auto">
      <div className="p-6">
        <div className="flex justify-between shrink-0">
          <div className="flex ">
            <svg
              className="h-8 w-8 text-amber-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h5 className="ml-3 mt-1">{post.title}</h5>
            <span className="min-w-auto h-[30px] ms-6 mt-1 bg-blue-500 text-white text-xs rounded-full px-3 py-1.5">
              {post.sector}
            </span>
          </div>

          <span className="mt-1 ms-5">{relativeTime}</span>
        </div>

        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit pt-1 ml-11">
          {post.comment}
        </p>
      </div>

      {/* The icons for comments, likes, ... */}
      <div className="p-6 pt-0 flex justify-evenly transform scale-75">
        <span className="flex">
          <svg
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="pt-1 ms-1">{post.likes}</span>
        </span>
        <span className="flex">
          <svg
            className="h-8 w-8 text-gray-700"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="2" />{" "}
            <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
            <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
          </svg>
          <span className="pt-1 ms-1">{post.views}</span>
        </span>
        <span className="flex flex-shrink-0">
          <svg
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="pt-1 ms-1">{post.noOfComments}</span>
        </span>
        <span className="flex">
          <svg
            className="h-8 w-8 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" />{" "}
            <circle cx="18" cy="19" r="3" />{" "}
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />{" "}
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span className="pt-1 ms-1">Share</span>
        </span>
      </div>
    </div>
  );
}
