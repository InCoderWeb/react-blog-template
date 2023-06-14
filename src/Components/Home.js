import { useState } from "react";
import { PostCard } from "./PostCard";
import { HorizontalPostCard } from "./HorizontalPostCard";
import { Sidebar } from "./Sidebar";
import { FaChevronRight } from "react-icons/fa";

export const Home = (props) => {
  const featuredPostData = {
    1: {
      image: "https://source.unsplash.com/random/?sun&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2023",
    },
    2: {
      image: "https://source.unsplash.com/random/?space&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2023",
    },
    3: {
      image: "https://source.unsplash.com/random/?hills&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2023",
    },
    4: {
      image: "https://source.unsplash.com/random/?cars&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2023",
    },
    5: {
      image: "https://source.unsplash.com/random/?ship&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2025",
    },
    6: {
      image: "https://source.unsplash.com/random/?Cryptocurrency&2",
      title: "Create a Weather App with HTML, CSS, and JavaScript",
      author: "Ashutosh Tiwari",
      time: "April 14, 2023",
    },
  };
  return (
    <>
      <div className="mainContainer">
        {/* ------------------------ Hero Featured Posts ------------------------ */}
        <div className="featuredPosts">
          <div className="featuredItems">
            {Object.values(featuredPostData).map((data, index) => {
              return (
                <PostCard
                  url={data.image}
                  title={data.title}
                  author={data.author}
                  time={data.time}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        {/* ------------------------ Hero Featured Posts End ------------------------ */}

        <div className="mainContentContainer mt-[2rem]">
          <div className="mainContent">
            <div className="title flex items-center dark:text-lightText mx-[1rem]">
              Read More <FaChevronRight />
            </div>
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
            <HorizontalPostCard />
          </div>
          <Sidebar/>
        </div>
      </div>
    </>
  );
};
