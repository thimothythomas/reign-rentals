export interface Car {
  id: string;
  name: string;
  subtitle: string;
  seats: string;
  transmission: string;
  pricePerDay: string;
  image: string;
  badge?: string;
  category: string;
}

export const featuredCars: Car[] = [
  {
    id: "1",
    name: "Mercedes C 63 AMG",
    subtitle: "4.0L V8 Biturbo · 503 HP",
    seats: "4 seats",
    transmission: "Automatic",
    pricePerDay: "₹23,999",
    image: "/images/cars/mercedes-c63.jpg",
    badge: "Popular",
    category: "Coupe",
  },
  {
    id: "2",
    name: "BMW M4 Competition",
    subtitle: "3.0L TwinPower Turbo · 510 HP",
    seats: "4 seats",
    transmission: "Automatic",
    pricePerDay: "₹21,499",
    image: "/images/cars/bmw-m4.jpg",
    category: "Coupe",
  },
  {
    id: "3",
    name: "Audi RS5 Sportback",
    subtitle: "2.9L TFSI Quattro · 450 HP",
    seats: "5 seats",
    transmission: "Automatic",
    pricePerDay: "₹19,899",
    image: "/images/cars/audi-rs5.jpg",
    category: "Sedan",
  },
  {
    id: "4",
    name: "Porsche 911 Carrera S",
    subtitle: "3.0L Turbocharged Boxer · 443 HP",
    seats: "2 seats",
    transmission: "Automatic",
    pricePerDay: "₹32,999",
    image: "/images/cars/porsche-911.jpg",
    badge: "Premium",
    category: "Coupe",
  },
  {
    id: "5",
    name: "Lexus RC F",
    subtitle: "5.0L V8 Performance · 472 HP",
    seats: "4 seats",
    transmission: "Automatic",
    pricePerDay: "₹16,499",
    image: "/images/cars/lexus-rcf.jpg",
    category: "Coupe",
  },
  {
    id: "6",
    name: "Jaguar F-Type R",
    subtitle: "5.0L V8 Supercharged · 575 HP",
    seats: "2 seats",
    transmission: "Automatic",
    pricePerDay: "₹28,999",
    image: "/images/cars/jaguar-ftype.jpg",
    category: "Convertible",
  },
  {
    id: "7",
    name: "Chevrolet Camaro ZL1",
    subtitle: "6.2L Supercharged V8 · 650 HP",
    seats: "4 seats",
    transmission: "Automatic",
    pricePerDay: "₹17,999",
    image: "/images/cars/camaro-zl1.jpg",
    category: "Coupe",
  },
  {
    id: "8",
    name: "Ford Mustang GT500",
    subtitle: "5.2L V8 Supercharged · 760 HP",
    seats: "4 seats",
    transmission: "Automatic",
    pricePerDay: "₹22,999",
    image: "/images/cars/mustang-gt500.jpg",
    badge: "Thrilling",
    category: "Coupe",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tim",
    role: "Business Executive",
    initials: "AM",
    rating: 5,
    quote:
      "Rented a Porsche 911 for a weekend getaway. The car was immaculate, delivery was on time, and the whole experience felt effortless. Reign is my go-to now.",
  },
  {
    id: "2",
    name: "Jacob Thomas",
    role: "Travel Blogger",
    initials: "PS",
    rating: 5,
    quote:
      "I've tried many rental services but Reign stands apart. Transparent pricing, no hidden fees, and the BMW M4 I rented was an absolute dream to drive.",
  },
  {
    id: "3",
    name: "Abhijith Thomas",
    role: "Software Engineer",
    initials: "RK",
    rating: 5,
    quote:
      "Booked a Mercedes AMG for my anniversary. The concierge service was outstanding — they even left a complimentary welcome kit in the car. Five stars.",
  },
  {
    id: "4",
    name: "Justin Sebastian",
    role: "Event Planner",
    initials: "SP",
    rating: 4,
    quote:
      "Needed three luxury cars for a corporate event. Reign delivered all three on time, spotlessly clean, and their team was incredibly professional throughout.",
  },
];

export const stats = [
  { icon: "groups", value: "10k+", label: "Happy Renters" },
  { icon: "history_edu", value: "15+", label: "Years of Service" },
  { icon: "verified", value: "98%", label: "5-Star Ratings" },
  { icon: "directions_car", value: "200+", label: "Premium Vehicles" },
];

export const brands = [
  "Mercedes-Benz",
  "Porsche",
  "Audi",
  "Aston Martin",
  "Lamborghini",
  "Bentley",
];
