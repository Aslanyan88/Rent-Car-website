// components/ui/pagination.tsx
'use client';

import { useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string | string[] | undefined>;
}

export function Pagination({ currentPage, totalPages, searchParams }: PaginationProps) {
  const router = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    
    // Add all current search params except page
    Object.entries(searchParams).forEach(([key, value]) => {
      if (key !== 'page' && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else {
          params.append(key, value);
        }
      }
    });
    
    // Add the new page number
    params.set('page', pageNumber.toString());
    
    return `/cars?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2">
      {/* Previous button */}
      <button
        onClick={() => router.push(createPageUrl(currentPage - 1))}
        disabled={currentPage <= 1}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Page numbers */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => router.push(createPageUrl(pageNumber))}
            className={`px-4 py-2 rounded-md ${
              pageNumber === currentPage
                ? 'bg-[#5937E0] text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => router.push(createPageUrl(currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}