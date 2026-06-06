import { Category, Professional } from './types';

export const categories: Category[] = [
  {
    id: 'cleaning',
    name: 'Home Cleaning',
    icon: 'Sparkles',
    description: 'Deep cleaning, regular cleaning, and move-in/out.'
  },
  {
    id: 'beauty',
    name: 'Beauty Services',
    icon: 'Scissors',
    description: 'Salon at home for women and men.'
  },
  {
    id: 'repair',
    name: 'Appliance Repair',
    icon: 'Wrench',
    description: 'AC, Refrigerator, Washing Machine repair & service.'
  }
];

export const professionals: Professional[] = [
  {
    id: 'p1',
    name: 'Sarah Tremblay',
    categoryIds: ['beauty'],
    rating: 4.9,
    reviewsCount: 342,
    pricePerHour: 85,
    bio: 'Expert beautician with 8 years of experience in salon services. Based in Toronto.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'
  },
  {
    id: 'p2',
    name: 'Michael Chen',
    categoryIds: ['repair'],
    rating: 4.7,
    reviewsCount: 128,
    pricePerHour: 95,
    bio: 'Certified technician for all major home appliances.',
    imageUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&h=500&fit=crop'
  },
  {
    id: 'p3',
    name: 'Emily MacDonald',
    categoryIds: ['cleaning'],
    rating: 4.8,
    reviewsCount: 451,
    pricePerHour: 45,
    bio: 'Professional cleaner specializing in deep cleaning and organization.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop'
  },
  {
    id: 'p4',
    name: 'David Singh',
    categoryIds: ['repair', 'cleaning'],
    rating: 4.6,
    reviewsCount: 89,
    pricePerHour: 75,
    bio: 'Handyman and intensive cleaning specialist.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
  }
];
