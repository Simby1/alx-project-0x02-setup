import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.statusText}`);
    }
    const users: UserProps[] = await res.json();
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('API Fetch Error:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Directory</h1>

        {users.length === 0 ? (
            <p className="text-center text-gray-500">Could not fetch user data. Check the API connection or network.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        {...user}
                    />
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default UsersPage;