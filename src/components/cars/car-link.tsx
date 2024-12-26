// components/car-link.tsx
import Link from 'next/link';

interface CarLinkProps {
  brand: string;
  model: string;
  id: string;
  year?: number; // Make year optional
  className?: string;
  children: React.ReactNode;
}

function generateCarUrl(brand: string, model: string, id: string, year?: number): string {
  // Clean and format the brand and model
  const cleanBrand = brand.toLowerCase().trim().replace(/\s+/g, '-');
  const cleanModel = model.toLowerCase().trim().replace(/\s+/g, '-');
  
  // Create URL segments
  const segments = [cleanBrand, cleanModel];
  
  // Only add year if it exists and is valid
  if (year && !isNaN(year) && year > 1900) {
    segments.push(year.toString());
  }

  // Add the ID
  return `/car/${segments.join('-')}/${id}`;
}

export default function CarLink({ 
  brand, 
  model, 
  id, 
  year, 
  className, 
  children 
}: CarLinkProps) {
  return (
    <Link 
      href={generateCarUrl(brand, model, id, year)}
      className={className}
    >
      {children}
    </Link>
  );
}