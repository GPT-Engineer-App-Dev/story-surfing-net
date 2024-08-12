import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardContent className="flex-grow pt-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 w-1/4" />
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;