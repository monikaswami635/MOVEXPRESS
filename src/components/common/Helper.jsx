import blogimage1 from '../../assets/images/blogimage1.webp';
import blogimage2 from '../../assets/images/blogimage2.webp';
import blogimage3 from '../../assets/images/blogimage3.webp';
import { Learnmoreicon } from './Icon';

export const blogcards = [
  {
    id: 1,
    img: blogimage1,
    title: 'How To Pack Fragile Items for Moving?',
    description:
      'Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 2,
    img: blogimage2,
    title: 'How to Make a Booking with Us?',
    description:
      'With MovExpress, booking a Man and van service is simple, quick, and efficient. Moving all your  the few steps below to book your van and hit the road quickly...',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 3,
    img: blogimage3,
    title: 'How to Declutter Before Moving?',
    description:
      'Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..  ',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
];

//SERVICE-SECTON CARDS

import {
  Furnitureitemsvg,
  Houseremovalsvg,
  Officemovesvg,
  Pianotransportsvg,
  Storageremovalsvg,
  Vanservicessvg,
} from './Icon';

export const servicesectioncards = [
  {
    id: 1,
    Icon: Vanservicessvg,
    title: 'Man & Van Services',
    description:
      'A convenient and flexible moving solution typically offered by a single professional or a small team with a van',
  },
  {
    id: 2,
    Icon: Houseremovalsvg,
    title: 'House Removals',
    description:
      'House removals refer to the process of moving (packing, loading, transporting, unloading) from one residence to another.',
  },
  {
    id: 3,
    Icon: Furnitureitemsvg,
    title: 'Furniture & Large Items',
    description:
      'Furniture delivery is a service focused on transporting furniture items from sellers or retailers to customers homes.',
  },
  {
    id: 4,
    Icon: Pianotransportsvg,
    title: 'Piano Transport',
    description:
      'Piano transport involves the specialized and meticulous relocation of pianos from one location to another.',
  },
  {
    id: 5,
    Icon: Storageremovalsvg,
    title: 'Storage Removals',
    description:
      'Storage removal refers to the process of relocating items to or from a storage facility. This service is designed to assist',
  },
  {
    id: 6,
    Icon: Officemovesvg,
    title: 'Office Move',
    description:
      'Office move is the comprehensive process of moving a business from one physical location to another.',
  },
];

//WORK-SECTION CARDS
import { Step1, Step2, Step3, Step4 } from './Icon';
export const worksectioncards = [
  {
    id: 1,
    Icon: Step1,
    name: 'Step 1',
    title: 'Get a Quote',
    description: 'Input your details for a tailored quotation',
  },
  {
    id: 2,
    Icon: Step2,
    name: 'Step 2',
    title: 'Schedule',
    description: 'Confirm a delivery date and time',
  },
  {
    id: 3,
    Icon: Step3,
    name: 'Step 3',
    title: 'Delivery',
    description: 'We’ll do all the heavy lifting',
  },
  {
    id: 4,
    Icon: Step4,
    name: 'Step 4',
    title: 'Sit Back',
    description: 'Enjoy your new space, stress-free',
  },
];

//CUSTOMER-SECTION-CARDS
import {
  Experteamsvg,
  Fixedpricesvg,
  Ratingsvg,
  Trustworthyicon,
} from './Icon';
export const customersectioncards = [
  {
    id: 1,
    Icon: Experteamsvg,
    title: 'Many Years of Experience',
    description: 'We are an established Company',
  },
  {
    id: 2,
    Icon: Fixedpricesvg,
    title: 'Fixed Prices',
    description: 'No hidden fees, transparent prices',
  },
  {
    id: 3,
    Icon: Trustworthyicon,
    title: 'Trustworthy',
    description: 'We are insured and lincensed',
  },
  {
    id: 4,
    Icon: Ratingsvg,
    title: '5-Star Rating',
    description: 'Rated 4.9 on Trustpilot',
  },
];

//CLIENTS-CARDS
import person1 from '../../assets/images/person1.webp';
import person2 from '../../assets/images/person2.webp';
import person3 from '../../assets/images/person3.webp';
import { Fivestarsvg } from './Icon';
export const clientscards = [
  {
    id: 1,
    img: person1,
    name: 'Zachary John',
    title: 'Regular Customar',
    Icon: Fivestarsvg,
    description:
      '“From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.”',
  },
  {
    id: 2,
    img: person2,
    name: 'Gail Amethyst',
    title: 'Regular Customar',
    Icon: Fivestarsvg,
    description:
      '“From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.”',
  },
  {
    id: 3,
    img: person3,
    name: 'Scott William',
    title: 'Regular Customar',
    Icon: Fivestarsvg,
    description:
      '“From the first contact to the completion of the cleaning, the service was top-notch. The team is friendly, professional, and very.”',
  },
];

//TEAM-SECTION-CARDS
import { Affordablepricesvg, Certifiedsvg, Protectionsvg } from './Icon';
export const teamsectioncards = [
  {
    id: 1,
    Icon: Affordablepricesvg,
    title: 'Affordable Price',
    description:
      'we offer competitive and transparent pricing to fit your budget. No hidden fees, no surprises — just affordable rates.',
  },
  {
    id: 2,
    Icon: Experteamsvg,
    title: 'Expert Team',
    description:
      'From packing delicate items to lifting heavy furniture, our experts ensure every step of your move is handled flawlessly.',
  },
  {
    id: 3,
    Icon: Protectionsvg,
    title: 'Safety & Protection',
    description:
      'We know your possessions are valuable both financially and emotionally. That’s why we take extra precautions to their safety.',
  },
  {
    id: 4,
    Icon: Certifiedsvg,
    title: '100% Certified',
    description:
      'Our certifications reflect our commitment to quality, reliability, and industry standards, so you can trust us',
  },
];

//SERVICE-DESIGNED-CARDS
import { Distancemovesvg } from './Icon';
export const servicedesignedcards = [
  {
    id: 1,
    Icon: Houseremovalsvg,
    title: 'Residential Moves',
    description: 'Helping families relocate without stress.',
  },
  {
    id: 2,
    Icon: Officemovesvg,
    title: 'Office Relocations',
    description: 'Smooth transitions with minimal downtime.',
  },
  {
    id: 3,
    Icon: Furnitureitemsvg,
    title: 'Furniture Handling',
    description: 'Special care for fragile, heavy, or oversized items.',
  },
  {
    id: 4,
    Icon: Distancemovesvg,
    title: 'Long-Distance Moves',
    description: 'Reliable transportation wherever you’re headed.',
  },
];

// WHY-CHOOSE-CARDS
import { Bookingoptionsvg } from './Icon';
export const whychoosecards = [
  {
    id: 1,
    Icon: Affordablepricesvg,
    title: 'Affordable & Transparent Pricing',
    description: 'Moving services starting from just £25.',
  },
  {
    id: 2,
    Icon: Experteamsvg,
    title: 'Professional Movers & Drivers',
    description: 'Experienced teams handle every item',
  },
  {
    id: 3,
    Icon: Protectionsvg,
    title: 'Hassle-Free Experience',
    description: 'We load, transport, and unload you do nothing.',
  },
  {
    id: 4,
    Icon: Distancemovesvg,
    title: 'Local & Nationwide Coverage',
    description: 'Whether around the corner or across the UK',
  },
  {
    id: 5,
    Icon: Bookingoptionsvg,
    title: 'Flexible Booking Options',
    description: 'Service to suit your schedule.',
  },
];

// SERVICES-INCLUDE-CARDS

export const servicesincludecards = [
  {
    id: 1,
    Icon: Houseremovalsvg,
    title: 'Home & Office Removals',
    description:
      'Relocating your home or workspace? We ensure a smooth, secure, and organized move with minimal disruption.',
  },
  {
    id: 2,
    Icon: Vanservicessvg,
    title: 'Student Moves',
    description:
      'Perfect for students relocating between accommodations. Budget-friendly and convenient solutions for smaller moves.',
  },
  {
    id: 3,
    Icon: Furnitureitemsvg,
    title: 'Furniture & Large Items',
    description:
      'Need to transport bulky furniture or oversized parcels? Our vans are fully equipped to handle heavy and delicate items safely.',
  },
  {
    id: 4,
    Icon: Furnitureitemsvg,
    title: 'Single-Item & Bulk Transport',
    description:
      'From a single sofa to an entire flat, we provide customized transport solutions based on your needs.',
  },
];

// BLOG-SECTION-CARDS

export const blogsectioncards = [
  {
    id: 1,
    img: blogimage1,
    title: 'How To Pack Fragile Items for Moving?',
    description:
      'Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 2,
    img: blogimage2,
    title: 'How to Make a Booking with Us?',
    description:
      'With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 3,
    img: blogimage3,
    title: 'How to Declutter Before Moving?',
    description:
      'Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 4,
    img: blogimage1,
    title: 'How To Pack Fragile Items for Moving?',
    description:
      'Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 5,
    img: blogimage2,
    title: 'How to Make a Booking with Us?',
    description:
      'With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 6,
    img: blogimage3,
    title: 'How to Declutter Before Moving?',
    description:
      'Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
  {
    id: 7,
    img: blogimage1,
    title: 'How To Pack Fragile Items for Moving?',
    description:
      'Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires....',
    button: 'Learn More',
    Icon: Learnmoreicon,
  },
];
// FAQ-SECTION-CARDS

export const faqData = [
  {
    id: 1,
    question: 'Will I have to pay the Charge in London?',
    answer:
      'We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.',
  },
  {
    id: 2,
    question: 'Does my quote include VAT?',
    answer:
      'No VAT charges are added to your quotes, this is because all of the drivers on our platform are self employed and incorporate any overheads into their pricing structure.',
  },
  {
    id: 3,
    question: 'Do my quotes include ferry costs?',
    answer:
      'If your driver needs to use a ferry to complete your move, they will ask for additional charges on the day.',
  },
  {
    id: 4,
    question: 'Do drivers dismantle and re-assemble items?',
    answer:
      'This is up to the driver! The majority of our drivers will come with equipment to help dismantle and re-assemble your items.',
  },
];
