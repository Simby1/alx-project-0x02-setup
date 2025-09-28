import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title="First Card" 
            content="This is the content for the first reusable card component." 
          />
          <Card 
            title="Second Card" 
            content="A different piece of information to demonstrate reusability." 
          />
          <Card 
            title="Third Card" 
            content="Tailwind CSS provides utility classes for quick styling." 
          />
        </div>

      </main>
    </div>
  );
};

export default HomePage;