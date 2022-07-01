import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../scss/Country.scss';

function Country( { theme } ) {
    const arrow = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>;

    const formatNum = (num) => {
        num = num.toString().split('').reverse();



        for(let i = 1; i <= num.length; i++){
      
        if(i % 4 === 0){
          num.splice(i - 1, 0, ',')
        }
      
          
        }
        return num.reverse().join('')
      }
      

    const [ country, setCountry ] = useState([]) 

    const countryName = useParams();

    const { name  } = countryName;

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => {
            console.log(response.data)
            setCountry(response.data);
            
        })
    }, [name])

    return (

        <div className={theme ? 'Darkmode-body Body' : 'Body'}>
            { country.length > 0 ?
              <>  
                <Link to={'/'}  ><button>{arrow} &nbsp; &nbsp; Back</button></Link>
                <div className='wrapper'>
                        <img src={country[0].flags.svg} className='flag' />
                        <div>
                        <h1>{country[0].name.common}</h1>
                            <div className='info'>
                                <p><b>Native Name:</b> {country[0].name.common}</p>
                                <p><b>Population:</b> {formatNum(country[0].population)}</p>
                                <p><b>Region:</b> {country[0].region}</p>
                                <p><b>Capital:</b> {country[0].capital}</p>
                                <p><b>Top Level Domain:</b> {country[0].tld[0]}</p>
                                <p><b>Languages:</b> {country[0].languages[Object.keys(country[0].languages)[0]] || country[0].languages.mkd}</p>
                            </div>
                                <p><b>Currency:</b> {country[0].currencies[Object.keys(country[0].currencies)[0]].name}</p>
                        </div>
                    </div>
                 </>
                 :
                 null
}
        </div>
    )
}

export default Country

/* 


altSpellings: (6) ['CY', 'Kýpros', 'Kıbrıs', 'Republic of Cyprus', 'Κυπριακή Δημοκρατία', 'Kıbrıs Cumhuriyeti']
area: 9251
capital: ['Nicosia']
capitalInfo: {latlng: Array(2)}
car: {signs: Array(1), side: 'left'}
cca2: "CY"
cca3: "CYP"
ccn3: "196"
cioc: "CYP"
coatOfArms: {png: 'https://mainfacts.com/media/images/coats_of_arms/cy.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/cy.svg'}
continents: ['Europe']
currencies: {EUR: {…}}
demonyms: {eng: {…}, fra: {…}}
fifa: "CYP"
flag: "🇨🇾"
flags: {png: 'https://flagcdn.com/w320/cy.png', svg: 'https://flagcdn.com/cy.svg'}
gini: {2018: 32.7}
idd: {root: '+3', suffixes: Array(1)}
independent: true
landlocked: false
languages: {ell: 'Greek', tur: 'Turkish'}
latlng: (2) [35, 33]
maps: {googleMaps: 'https://goo.gl/maps/77hPBRdLid8yD5Bm7', openStreetMaps: 'https://www.openstreetmap.org/relation/307787'}
name: {common: 'Cyprus', official: 'Republic of Cyprus', nativeName: {…}}
population: 1207361
postalCode: {format: '####', regex: '^(\\d{4})$'}
region: "Europe"
startOfWeek: "monday"
status: "officially-assigned"
subregion: "Southern Europe"
timezones: ['UTC+02:00']
tld: ['.cy']
translations: {ara: {…}, ces: {…}, cym: {…}, deu: {…}, est: {…}, …}
unMember: true

*/