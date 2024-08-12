import React from 'react';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-stripe-gradient from-stripe-gradient-start to-stripe-gradient-end py-16 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Hacker News Top Stories
          </h1>
          <p className="text-xl text-white text-center opacity-80">
            Stay updated with the latest in tech and startups
          </p>
        </div>
      </header>
      <HackerNewsList />
    </div>
  );
};

export default Index;