import React, { Component } from 'react';
import homeImg from '../assets/home.png';
import searchImg from '../assets/search.png';
import './header.css';

export default class Header extends Component {
    render() {
    return (
        <div className='header-main' >
            <div className='header-left' >
                <h1>Helo</h1>
                <div>
                    <a>
                        <img src={homeImg} alt='home button' />
                    </a>
                </div>
                <div>
                    <a>
                        <img src={searchImg} alt='search button' />
                    </a>
                </div>
            </div>
            <div className='header-links' >
                <h1>Dashboard</h1>
            </div>
            <div className='header-links' >
                <h1>Logout</h1>
            </div>
        </div>
    )
    }
}
