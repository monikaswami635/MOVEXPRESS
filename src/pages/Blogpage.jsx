import React from 'react';
import Vansection from '../components/Vansection';
import Newsection from '../components/Newsection';
import Blognewsection from '../components/Blognewsection';

function Blogpage() {
  return (
    <>
      <Newsection heading="Our Blogs and News" />
      <Blognewsection />
      <Vansection />
    </>
  );
}

export default Blogpage;
