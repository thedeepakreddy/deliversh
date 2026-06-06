export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Professional {
  id: string;
  name: string;
  categoryIds: string[];
  rating: number;
  reviewsCount: number;
  pricePerHour: number;
  imageUrl: string;
  bio: string;
}

export interface BookingState {
  categoryId: string | null;
  professionalId: string | null;
  date: string | null;
  time: string | null;
  address: string;
  step: 'category' | 'professional' | 'datetime' | 'checkout' | 'confirmation';
}
