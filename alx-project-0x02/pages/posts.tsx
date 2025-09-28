import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    const data: PostProps[] = await res.json();
    
    const posts = data.slice(0, 20); 

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('API Fetch Error:', error);
    return {
      props: {
        posts: [], 
      },
    };
  }
};

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Posts</h1>
        
        {posts.length === 0 ? (
            <p className="text-center text-gray-500">Could not fetch posts. Check the API connection or network.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        userId={post.userId}
                        id={post.id}
                    />
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;