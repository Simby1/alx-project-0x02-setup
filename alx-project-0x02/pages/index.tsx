import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <Head>
        <title>Next.js Setup Project</title>
      </Head>
      <main className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">
          Welcome to the Next.js Project!
        </h1>
        <p className="text-xl text-gray-700">
          Start building your application with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default Home;