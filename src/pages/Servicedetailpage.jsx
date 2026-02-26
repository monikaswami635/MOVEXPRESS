import React from 'react';
import Vanherosection from '../components/Vanherosection';
import Vaninformation from '../components/Vaninformation';
import Whychoose from '../components/Whychoose';
import Professional from '../components/Professional';
import Servicesinclude from '../components/Servicesinclude';
import Clients from '../components/Clients';
import Faqsection from '../components/Faqsection';
import Vansection from '../components/Vansection';

function Servicedetailpage() {
  return (
    <>
      <Vanherosection heading=" Man and Van Services" />
      <Vaninformation />
      <Whychoose />
      <Professional />
      <Servicesinclude />
      <Clients />
      <Faqsection />
      <Vansection />
    </>
  );
}

export default Servicedetailpage;
