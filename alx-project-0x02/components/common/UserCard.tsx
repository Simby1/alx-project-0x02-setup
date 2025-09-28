import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}`;

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 border-b-4 border-green-500 flex flex-col items-start space-y-3 transition duration-300 hover:bg-green-50">
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      <div className="text-gray-700">
        <p className="flex items-center space-x-2">
          📧 <span className="font-medium">Email:</span> 
          <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 transition duration-150">{email}</a>
        </p>
        <p className="flex items-start space-x-2 mt-2">
          📍 <span className="font-medium">Address:</span> 
          <span className="text-sm">{fullAddress}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;