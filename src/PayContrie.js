import React from 'react'

const PayContrie = ({continents}) => {
  return (
    <div>
       <div className='row'>
        {continents.map((contry) => (
          <div  key={contry.id} className='col-md-3 '>
            <div className='card mt-3 shadow'>
          <img src={contry.flags.png}  alt="..." className='img-fluid h-100 w-100 object-fit-cover'/>
          <div className="card-body bg-white fs-6  text-center align-items-center">
           <p className='card-title text-center'> {contry.name.common}</p>
            <p><b>Capital:</b> {contry.capital}</p>
            <p><b>Region:</b> {contry.region}</p>
            <p><b>Population:</b> {contry.population}</p>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default PayContrie
