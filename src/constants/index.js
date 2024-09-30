import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoe9,
  shoe10,
  shoe11,
  shoe12,
  shoe13,
  shoe14,
  shoe15,
  shoe16,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const shoes = [
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
];

export const statistics = [
  { value: "1.5k+", label: "Brands" },
  { value: "750+", label: "Shops" },
  { value: "300k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURL: shoe1,
    name: "Nike Air Jordan-01",
    price: "170.20",
  },
  {
    id: 2,
    imgURL: shoe2,
    name: "Nike Air Jordan-01",
    price: "180.20",
  },
  {
    id: 3,
    imgURL: shoe3,
    name: "Nike SB Dunk Low x Stussy “BMW M3”",
    price: "190.20",
  },
  {
    id: 4,
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "200.20",
  },
  {
    id: 5,
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "210.20",
  },
  {
    id: 6,
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "220.20",
  },
  {
    id: 7,
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "230.20",
  },
  {
    id: 8,
    imgURL: shoe8,
    name: "Nike AIR MAX TW",
    price: "240.20",
  },
  {
    id: 9,
    imgURL: shoe9,
    name: "Nike Dual Fusion",
    price: "250.20",
  },
  {
    id: 10,
    imgURL: shoe10,
    name: "Nike Air Max Tailwind TW SE",
    price: "260.20",
  },
  {
    id: 11,
    imgURL: shoe11,
    name: "Nike Air Max LeBron 7 NFW",
    price: "270.20",
  },
  {
    id: 12,
    imgURL: shoe12,
    name: "Nike Air Max 90 Hyperfuse QS",
    price: "280.20",
  },
  {
    id: 13,
    imgURL: shoe13,
    name: "Nike Air Max 270 blue",
    price: "290.20",
  },
  {
    id: 14,
    imgURL: shoe14,
    name: "Nike Air Max Flywire",
    price: "300.20",
  },
  {
    id: 15,
    imgURL: shoe15,
    name: "Nike Air Max 270 black",
    price: "310.20",
  },
  {
    id: 16,
    imgURL: shoe16,
    name: "Nike Air Force 1",
    price: "320.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
