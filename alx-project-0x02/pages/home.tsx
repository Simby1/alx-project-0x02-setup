import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card'; 
import PostModal, { NewPostData } from '@/components/common/PostModal';

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPosts, setNewPosts] = useState<NewPostData[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleNewPostSubmit = (post: NewPostData) => {
    setNewPosts([post, ...newPosts]);
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>

    <button 
          onClick={handleOpenModal}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8 transition duration-150"
        >
          Open Post Creator Modal
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleNewPostSubmit}
        />

        {/* to display newly added posts */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8 border-b pb-2">User-Added Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {newPosts.length > 0 ? (
            newPosts.map((post, index) => (
              <Card 
                key={index} 
                title={post.title} 
                content={post.content} 
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-3">No user posts added yet. Open the modal!</p>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8 border-b pb-2">Initial Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="First Card" content="This is the content for the first reusable card component." />
          <Card title="Second Card" content="A different piece of information to demonstrate reusability." />
          <Card title="Third Card" content="Tailwind CSS provides utility classes for quick styling." />
        </div>
      </main>
    </div>
  );
};

export default HomePage;