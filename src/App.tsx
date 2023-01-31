import React, { useState } from 'react';
import './App.css';
import countries from './countries';

function App() {
  const [countriesList, setCountriesList] = useState(countries);
  const [isAsc, setAsc] = useState(true);
  const handleColumnSorting = (item: string, type?: string) => {
    let sortedCountries = [];
    switch (item) {
      case "country":
        sortedCountries = sortableFunction(countriesList, "country");
        break;
      case "population":
        sortedCountries = sortableFunction(countriesList, "population");
        break;
      case "deaths":
        sortedCountries = sortableFunction(countriesList, "deaths");
        break;
      case "recovered":
        sortedCountries = sortableFunction(countriesList, "recovered");
        break;
      case "lat":
        sortedCountries = sortableFunction(countriesList, "lat");
        break;
      case "lng":
        sortedCountries = sortableFunction(countriesList, "lng");
        break;
      default:
        sortedCountries = [...countriesList];
        break;
    }
    setCountriesList([...sortedCountries]);
    setAsc(!isAsc);
  }

  const sortableFunction = (list: any, field: string) => {
    return list.sort((a: any, b: any) => {
      if (isAsc) {
        return a[field] > b[field] ? 1 : -1
      } else {
        return b[field] > a[field] ? 1 : -1
      }
    });
  }



  return <table className='sortable'>
    <thead>
      <tr>
        <th onClick={() => { handleColumnSorting("country") }}>Country</th>
        <th onClick={() => { handleColumnSorting("population") }}>Population</th>
        <th onClick={() => { handleColumnSorting("deaths") }}>Deaths</th>
        <th onClick={() => { handleColumnSorting("recovered") }}>Recovered</th>
        <th onClick={() => { handleColumnSorting("lat") }}>Lat.</th>
        <th onClick={() => { handleColumnSorting("lng") }}>Lng.</th>
      </tr>
    </thead>
    <tbody>
      {countriesList.map((country: any) => {
        return <tr>
          <th>{country.country}</th>
          <th>{country.population}</th>
          <th>{country.deaths}</th>
          <th>{country.recovered}</th>
          <th>{country.lat}</th>
          <th>{country.lng}</th>
        </tr>
      })}
    </tbody>
  </table>;
}

export default App;
