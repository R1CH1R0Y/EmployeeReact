import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i><b>Employee App</b></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Employee</a>
        <a class="nav-link" href="/r">Remove Employee</a>
        <a class="nav-link" href="/s">Search Employee</a>
        <a class="nav-link" href="/v">Employee List</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar