import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

{/* Navigation bar */}

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                        <ul className="navbar-nav flex-grow-1">
                        <Link to='/'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">Home</a>
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">About</a>
                                </li>
                            </Link>
                            <Link to='/apps'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">Apps</a>
                                </li>
                            </Link>
                            <Link to='/websites'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">Websites</a>
                                </li>
                            </Link>
                            <Link to='/contact'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">Contact us</a>
                                </li>
                            </Link> 
                            <Link to='/privacy'>
                                <li class="nav-item">
                                    {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                                    <a className="nav-link text-dark">Privacy</a>
                                </li>
                            </Link>
                        </ul>
                </div>
            </div>
      </nav>
    );
}

export default Nav;