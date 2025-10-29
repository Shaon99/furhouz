"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  isLoading = false 
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1 && !isLoading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !isLoading) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage && !isLoading) {
      onPageChange(page);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      if (start > 2) {
        pages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between w-full">
      {/* Page Info */}
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center space-x-1">
        {/* Previous Button */}
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1 || isLoading}
          variant="outline"
          size="sm"
          className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        >
          « Previous
        </Button>
      
      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span 
              key={`ellipsis-${index}`} 
              className="px-3 py-2 text-sm text-gray-500"
            >
              ...
            </span>
          );
        }
        
        const isActive = page === currentPage;
        
        return (
          <Button
            key={page}
            onClick={() => handlePageClick(page as number)}
            disabled={isLoading}
            variant="outline"
            size="sm"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-white text-gray-700 border border-gray-300 shadow-sm'
                : 'text-gray-600 bg-gray-100 border border-gray-300 hover:bg-gray-200'
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100`}
          >
            {page}
          </Button>
        );
      })}
      
        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages || isLoading}
          variant="outline"
          size="sm"
          className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        >
          Next »
        </Button>
      </div>
    </div>
  );
}
