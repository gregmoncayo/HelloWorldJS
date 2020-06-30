/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../src/assets/img/Original.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <a className="navbar-brand">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul className="navbar-nav flex-grow-1">
              <li class="nav-item">
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a className="nav-link text-dark">About</a>
              </li>
              <li class="nav-item">
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a className="nav-link text-dark">Apps</a>
              </li>
              <li class="nav-item">
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a className="nav-link text-dark">Websites</a>
              </li>
              <li class="nav-item">
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a className="nav-link text-dark">Contact us</a>
              </li>
              <li class="nav-item">
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a className="nav-link text-dark">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
      </header>

      <footer className="border-top footer text-muted">
        <div className="container">
          &copy; 2020
        </div>
      </footer>

    </div>
  );
}

export default App;
