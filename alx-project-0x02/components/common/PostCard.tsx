import React from 'react';
import { type PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 border-l-4 border-red-500 hover:shadow-xl transition duration-300">
      <span className="text-xs font-semibold text-gray-500">User ID: {userId}</span>
      <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3 capitalize">{title}</h3>
      <p className="text-gray-700 text-sm line-clamp-3">{body}</p>
      <button className="text-red-500 hover:text-red-700 mt-3 font-medium text-sm">Read More</button>
    </div>
  );
};

export default PostCard;