export interface Printer {
  id: string
  name: string
  provider: string
  providerLevel: 'Top Rated' | 'Level 2' | 'Level 1' | 'New Seller'
  providerImage: string
  farmSize: number
  rating: number
  reviewCount: number
  location: string
  distance: string
  technology: 'FDM' | 'Resin' | 'SLS' | 'Industrial'
  materials: string[]
  pricePerHour: number
  estimatedCost: number
  estimatedTime: string
  image: string
}

export const mockPrinters: Printer[] = [
  {
    id: '1',
    name: 'Industrial Grade FDM Print Farm',
    provider: 'Alex "The Maker" Rodriguez',
    providerLevel: 'Top Rated',
    providerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    farmSize: 12,
    rating: 4.9,
    reviewCount: 124,
    location: 'Downtown Hub',
    distance: '1.2 km',
    technology: 'FDM',
    materials: ['PLA', 'ABS', 'TPU', 'Carbon Fiber'],
    pricePerHour: 15,
    estimatedCost: 45.00,
    estimatedTime: '4h 30m',
    image: 'https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '5',
    name: 'Industrial SLS Nylon (PA12) Production',
    provider: 'Precision Labs',
    providerLevel: 'Top Rated',
    providerImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100',
    farmSize: 3,
    rating: 4.9,
    reviewCount: 45,
    location: 'Industrial Park',
    distance: '8.4 km',
    technology: 'SLS',
    materials: ['Nylon PA12', 'Nylon PA11', 'TPU Powder'],
    pricePerHour: 45,
    estimatedCost: 125.00,
    estimatedTime: '24h (Batch)',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c17cb492?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'High-Precision Resin Miniatures Hub',
    provider: 'Sarah Chen',
    providerLevel: 'Level 2',
    providerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    farmSize: 5,
    rating: 4.8,
    reviewCount: 89,
    location: 'West End Studio',
    distance: '3.5 km',
    technology: 'Resin',
    materials: ['Clear Resin', 'Tough Resin', 'Flexible Resin'],
    pricePerHour: 25,
    estimatedCost: 85.00,
    estimatedTime: '6h 15m',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Fast-Turnaround PLA Printing Service',
    provider: 'Mike Ross',
    providerLevel: 'Level 1',
    providerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    farmSize: 24,
    rating: 4.7,
    reviewCount: 256,
    location: 'Northside Factory',
    distance: '0.8 km',
    technology: 'FDM',
    materials: ['PLA', 'PETG'],
    pricePerHour: 10,
    estimatedCost: 32.50,
    estimatedTime: '3h 45m',
    image: 'https://images.unsplash.com/photo-1621319011735-26325514ec66?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Bambu Lab X1 Speed Farm',
    provider: 'David "Tech" Miller',
    providerLevel: 'Top Rated',
    providerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    farmSize: 8,
    rating: 5.0,
    reviewCount: 42,
    location: 'East Side Tech',
    distance: '5.2 km',
    technology: 'FDM',
    materials: ['PLA', 'ABS', 'PETG', 'Carbon Fiber'],
    pricePerHour: 20,
    estimatedCost: 55.00,
    estimatedTime: '2h 15m',
    image: 'https://images.unsplash.com/photo-1544383173-98285516999b?auto=format&fit=crop&q=80&w=400',
  },
]

export const materials = [
  { name: 'PLA', description: 'Easy to print, eco-friendly, rigid.' },
  { name: 'Nylon PA12', description: 'Industrial grade, high strength, no supports needed.' },
  { name: 'ABS', description: 'Strong, heat-resistant, functional parts.' },
  { name: 'PETG', description: 'Durable, chemical resistant, clear options.' },
  { name: 'Resin', description: 'High detail, smooth surface, for miniatures.' },
  { name: 'TPU', description: 'Flexible, rubber-like material.' },
]
