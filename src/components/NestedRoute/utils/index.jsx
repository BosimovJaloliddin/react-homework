import Home from "../components/Home";
import Cars from "../components/Cars";
import Compyuters from "../components/Compyuters";

export const componentPath = [
  {
    id: 1,
    title: "Home",
    pathname: "/",
    element: <Home />,
    hidden: true,
  },
  {
    id: 2,
    title: "Cars",
    pathname: "/cars",
    element: <Cars />,
    child: true,
    childern: [
      {
        id: "2-1",
        title: "BMW",
        pathname: "/cars/bmw",
        element: <h1>BMW</h1>,
      },
      {
        id: "2-2",
        title: "Ford",
        pathname: "/carsford",
        element: <h1>Ford</h1>,
      },
      {
        id: "2-3",
        title: "Ferrari",
        pathname: "/cars/ferrari",
        element: <h1>Ferrari</h1>,
      },
    ],
  },
  {
    id: 3,
    title: "Compyuters",
    pathname: "/compyuters",
    element: <Compyuters />,
    child: true,
    childern: [
      {
        id: "3-1",
        title: "MacBook",
        pathname: "/compyuters/mackbook",
        element: <h1>MacBook</h1>,
      },
      {
        id: "3-2",
        title: "HP",
        pathname: "/compyuters/hp",
        element: <h1>HP</h1>,
      },
      {
        id: "3-3",
        title: "Lenova",
        pathname: "/compyuters/lenova",
        element: <h1>Lenova</h1>,
      },
      {
        id: "3-4",
        title: "Asus",
        pathname: "/compyuters/asus",
        element: <h1>Asus</h1>,
      },
    ],
  },
  {
    id: 4,
    title: "House",
    pathname: "/house",
    element: <h1>House</h1>,
  },
  {
    id: 5,
    title: "Universitys",
    pathname: "univer",
    element: <h1>Universitys</h1>,
  },
];
