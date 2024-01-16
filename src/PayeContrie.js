import { createContext,useEffect, useState } from 'react'
import React from 'react'
import Header from './Header'
import PayContrie from './PayContrie'

 export const Apicontext = createContext()
const PayeContrie = () => {
     const [continents, setContinents] = useState([])
     const [recherche, setRecherche] = useState([])
     const [selectInput, setSelectInput] = useState('')
     const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
          fetch('https://restcountries.com/v3.1/all')
          .then(res =>  res.json())
          .then((data) => {
            setContinents(data)
            setLoader(false)
          }) 
          .catch(error => console.log("erreur lors de la recuperation des donnees",error))
        }, 1000);
      }, [])
     // recupere les valeurs saisir dans l'inputs 
      const handleChange = (e) => {
        setRecherche(e.target.value);
      }
  
     // recupere les valeurs saisir dans l'inputs 
      const handleSelectChange = (e) => {
        setSelectInput(e.target.value)
        console.log(e.target.value);
      }
      // filter les pays par des lettres saisir 
       const filterContries = continents.filter(contry => contry.name.common.toLowerCase().includes(recherche))
         console.log(filterContries);
  
  // filter par continent et controler les pays qui font partir d'un continent selectionne
        const paysFilter = continents.filter(pays => 
          selectInput === 'tout' && 
         ( pays.region.toLowerCase() === selectInput.toLowerCase()) && (pays.name.common.toLowerCase()
          .includes(selectInput.toLowerCase()) || pays.region.toLowerCase().includes(selectInput.toLowerCase()))
         );
        //  console.log(paysFilter);
        const value = {
            filterContries,
            paysFilter,
            handleSelectChange,
            handleChange,
            loader 
        }
    return (
        <Apicontext.Provider value='value'>
            <Header />
        <div className='container'>  
        <div className='d-flex justify-content-around py-5 px-2'>
          
        <input className='w-25' 
        type='text'  
        onChange={handleChange} 
        placeholder="Recherche un pays..."/>
        
        
        <select onChange={handleSelectChange} >
          <option value='tout'>Filter by region</option>
          <option value='Africa'>Afrique</option>
          <option value='Europe'>Europe</option>
          <option value='Americas'>Amerique</option>
          <option value='Oceania'>Oceanie</option>
          <option value='Asia'>Asie</option>
        </select>
      </div>
      
          {loader && <div className='text-center fs-3'>Recuperation des donnees en attend...</div>}  
          {paysFilter.length > 0 ?  < PayContrie  continents={paysFilter} /> : < PayContrie  continents={filterContries} />}
 
    </div>
        </Apicontext.Provider>
  )
}

export default PayeContrie
