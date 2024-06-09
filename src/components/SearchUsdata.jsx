import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchUsdata = () => {
  const [data,setData]=useState(
    {
        "name":""
    }
  )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
  }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center><i>SEARCH DATA</i></center></h1>
            <br></br>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Nation Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-primary" onClick={readValue}>Search</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchUsdata