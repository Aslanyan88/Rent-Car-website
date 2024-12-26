// Rental Pricing Utility

interface RentalTier {
  minDays: number;
  maxDays: number;
  discountPercentage: number;
  description: string;
}

const RENTAL_TIERS: RentalTier[] = [
  { 
    minDays: 1, 
    maxDays: 2, 
    discountPercentage: 0, 
    description: "Short-term Rental (1-2 days)" 
  },
  { 
    minDays: 3, 
    maxDays: 7, 
    discountPercentage: 13, 
    description: "Weekly Getaway Special" 
  },
  { 
    minDays: 8, 
    maxDays: 10, 
    discountPercentage: 27, 
    description: "Extended Adventure Package" 
  }
];

interface RentalPriceCalculation {
  dailyRate: number;
  discountPercentage: number;
}

export function calculateRentalPrice(
  baseDailyRate: number, 
  days: number
): RentalPriceCalculation {
  // Find the appropriate tier
  const tier = RENTAL_TIERS.find(t => days >= t.minDays && days <= t.maxDays);
  
  const discountPercentage = tier ? tier.discountPercentage : 0;
  const discountedDailyRate = baseDailyRate * (1 - discountPercentage / 100);

  return {
    dailyRate: discountedDailyRate,
    discountPercentage
  };
}

// Export the tiers for potential UI use
export { RENTAL_TIERS };