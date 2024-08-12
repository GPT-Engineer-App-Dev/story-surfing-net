import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex-grow pt-6">
        <h2 className="text-xl font-semibold mb-2 text-stripe-dark-blue">{story.title}</h2>
        <p className="text-sm text-gray-500 mb-4">By {story.author}</p>
        <div className="flex items-center text-stripe-purple">
          <ArrowUpCircle className="w-5 h-5 mr-2" />
          <span className="font-medium">{story.points} points</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Button
          variant="ghost"
          className="w-full text-stripe-purple hover:text-stripe-dark-blue hover:bg-gray-100 transition-colors duration-300"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;