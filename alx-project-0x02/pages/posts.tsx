import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">Posts Page</h1>
        <p className="mt-4 text-gray-600">This page will display a list of fetched posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;