import React from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const stories = data?.hits || [];

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {isLoading
          ? Array(12).fill().map((_, index) => <StoryCardSkeleton key={index} />)
          : stories.map(story => <StoryCard key={story.objectID} story={story} />)
        }
      </div>
    </div>
  );
};

export default HackerNewsList;