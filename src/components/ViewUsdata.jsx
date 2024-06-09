import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewUsdata = () => {
    const [us,changeData]=useState(
      {
        "data":[]
      }
    )
    const fetchData=()=>{
        axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <h1><center><i>VIEW DETAILS</i></center></h1>
                <br></br>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nation Name</th>
                                    <th scope="col">Nation ID</th>
                                    <th scope="col">ID Year</th>
                                    <th scope="col">Population</th>
                                </tr>
                            </thead>
                            <tbody>
                              {us.data.map(
                                (value,index)=>{
                                    return <tr>
                                    <th scope="row">{value.Nation}</th>
                                    <td>{value['ID Nation']}</td>
                                    <td>{value['ID Year']}</td>
                                    <td>{value.Population}</td>
                                </tr>
                                }
                              )}
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUsdata