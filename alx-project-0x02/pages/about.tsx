import React from 'react';
import Header from '../components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600">Learn more about this project.</p>
      </main>
    </div>
  );
};

export default AboutPage;