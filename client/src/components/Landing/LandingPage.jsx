import React from "react";
import Footer from "../Footer";

const LandingPage = ({ onEnterWorld }) => {
  return (
    <div className="h-[100vh] mb-[-2%]">
      <div className="navbar">
        <div className="p-5 bg-blue-600 ">
          <div className="md:flex justify-between md:w-[90%] w-[100%] mx-auto">
            <div className="font-bold text-4xl md:ml-0 ml-[1rem] md:mb-0 mb-3 text-white">
              CodeStore
            </div>
          </div>
        </div>

        <div className="md:text-7xl text-5xl text-center text-sky-100 font-bold mt-[-5%] md:leading-[5rem] h-screen flex flex-col justify-center">
        <div className="my-auto">
            The Ultimate Anonymous <br />
            <span className="text-blue-500">Blogging</span> and <span className="text-blue-500">Discussion</span> website
            <br />
            <div className="mt-12 animate-bounce">
            ↓
            </div>
        </div>
        </div>


        <div className="flex flex-col h-screen justify-center items-center mt-[-21.6%] pb-10">
    <div className="my-auto">
        <div className="w-[74%] text-5xl font-extrabold text-center mt-16 mx-auto text-sky-100">
            Welcome to <span className="text-blue-500">CodeStore</span>
        </div>
        
        <div className="w-[74%] text-4xl font-thin text-blue-300 text-center mt-3 mx-auto">
            Discover the ultimate platform for anonymous blogging and engaging discussions. Join a community where voices are heard, ideas are shared, and anonymity is respected.  
        </div>

        <div className="w-[29%] px-0 py-3 rounded-lg hover:bg-blue-700 duration-100 bg-blue-600 text-3xl font-extrabold text-center mt-12 mx-auto text-sky-100" onClick={onEnterWorld}>
            Enter anonymous world
        </div>
    </div>
</div>

        
      </div>
      <div className=' w-[100%] fixed bottom-0'>
              <Footer />
            </div>
    </div>
  );
};

export default LandingPage;
