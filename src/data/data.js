import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";

export const PageLinks = [
  {
    id: 1,
    href: "home",
    text: "Home",
  },
  {
    id: 2,
    href: "about",
    text: "About",
  },
  {
    id: 3,
    href: "services",
    text: "Services",
  },
  {
    id: 4,
    href: "tours",
    text: "Tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const serviceSections = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    city: "china",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $2,100",
    days: "6 days",
  },
  {
    id: 2,
    image: img2,
    date: "october 1th, 2020",
    title: "best of java",
    city: "indonesia",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $1,400",
    days: "11 days",
  },
  {
    id: 3,
    image: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    city: "hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $5,000",
    days: "8 days",
  },
  {
    id: 4,
    image: img4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    city: "kenya",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    price: "from $3,300",
    days: "20 days",
  },
];
