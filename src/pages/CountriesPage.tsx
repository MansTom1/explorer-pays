import { useMemo, useState } from 'react'
import { useCountrySearch } from '../hooks/useCountrySearch'
import CountryCard from '../components/CountryCard'
import { useCountries } from '../hooks/useCountries'

function CountriesPage() {
  
  const [search, setSearch] = useState('')
  const [submittedSearch, setSubmittedSearch] = useState('')

  const handleSearch = () => {
  setSubmittedSearch(search.trim())
  }



  const countriesQuery = useCountries()
  const searchQuery = useCountrySearch(submittedSearch)

  const {
    data: countries,
    isLoading,
    isError,
  } = submittedSearch
      ? searchQuery
      : countriesQuery

   const suggestions = useMemo(() => {
     if (!search.trim() || !countries) {
      return []
    }

    const normalizedSearch = search.trim().toLowerCase()

    return countries
      .filter((country) =>
        country.names.common
          .toLowerCase()
          .includes(normalizedSearch),
      )
      .slice(0, 5)
  }, [search, countries])

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Chargement des pays...</p>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Impossible de charger les pays.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Explorer les pays
      </h1>

      <form
         onSubmit={(event) => {
          event.preventDefault()
          handleSearch()
         }}
         className="mb-6 flex gap-2"
       >
       <input
         type="search"
         value={search}
         onChange={(event) => setSearch(event.target.value)}
         placeholder="Rechercher un pays..."
         className="w-full rounded border px-4 py-2"
       />

       <button
         type="submit"
         className="rounded border px-4 py-2"
         >
         Rechercher
       </button>
      </form>

      {suggestions.length > 0 && !submittedSearch && (
         <div className="mb-6 rounded border">
            {suggestions.map((country) => (
              <button
                key={country.codes.alpha_3}
                type="button"
                onClick={() => {
                  setSearch(country.names.common)
                  setSubmittedSearch(country.names.common)
                }}
                className="block w-full border-b px-4 py-2 text-left last:border-b-0 hover:bg-gray-100"
              >
                 {country.names.common}
              </button>
           ))}
         </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries?.map((country) => (
          <CountryCard
            key={country.codes.alpha_3}
            country={country}
          />
        ))}
      </div>
    </main>
  )
}

export default CountriesPage