import React from 'react';
import About from '../components/About';
import Team from '../components/Team';
import Information from '../components/Information';
import Servicedesigned from '../components/Servicedesigned';
import Professional from '../components/Professional';
import Faqsection from '../components/Faqsection';
import Blogsection from '../components/Blogsection';
import Vansection from '../components/Vansection';

function Aboutpage() {
  return (
    <>
      <About heading="  About Us" />
      <Team />
      <Information />
      <Servicedesigned />
      <Professional />
      <Faqsection />
      <Blogsection />
      <Vansection />
    </>
  );
}

export default Aboutpage;
