import React, { Fragment } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards'

function App() {
  return (
    <Fragment>
        <div className='w-[90%] mx-auto'>
        <DiscussTodo />
        <DiscussionCards />
        </div>
    </Fragment>
  );
}

export default App;
