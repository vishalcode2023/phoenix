export const slides = [
  {
    id: 1,
    tag: "Cabin Crew Training",
    headlineParts: ["Begin Your", "Career ", "Above", " the Clouds"],
    // headline: first string, then [gold word], then rest
    headline: {
      before: "Begin Your\nCareer ",
      accent: "Above",
      after: "\nthe Clouds",
    },
    sub: "Master in-flight service, safety protocols, and the art of hospitality at 35,000 feet. Placement support with leading domestic and international carriers.",
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?w=1600&q=80",
    bgPosition: "center top",
    badge: {
      num: "01",
      title: "Cabin Crew",
      desc: "In-flight service & safety",
    },
  },
  {
    id: 2,
    tag: "Ground Handling Operations",
    headline: {
      before: "The Runway\nStarts ",
      accent: "Right",
      after: "\nHere",
    },
    sub: "Learn ramp operations, baggage handling, aircraft marshalling, and airside safety from certified industry professionals with real-world airport exposure.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    bgPosition: "center center",
    badge: {
      num: "02",
      title: "Ground Handling",
      desc: "Ramp & airside operations",
    },
  },
  {
    id: 3,
    tag: "Airport Management",
    headline: {
      before: "Lead the\n",
      accent: "Future",
      after: " of\nAviation",
    },
    sub: "From terminal operations to airline administration — build the management skills that keep modern airports running efficiently and safely around the clock.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80",
    bgPosition: "center 30%",
    badge: {
      num: "03",
      title: "Airport Management",
      desc: "Terminal & airline admin",
    },
  },
  {
    id: 4,
    tag: "Passenger & Customer Service",
    headline: {
      before: "Where Every\nPassenger ",
      accent: "Feels",
      after: "\nWelcome",
    },
    sub: "Specialise in check-in operations, passenger assistance, ticketing, and handling special service requests — the first and last impression of every journey.",
    image:
      "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=1600&q=80",
    bgPosition: "center 20%",
    badge: {
      num: "04",
      title: "Passenger Services",
      desc: "Check-in & ticketing",
    },
  },
];

export const stats = [
  { num: "4,200+", label: "Students Placed" },
  { num: "98%", label: "Placement Rate" },
  { num: "80+", label: "Airline Partners" },
  { num: "12", label: "Years of Excellence" },
  { num: "6", label: "Courses Offered" },
];

export const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#", active: false },
  { label: "Courses", href: "#", active: false, hasDropdown: true },
  { label: "Placements", href: "#", active: false },
  { label: "Contact", href: "#", active: false },
];
