import React from 'react';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-stripe-gradient from-stripe-gradient-start to-stripe-gradient-end py-20 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-4">
            Hacker News Top Stories
          </h1>
          <p className="text-xl text-white text-center opacity-80 max-w-2xl mx-auto">
            Stay updated with the latest in tech and startups. Explore the top 100 stories from the Hacker News community.
          </p>
        </div>
      </header>
      <HackerNewsList />
    </div>
  );
};

export default Index;