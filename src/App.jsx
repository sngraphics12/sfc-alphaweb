import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Page Components
import Landing from './Pages/landing';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Feedback from './Pages/Feedback';
import EventCatalog from './Pages/EventCatalog';
import EventDetails from './Pages/EventDetails';
// import Sitemap from './Pages/Sitemap';
import Galary from './Pages/galary';
import Welcome from './Pages/Welcome'; 

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Welcome /> },
    { path: '/home', element: <Home /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/about', element: <About /> },
    { path: '/feedback', element: <Feedback /> },
    { path: '/eventcatalog', element: <EventCatalog /> },
    { path: '/event', element: <EventDetails /> }, 
    { path: '/contact', element: <Contact /> },
    { path: '/galary', element: <Galary /> }, 
    // { path: '/sitemap', element: <Sitemap /> },
    { path: '*', element: <Error /> }
  ]);

  return <RouterProvider router={router} />;
}
