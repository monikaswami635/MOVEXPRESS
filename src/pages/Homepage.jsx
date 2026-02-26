import React from 'react';
import Herosection from '../components/Herosection';
import Servicesection from '../components/Servicesection';
import Worksection from '../components/Worksection';
import Customersection from '../components/Customersection';
import Clients from '../components/Clients';
import Faqsection from '../components/Faqsection';
import Blogsection from '../components/Blogsection';
import Vansection from '../components/Vansection';
function Homepage() {
  return (
    <>
      <Herosection />
      <Servicesection />
      <Worksection />
      <Customersection />
      <Clients />
      <Faqsection />
      <Blogsection />
      <Vansection />
    </>
  );
}

export default Homepage;
