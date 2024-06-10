import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'

const View = () => {
    const [emp, changeData] = useState(
        [
            {
                "ename": "Richi",
                "ecode": "23",
                "salary": "123FI",
                "dept": "Sales",
                "address": "ABC"
            },
            {
                "ename": "Athul",
                "ecode": "32",
                "salary": "567FI",
                "dept": "Sales",
                "address": "HKL"
            }
        ]
    )
    /*const fetchData = () => {
        axios.get("https://anishpdm.github.io/dummy-api-new/empent.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])*/
    return (
        <div>
            <NavBar />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Employee List</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">ECODE</th>
                                            <th scope="col">SALARY</th>
                                            <th scope="col">DEPARTMENT</th>
                                            <th scope="col">ADDRESS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {emp.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.ename}</td>
                                                    <td>{value.ecode}</td>
                                                    <td>{value.salary}</td>
                                                    <td>{value.dept}</td>
                                                    <td>{value.address}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View