import React from 'react';
import './Home.css'
import CarouselSlider from '../Carousel/Carousel';
import Feature from '../Pages/Feature/Feature';
import Services from '../Pages/Services/Services';
import Categories from '../Pages/Categories/Categories';
import PageTitle from '../../Hooks/PageTitle';

const Home = () => {
  return (
    <div className='homePage mt-5'>
      <PageTitle title='Home' />
      <div className="container">
      <CarouselSlider/>
      <Feature/>
      </div>
     <Services/>
     <div className="container">
       <Categories/>
     </div>

    </div>
  );
};

export default Home;