import React from 'react';
import Servicesection from '../components/Servicesection';
import Worksection from '../components/Worksection';
import Professional from '../components/Professional';
import Faqsection from '../components/Faqsection';
import Blogsection from '../components/Blogsection';
import Vansection from '../components/Vansection';
import Servicespart from '../components/Servicespart';

function Servicespage() {
  return (
    <>
      <Servicespart heading="MoveXpress Services" />
      <Servicesection />
      <Worksection />
      <Professional />
      <Faqsection />
      <Blogsection />
      <Vansection />
    </>
  );
}

export default Servicespage;
