import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
