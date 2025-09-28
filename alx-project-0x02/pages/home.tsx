import React from 'react';
import Header from '../components/layout/Header'; 

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
        <p className="mt-4 text-gray-600">This is the main content area of the Home page.</p>
      </main>
    </div>
  );
};

export default HomePage;