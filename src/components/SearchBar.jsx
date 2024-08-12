import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stripe-purple" />
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 w-full border-2 border-stripe-purple focus:ring-2 focus:ring-stripe-light-blue transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;