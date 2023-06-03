import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Info from "../Info";
import User from "../User";

export const navbar = [
  {
    id: 1,
    title: "Home",
    pathname: "/home",
    element: <Home />,
  },
  {
    id: 2,
    title: "About",
    pathname: "/about",
    element: <About />,
  },
  {
    id: 3,
    title: "Contact",
    pathname: "/contact",
    element: <Contact />,
  },
  {
    id: 4,
    title: "Info",
    pathname: "/info",
    element: <Info />,
  },
  {
    id: 5,
    title: "User",
    pathname: "/home/:id",
    element: <User />,
  },
  {
    id: 6,
    title: "Home",
    pathname: "*",
    element: <Home />,
    hidden: true,
  },
];
