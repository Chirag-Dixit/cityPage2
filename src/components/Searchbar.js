import React, { useState } from 'react'

const Searchbar = (prop) => {
  const {setSearch} = prop
  const [searchValue, setSearchValue] = useState("")
  const handleChange = (event)=>{
    setSearchValue(()=>{
      return event.target.value
    })
  }

  const handleSearch = ()=>{
    setSearch((prev)=>{
      return searchValue
    })
  }

  return (
    <div className='searchBar'>
      <input onChange={handleChange} type='text' className='search'/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Searchbar
