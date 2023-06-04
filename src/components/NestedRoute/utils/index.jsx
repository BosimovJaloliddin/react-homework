import Home from "../components/Home";
import Cars from "../components/Cars";

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
    children: [
      {
        id: "2-1",
        title: "BMW",
        pathname: "/cars/bmw",
        element: <h1>Bmw</h1>,
      },
      {
        id: "2-2",
        title: "Audi",
        pathname: "/cars/audi",
        element: <h1>Audi</h1>,
      },
      {
        id: "2-3",
        title: "Porch",
        pathname: "/cars/porch",
        element: <h1>Card3</h1>,
      },
      {
        id: "2-4",
        title: "Ferrari",
        pathname: "/cars/ferrari",
        element: <h1>Card4</h1>,
      },
    ],
  },
  {
    id: 3,
    title: "Compyuters",
    pathname: "/compyuters",
    element: <h1>Compyuters</h1>,
    // child:true,
    // children:[
    //     {
    //         id:
    //     }
    // ]
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
