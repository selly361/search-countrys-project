import React, { useState } from 'react'
import '../scss/Countries.scss'
import { Link } from 'react-router-dom';

function Countries({ countries, theme }) {

    const [pages, setPages] = useState(Math.round(countries.length / 10))

    const formatNum = (num) => {
        num = num.toString().split('').reverse();

        
        for(let i = 1; i <= num.length; i++){
      
        if(i % 4 === 0){
          num.splice(i - 1, 0, ',')
        }
      
          
        }
        return num.reverse().join('')
      }
    

      const nextPage = () => {
        if(pages === countries.length){
            return null
        } else {
            setPages(prev => prev + (Math.floor(countries.length / 10)))
        }
      }

      const prevPage = () => {
        if(pages === (Math.round(countries.length / 10))){
            return null
        } else {
            setPages(prev => prev - (Math.floor(countries.length / 10)))
        }
      }

    return (
        <main>
            <div className={theme ? 'darkmode-container container' : 'container'}>
                { countries.map((country, index) => (
                   <Link key={`${country}${index}`} to={{ pathname: `/country/${country.name.common || country.name}` }} > 
                    <div  className={theme ? 'card card-darkmode' : 'card'}>
                        <img src={country.flags.svg} />
                        <div className={theme ? 'card-content-darkmode' : 'card-content'}>
                            <div className={theme ? 'name name-darkmode' : 'name'}>{country.name.common || country.name}</div>
                            <div className={theme ? 'population population-darkmode' : 'population'}>Population: {formatNum(country.population)}</div>
                            <div className='region'>Region: {country.region}</div>
                            <div className='capital'>Capital: {country.capital}</div>
                        </div>
                    </div>
                    </Link>

                ))  }
            </div>
            <div className='page-nav-container'>
               
            </div>
            
        </main>
    )
}

export default Countries
