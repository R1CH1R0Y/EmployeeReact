import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [emp, changeData] = useState(
        {
            "ename":"",
            "ecode":"",
            "salary":"",
            "dept":"",
            "address":""
        }
    )
    const eventHandler = (event) => {
        changeData({ ...emp, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(emp)
        /*axios.post("https://deptapplogix.onrender.com/addempents", emp).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        )*/
    }
    return (
        <div>
            <NavBar />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Employee</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name :</label>
                                        <input type="text" className="form-control" name='ename' value={emp.ename} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Employee Code :</label>
                                        <input type="text" className="form-control" name='ecode' value={emp.ecode} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Salary :</label>
                                        <input type="text" id="" className="form-control" name='salary' value={emp.salary} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Department :</label>
                                        <select id="" className="form-control" name='dept' value={emp.dept} onChange={eventHandler}>
                                            <option value=""></option>
                                            <option value="Sales">Sales</option>
                                            <option value="Production">Production</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address :</label>
                                        <textarea id="" className="form-control" name='address' value={emp.address} onChange={eventHandler}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add