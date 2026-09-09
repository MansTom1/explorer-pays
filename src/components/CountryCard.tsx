import type { Country } from '../types/country'

interface CountryCardProps {
  country: Country
}

function CountryCard({ country }: CountryCardProps) {

    /*console.log(`Données de ${country.names?.common || 'Inconnu'} :`, country);*/

  return (
    <article className="rounded-lg border p-4">

     {country.flag.url_png ? (
      <img
         src={country.flag.url_png}
         alt={`Drapeau de ${country.names.common}`}
         className="mb-4 h-32 w-full rounded object-cover"
         loading="lazy"
       />

      ) : (
       <div className="mb-4 flex h-32 w-full items-center justify-center rounded border">
           <span>Drapeau indisponible</span>
       </div>
     )}
       
      <h2 className="text-xl font-semibold">
        {country.names.common}
      </h2>

      <p>
        Région : {country.region}
      </p>
      
      <p>
        Capitale : {country.capitals?.[0]?.name ?? 'Non renseignée'}
      </p> 


    </article>
  )
}

export default CountryCard