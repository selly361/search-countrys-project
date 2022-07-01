import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import './App.scss'
import Countries from "./Components/Countries";
import Loading from "./Components/Loading";
import { Routes, Route} from 'react-router-dom'
import Country from "./Components/Country";




function App() {


  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    axios.get(url)
    .then(response => {
      setCountries(response.data);
      setLoading(false)
    })

  }, [url])



  const options = [
    { value: 'Filter by Region', label: 'filter' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Americas', label: 'Americas' },
  ] 

  
  const handleChange = (e) => {
    if(e.target.value !== 'filter'){
      setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`)
    }
  }

  const getCountry = (e) => {
    if(e.target.value.trim()){
    setUrl(`https://restcountries.com/v2/name/${e.target.value}`)
} else {
  setUrl('https://restcountries.com/v3.1/all')
}
  }
  


  const [theme, setTheme] = useState(true)


  return (
    <>
    <Header theme={theme} setTheme={setTheme} />
    <Routes>
      <Route path="/" element={    <div className={theme ? "darkmode-App  App" : 'App'}>

      <select name="region" onChange={handleChange}>
      {     options.map((option, index) => (
              <option key={`${option.value}${index}`}  value={option.label}>{option.value}</option>

            ))}
      </select>

      <div className='search-field-container'>
        <input  className="search" onChange={getCountry}  />
      </div>
      

     
      {
       loading ? <Loading /> :  <Countries  countries={countries} theme={theme} />
      }
    </div>} />

     <Route path='/country/:name' element={<Country theme={theme} />} />  
    </Routes>
    </>

  );
}

export default App;


