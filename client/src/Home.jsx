import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import Details from './Details';
import Categories from './Categories';
import Cards from './Cards';


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Categories />
      <Cards />
      < Details />
    </div>
  );
};

export default Home;
