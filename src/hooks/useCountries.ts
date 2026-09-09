import { useQuery } from '@tanstack/react-query'

import { getCountries } from '../services/countryService'

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  })
}