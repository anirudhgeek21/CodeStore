import React, { useState, useEffect } from "react";

const dummyBlogs = [
  [
    {
      id: 1,
      title: "Blog1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus, molestiae voluptates eveniet iste placeat incidunt cum veniam consectetur repellendus!",
    },
    {
      id: 2,
      title: "Blog2",
      description: "Lorem ipsum dolorbcaecati incidunt. Expedita commodi sint, dolores unde sequi magnam animi at eaque!",
    },
    
  ],
  [
    {
      id: 1,
      title: "Blog3",
      description: "pisicing elit. Minima temporibus, molestiae voluptates eveniet iste placeat incidunt cum veniam consectetur repellendus!",
    },
    {
      id: 2,
      title: "Blog4",
      description: "ores unde sequi magnam animi at eaque!",
    }
  ],
  [
    {
      id: 1,
      title: "Blog5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus, molestiae voluptates eveniet iste placeat incidunt cum veniam consectetur repellendus!",
    },
    {
      id: 2,
      title: "Blog6",
      description: " unde sequi magnam animi at eaque!",
    }
  ],
];

function FeaturedSection() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPairIndex((prevIndex) => (prevIndex === dummyBlogs.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-[7%]">
      <div className="text-sm text-sky-500 uppercase max-md:max-w-full ml-5 font-bold">
                Featured Code Blogs
              </div>
      <div key={currentPairIndex} className="flex flex-col-reverse md:flex-row pb-4">
        {dummyBlogs[currentPairIndex].map((blog, index) => (
          <div key={index} className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full ">
            <div className="flex text-start flex-col px-5 font-semibold max-md:max-w-full bg-neutral-80 text-zinc-800">
              
              <div className="mt-2 text-5xl text-start space-around tracking-tight leading-12 max-md:max-w-full max-md:text-4xl max-md:leading-10 ">
                {blog.title}
              </div>
              <div className="text-xl text-start mt-7 space-around tracking-tight leading-12 md:max-w-full md:text-xl max-md:leading-10 font-light text-gray-400">
                {blog.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default FeaturedSection;
