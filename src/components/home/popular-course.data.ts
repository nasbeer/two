import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/type1a.jpg',
    type: 'TYPE 1A',
    title: '3BR END UNIT',
    //description: 'UNIT AREA - 1879 SQFT<br/>TERRACES/BALCONY - 130 SQFT<br/>COVERED GARAGE - 213 SQFT<br/>TOTAL AREA - 2222 SQFT',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'UNIT AREA - 1879 SQFT\nTERRACES/BALCONY - 130 SQFT\nCOVERED GARAGE - 213 SQFT\nTOTAL AREA - 2222 SQFT',
  },
  {
    id: 2,
    cover: '/images/type2a.jpg',
    type: 'TYPE 2A',
    title: '3BR MID UNIT',
   // description: 'UNIT AREA - 1879 SQFT<br/>TERRACES/BALCONY - 130 SQFT<br/>COVERED GARAGE - 213 SQFT<br/>TOTAL AREA - 2222 SQFT',
    rating: 5,
    ratingCount: 15,
    price: 20,
    category: 'UNIT AREA - 1627 SQFT\nTERRACES/BALCONY - 249 SQFT\nCOVERED GARAGE - 213 SQFT\nTOTAL AREA - 3089 SQFT',
  },
  {
    id: 3,
    cover: '/images/type3a.jpg',
    type: 'TYPE 3A',
    title: '3BR END UNIT',
   // description: 'UNIT AREA - 1879 SQFT<br/>TERRACES/BALCONY - 130 SQFT<br/>COVERED GARAGE - 213 SQFT<br/>TOTAL AREA - 2222 SQFT',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'UNIT AREA - 1878 SQFT\nTERRACES/BALCONY - 177 SQFT\nCOVERED GARAGE - 277 SQFT\nTOTAL AREA - 2332 SQFT',
  },
]
