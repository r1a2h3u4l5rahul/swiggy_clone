import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Search = ({searchData}) => {
   const [searchText, setSearchText] = useState("");

//    function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );

//   return filterData;
// }

  //  const inputBlur= useRef(null)
  
  // const handleInputBlur=()=>{
   
  // }
  
  // useEffect(()=>{
  //   // handleInputBlur()
  //   inputBlur.current.blur()
  // })
 


  return (
    <div className="search-div">
      <div className="search-content">
      <h1>Great restaurants in Bangalore, delivering to you</h1>
        <p>Set exact location to find the right restaurants near you.</p>
       <div className='search-input'>
        <input
       
          type="text"
          placeholder="    Enter Restaurant Name"
          // onFocus={{border:"none"}}
          // onChange={()=>{handleInputBlur()}}
          className="search-input-box"
        
             value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          // onClick={handleInputBlur}
          // onChange={(e) => {}} 
          />
          <button
            className="search-button" onClick={()=>{searchData(searchText)}}>FIND FOOD</button> 
            </div>  
            </div>
            </div>
  )
}

export default Search