import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  const handleClick = (buttonName: string) => {
    alert(`Clicked the ${buttonName} button!`);
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us & Component Showcase</h1>
        <p className="mt-4 text-gray-600 mb-8">This page demonstrates the reusable Button component with different sizes and shapes.</p>

        <div className="flex flex-wrap items-center space-x-4 space-y-4">
          <h2 className="w-full text-xl font-semibold border-b pb-2">Different Sizes</h2>
          <Button 
            size="small" 
            onClick={() => handleClick('Small')}
            className="bg-purple-500 hover:bg-purple-600 focus:ring-purple-500"
          >
            Small Button
          </Button>
          <Button 
            size="medium" 
            onClick={() => handleClick('Medium')}
          >
            Medium Button
          </Button>
          <Button 
            size="large" 
            onClick={() => handleClick('Large')}
            className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
          >
            Large Button
          </Button>

          <h2 className="w-full text-xl font-semibold border-b pb-2 mt-8">Different Shapes</h2>
          <Button 
            shape="rounded-sm" 
            size="medium"
            onClick={() => handleClick('Square')}
            className="bg-teal-500 hover:bg-teal-600 focus:ring-teal-500"
          >
            Square Edges
          </Button>
          <Button 
            shape="rounded-md" 
            size="medium"
            onClick={() => handleClick('Rounded')}
          >
            Rounded Edges
          </Button>
          <Button 
            shape="rounded-full" 
            size="medium"
            onClick={() => handleClick('Pill')}
            className="bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500"
          >
            Pill Shape
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;