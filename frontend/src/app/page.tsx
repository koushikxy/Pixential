import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Work from '../components/Work';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Work />
      </main>
      
      <Footer />
    </div>
  );
}

