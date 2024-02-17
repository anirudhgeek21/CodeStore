import React, { useState, useEffect } from "react";

const dummyBlogs = [
  [
    {
      id: 1,
      title: "Time to disrupt dev",
      description: "Its high time we need to bring in new tools to disrupt the tech industry and change how we use tech in our lives and get ahead with them",
    },
    {
      id: 2,
      title: "Quantum Computing: Revolutionizing Future Technologies",
      description: "Explore quantum computing's potential to transform industries and solve complex problems.",
    },
    
  ],
  [
    {
      id: 1,
      title: "Blockchain: Securing Transactions with Distributed Ledger Technology",
      description: "Delve into the decentralized world of blockchain, its applications, and impact on finance and beyond.",
    },
    {
      id: 2,
      title: "Augmented Reality: Bridging Real and Virtual Worlds",
      description: "Discover how AR is reshaping interactions, entertainment, and education with immersive experiences.",
    }
    
  ],
  [
    {
      id: 1,
      title: "Artificial Intelligence: Powering Innovation Across Industries",
      description: "Uncover AI's role in driving automation, personalization, and breakthroughs in healthcare, finance, and more.",
    },
    {
      id: 2,
      title: "5G Networks: Transforming Connectivity and Communication",
      description: "Learn how 5G is revolutionizing mobile technology, IoT, and enabling new possibilities in communication infrastructure.",
    }
  ]
];

function FeaturedSection() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPairIndex((prevIndex) => (prevIndex === dummyBlogs.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-[7%] bg-black">
      <div className="text-sm text-sky-500 uppercase max-md:max-w-full ml-5 font-bold">
                Featured Code Blogs
              </div>
      <div key={currentPairIndex} className="flex md:gap-7 gap-0 flex-col-reverse md:flex-row pb-4">
        {dummyBlogs[currentPairIndex].map((blog, index) => (
          <div key={index} className="flex border-[0.5px] border-blue-600 py-8 px-5 rounded-lg gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full ">
            <div className="flex text-start flex-col px-5 font-semibold max-md:max-w-full bg-neutral-80 text-white">
              
              <div className="mt-2 md:text-[2.5rem] text-3xl text-start space-around tracking-tight leading-12 max-md:max-w-full max-md:text-4xl max-md:leading-10 ">
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
