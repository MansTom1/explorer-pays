import { api } from '../lib/api'
import type { Country } from '../types/country'

interface CountriesResponse {
  data: {
    objects: Country[]
  }
}

export async function getCountries(): Promise<Country[]> {
  const response = await api.get<CountriesResponse>('')

  return response.data.data.objects
}

export async function searchCountries(
  query: string,
): Promise<Country[]> {
  const response = await api.get<CountriesResponse>('', {
    params: {
      q: query,
    },
  })

  return response.data.data.objects
}