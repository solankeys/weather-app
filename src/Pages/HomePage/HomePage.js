import React, { useEffect, useState } from 'react'
import './HomePage.css'

const HomePage = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('kathmandu')

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9410e3cbe1b159a80c1778c557c294c9`
      const response = await fetch(url)
      const resJson = await response.json()
      setCity(resJson.main)
    }
    fetchApi()
  }, [search])

  return (
    <div className='home-page'>
      <div className='input-data'>
        <input
          type='search'
          placeholder='Enter the name of city'
          className='input-field'
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <div className='info-container'>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <>
            <div className='info'>
              <h2 className='location'>
                <i className='fas fa-street-view'></i>
                {search}
              </h2>
              <h1 className='temp'>
                {' '}
                {city.temp}
                <sup>o</sup>cel
              </h1>
              <h3 className='min-max'>
                Min:{city.temp_min}
                <sup>o</sup>cel | Max: {city.temp_max}
                <sup>o</sup>cel{' '}
              </h3>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage
