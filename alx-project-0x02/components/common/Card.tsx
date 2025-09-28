import React from 'react';
import type { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 transition duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;