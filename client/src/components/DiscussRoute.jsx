import React, { Fragment } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards';
import Categories from './Category';
import Featured from './featured/FeaturedSection';

function App() {
  return (
    <Fragment>
        <div className='w-[90%] mx-auto'>
        <Featured name="Discussions" />
        <Categories name="Discussion"/>
        <DiscussTodo />
        
        <DiscussionCards />
        </div>
    </Fragment>
  );
}

export default App;
