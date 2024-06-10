import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [emp,changeData]=useState(
        {
            "ecode":""
        }
    )
    const eventHandler=(event)=>{
        changeData({...emp,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(emp)
    }
    return (
        <div>
            <NavBar/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Search Employee</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Employee Code :</label>
                                <input type="text" className="form-control" name='ecode' value={emp.ecode} onChange={eventHandler}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search