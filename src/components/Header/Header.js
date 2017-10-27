import React, { Component } from 'react';
import homeImg from '../assets/home.png';
import searchImg from '../assets/search.png';

export default class Header extends Component {
    render() {
    return (
        <div className='header-main' >
            <div >
                <h1>Helo</h1>
                <button>
                    <img src={homeImg} alt='home button' />
                </button>
                <button>
                    <img src={searchImg} alt='search button' />
                </button>
            </div>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <h1>Logout</h1>
            </div>
        </div>
    )
    }
}
