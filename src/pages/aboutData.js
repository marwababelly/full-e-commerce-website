import { FaStore, FaDollarSign, FaBagShopping, FaSackDollar } from "react-icons/fa6";
import { Truck, Headset, ShieldCheck } from "lucide-react";

import storyImg from "../features/auth/assets/about/2.jpg";
import tomImg from "../features/auth/assets/about/3.jpg";
import emmaImg from "../features/auth/assets/about/4.jpg";
import willImg from "../features/auth/assets/about/1.jpg";

export { storyImg };

export const statistics = [
  { icon: FaStore, value: "10.5k", label: "Sellers active on our site" },
  { icon: FaDollarSign, value: "33k", label: "Monthly product sales" },
  { icon: FaBagShopping, value: "45.5k", label: "Customers active on our site" },
  { icon: FaSackDollar, value: "25k", label: "Annual gross sales" },
];

export const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: tomImg, alt: "Portrait of Tom Cruise" },
  { name: "Emma Watson", role: "Managing Director", image: emmaImg, alt: "Portrait of Emma Watson" },
  { name: "Will Smith", role: "Product Designer", image: willImg, alt: "Portrait of Will Smith" },
];

export const benefits = [
  { icon: Truck, title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
  { icon: Headset, title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
  { icon: ShieldCheck, title: "MONEY BACK GUARANTEE", description: "We return money within 30 days" },
];