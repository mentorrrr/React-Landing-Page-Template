import React, { useEffect, useState } from 'react';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Features } from './components/features';
import { Gallery } from './components/gallery';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import { Services } from './components/services';
import JsonData from './data/data.json';

export const scroll = new SmoothScroll('a[href*="#"]', {
   speed: 1000,
   speedAsDuration: true,
});

const App = () => {
   const [landingPageData, setLandingPageData] = useState({});
   useEffect(() => {
      setLandingPageData(JsonData);
   }, []);

   return (
      <div>
         <Navigation />
         <Header data={landingPageData.Header} />
         <Features data={landingPageData.Features} />
         <About data={landingPageData.About} />
         <Services data={landingPageData.Services} />
         <Gallery data={landingPageData.Gallery} />
         <Contact data={landingPageData.Contact} />
      </div>
   );
};

export default App;
