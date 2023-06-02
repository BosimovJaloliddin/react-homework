import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Info from "../Info";
import Single from "../Single";

export const navbar = [
  {
    id: 1,
    title: "Home",
    pathname: "/home",
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 2,
    title: "About",
    pathname: "/about",
    element: <About />,
    isPrivate: false,
  },
  {
    id: 3,
    title: "Contact",
    pathname: "/contact",
    element: <Contact />,
    isPrivate: true,
  },
  {
    id: 4,
    title: "Info",
    pathname: "/info",
    element: <Info />,
    isPrivate: false,
  },
  {
    id: 5,
    title: "single",
    pathname: "/home/id",
    element: <Single />,
    isPrivate: false,
  },
  {
    id: 5,
    title: "single",
    pathname: "*",
    element: <Home />,
    isPrivate: false,
  },
];
