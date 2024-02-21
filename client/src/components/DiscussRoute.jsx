import React, { Fragment } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards';
import Categories from './Category';
import Featured from './featured/FeaturedSection';

function App() {
  return (
    <Fragment>
        <div className='w-[90%] mx-auto'>
        <div className='mt-20 mb-10'>
          <Categories name="Discussion"/>
        </div>
        <Featured name="Discussions" />
        
        <DiscussTodo />
        
        <DiscussionCards />
        </div>
    </Fragment>
  );
}

export default App;
