export interface City {
  id: number;
  name: string;
  // countryCode?: string;
  // region?: string;
  // regionCode?: string;
  // latitude?: number;
  // longitude?: number;
}

export interface Flight {
  from: string;
  to: string;
  price: number;
  currency: string;
  image: string;
}
