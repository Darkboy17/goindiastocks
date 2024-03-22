"use client";

// src/app/page.tsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ForumCard from "./components/ForumCard";
import MSCard from "./components/MSCard";
import { Tabs } from "./components/Tabs";

import { dummyData } from "./data/dummyData"; // Import the dummy data

export default function Home() {
  const [activeComponent, setActiveComponent] =
    useState<React.ReactElement | null>(null);

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  // Conditionally apply the 'shifttoggle' class based on the sidebar visibility
  const shifttoggleClass = showSidebar ? "shifttoggle" : "unshifttoggle";

  return (
    <div className="flex h-screen">
      {/* Sidebar Container */}

      {showSidebar && <Sidebar showSidebar={showSidebar} />}

      {/* Display a button or an icon to toggle sidebar visibility */}
      <div className={`flex items-center h-screen overlay ${shifttoggleClass}`}>
        <button
          className="ml-auto p-2 w-4 h-20 bg-gray-800 text-white"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <svg
              className="w-8 h-8 -ml-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 7L9 12L14 17V7Z" fill="currentColor" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 -ml-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 17L15 12L10 7V17Z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Content Area */}
      <div
        id="content-area"
        className=" flex p-1 overflow-y-auto hide-scrollbar"
      >
        <div className="flex-row">
          <div className="tabsHidden">
            <Tabs>
              {{
                tab1: dummyData.discussionForum.map((post) => (
                  <ForumCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    sector={post.sector}
                    time={post.time}
                    comment={post.comment}
                    likes={post.likes}
                    views={post.views}
                    noOfComments={post.noOfComments}
                  />
                )),
                tab2: dummyData.marketStories.map((story) => (
                  <MSCard
                    key={story.id}
                    title={story.title}
                    content={story.content}
                    image={story.image.src}
                  />
                )),
              }}
            </Tabs>
          </div>

          <div className="normalMode flex">
            <div className="w-3/4">
              <h1 className="mb-5">Discussion Forum</h1>
              {dummyData.discussionForum.map((post) => (
                <ForumCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  sector={post.sector}
                  time={post.time}
                  comment={post.comment}
                  likes={post.likes}
                  views={post.views}
                  noOfComments={post.noOfComments}
                />
              ))}
            </div>

            <div className="w-1/4">
              <h1 className="text-center mb-5">Market Stories</h1>
              {dummyData.marketStories.map((story) => (
                <MSCard
                  key={story.id}
                  title={story.title}
                  content={story.content}
                  image={story.image.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
