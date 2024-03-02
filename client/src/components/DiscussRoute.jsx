import React, { Fragment, useState } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards';
import Categories from './CollegePage/CategoryDiscussion';
import Featured from './featured/FeaturedSection';
import Navigation from './Navigation';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <Navigation />
      <div className='w-[90%] mx-auto'>
        {/* <div className='mt-10 mb-0'>
          <Categories name="Discussion"/>
        </div> */}
        <div className='mt-[-3%]'>
          <Featured name="Featured Discussions" />
        </div>

        <div className='md:w-[20%] w-[90%] mx-auto md:mb-9 mb-7 mt-2 '>
          <button className="bg-blue-700 w-[100%] hover:bg-blue-600 text-white font-bold py-2 text-center mx-auto px-4 rounded" onClick={toggleModal}>
            Start A discussion
          </button>
        </div>

        {showModal && (
          <div className="fixed top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <div className='w-[5.5%] ml-auto'>
                  <button className="w-[100%] mx-auto text-center text-sm py-1  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full" onClick={toggleModal}>
                        X
                  </button>
                </div>
              
              <div className='w-full mt-4'>
                <DiscussTodo />
              </div>
              
            </div>
          </div>
        )}

        <div className="card mt-[-2%]">
          <DiscussionCards />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
