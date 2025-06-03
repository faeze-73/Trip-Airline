const GEO_DB_API_KEY = '035b420c67msha28133efc5ff1acp1da862jsn053e1e2e96c2';
const GEO_DB_API_HOST = 'wft-geo-db.p.rapidapi.com';

export async function fetchCities(countryId = 'US') {
  const res = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${countryId}&limit=4`,
    {
      method: 'GET', 
      headers: {
        'X-RapidAPI-Key': GEO_DB_API_KEY,
        'X-RapidAPI-Host': GEO_DB_API_HOST,
      },
    }
  );
  
  if (!res.ok) return [];
  
  const data = await res.json();
  return data.data || [];
}

export async function fetchFlightsForCity(cityName: string) {
  const res = await fetch(`/api/flights?city=${cityName}`);
  const data = await res.json();
  return data;
}

// app/services/unsplashApi.ts
const UNSPLASH_KEY = 'CPKPVFKBIrPbE494lLC1EXQeV1Hdjo6cEdc3kzEYgLQ';

export async function fetchCityImage(cityName: string) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${UNSPLASH_KEY}`
  );
  const data = await res.json();
  return data.results[0]?.urls?.small || '';
}