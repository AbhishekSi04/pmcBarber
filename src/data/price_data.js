// data/price_data.js

const price_data = [
    {
      tag: 'Most Popular',
      title: 'Classic Services',
      price: 25,
      billingCycle: '/mo',
      features: [
        "Men's Haircut",
        "Kids Haircut (12 & under)",
        "Senior Haircut (65+)",
        "Military/First Responder Cut",
        "Basic Beard Trim",
        "Neck & Line Cleanup (between cuts)",
      ],
      buttonText: 'Book Now',
      isFeatured: true,
    },
    {
      title: 'Premium Services',
      price: 35,
      billingCycle: '/mo',
      features: [
        "Haircut & Beard Combo",
        "Hot Towel Shave",
        "Full Beard Shaping & Design",
        "Color Camo (Gray Blending)",
        "Hair & Scalp Treatment",
        "Head Shave with Hot Towel",
      ],
      buttonText: 'Book Now',
      isFeatured: false,
    },
    {
      title: 'Packages',
      price: 50,
      billingCycle: '/mo',
      features: [
        "The Works (Cut, Shave, Treatment)",
        "Father & Son Combo",
        "Groom's Package",
        "Monthly Membership (2 cuts/mo)",
        "First-Time Client Special",
        "Loyalty Program",
      ],
      buttonText: 'Inquire',
      isFeatured: false,
    },
  ];
  
  export default price_data;
  