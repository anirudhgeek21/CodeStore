import React, { Fragment } from 'react';
import DiscussTodo from './discussion/DiscussTodo';
import DiscussionCards from './discussion/DiscussionCards'

function App() {
  return (
    <Fragment>
        <DiscussTodo />
        <DiscussionCards />
    </Fragment>
  );
}

export default App;
