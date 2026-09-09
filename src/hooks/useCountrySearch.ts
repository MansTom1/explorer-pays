import { useQuery } from '@tanstack/react-query'

import { searchCountries } from '../services/countryService'

export function useCountrySearch(query: string) {
  return useQuery({
    queryKey: ['countries', 'search', query],
    queryFn: () => searchCountries(query),
    enabled: query.trim().length > 0,
  })
}