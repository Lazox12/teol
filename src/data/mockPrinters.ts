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
    providerImage: 'https://outofdarts.com/cdn/shop/articles/OutofDarts-3D-Print-Farm-Nerf-Blog-Prusa-i3mk3-2-_RIGHT_3a01c40b-3cec-4f86-bea5-d6692cf3c3b1.jpg?v=1768083872',
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
    image: 'https://outofdarts.com/cdn/shop/articles/OutofDarts-3D-Print-Farm-Nerf-Blog-Prusa-i3mk3-2-_RIGHT_3a01c40b-3cec-4f86-bea5-d6692cf3c3b1.jpg?v=1768083872',
  },
  {
    id: '5',
    name: 'Industrial SLS Nylon (PA12) Production',
    provider: 'Precision Labs',
    providerLevel: 'Top Rated',
    providerImage: 'https://majkl3d-admin.s18.cdn-upgates.com/_cache/6/8/681034bf186e40006563f8ddf2ee466f-a668534a-9b60-47ee-9b85-ecd22807f2c8-2.jpg',
    farmSize: 3,
    rating: 4.9,
    reviewCount: 45,
    location: 'Industrial Park',
    distance: '8.4 km',
    technology: 'SLS',
    materials: ['Nylon PA12', 'Nylon PA11', 'TPU Powder','PLA'],
    pricePerHour: 45,
    estimatedCost: 125.00,
    estimatedTime: '24h (Batch)',
    image: 'https://majkl3d-admin.s18.cdn-upgates.com/_cache/6/8/681034bf186e40006563f8ddf2ee466f-a668534a-9b60-47ee-9b85-ecd22807f2c8-2.jpg',
  },
  {
    id: '2',
    name: 'High-Precision Resin Miniatures Hub',
    provider: 'Sarah Chen',
    providerLevel: 'Level 2',
    providerImage: 'https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F7e%2Fc7%2F7ec76f10-15dd-47e0-acfb-bb047c3b8311%2Ff4b_1_new.jpg__1354x0_q85_subsampling-2.jpg&w=3840&q=75',
    farmSize: 5,
    rating: 4.8,
    reviewCount: 89,
    location: 'West End Studio',
    distance: '3.5 km',
    technology: 'Resin',
    materials: ['Clear Resin', 'Tough Resin', 'Flexible Resin','PLA'],
    pricePerHour: 25,
    estimatedCost: 85.00,
    estimatedTime: '6h 15m',
    image: 'https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F7e%2Fc7%2F7ec76f10-15dd-47e0-acfb-bb047c3b8311%2Ff4b_1_new.jpg__1354x0_q85_subsampling-2.jpg&w=3840&q=75',
  },
  {
    id: '3',
    name: 'Fast-Turnaround PLA Printing Service',
    provider: 'Mike Ross',
    providerLevel: 'Level 1',
    providerImage: 'https://filamentive.com/wp-content/uploads/2018/10/Prodpoint-1024x682.jpg',
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
    image: 'https://filamentive.com/wp-content/uploads/2018/10/Prodpoint-1024x682.jpg',
  },
  {
    id: '4',
    name: 'Bambu Lab X1 Speed Farm',
    provider: 'David "Tech" Miller',
    providerLevel: 'Top Rated',
    providerImage: 'data:image/jpeg;base64,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',
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
    image: 'data:image/jpeg;base64,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',
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
