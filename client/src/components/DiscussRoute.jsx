import React, { Fragment } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards';
import Categories from './CollegePage/CategoryDiscussion';
import Featured from './featured/FeaturedSection';
import Navigation from './Navigation';

function App() {
  return (
    <Fragment>
        <Navigation />
        <div className='w-[90%] mx-auto'>
        <div className='mt-10 mb-0'>
          <Categories name="Discussion"/>
        </div>
        <div className='mt-[-3%]'>
          <Featured name="Featured Discussions" />
        </div>
        
        {/* <DiscussTodo /> */}
        
        <div className="card mt-[-2%]">
          <DiscussionCards />
        </div>
        </div>
    </Fragment>
  );
}

export default App;
