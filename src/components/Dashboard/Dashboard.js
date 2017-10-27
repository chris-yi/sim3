import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
            <Header className='dashboard-header' />
                <div className='dashboard-background' >
                    <div className='dashboard-main' >
                        <div className='dashboard-top' >
                            <div className='dashboard-profile' >
                                <div><img src='https://robohash.org/me' alt='profile pic' className='dashboard-profile-pic' /></div>
                                <div>
                                    <h1>firstname</h1>
                                    <h1>lastname</h1>
                                    <button>Edit Profile</button>
                                </div>
                            </div>
                            <div className='dashboard-lorem' >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem turpis, malesuada a cursus vitae, lobortis et neque. Morbi a ex lectus. Aenean eu ornare orci. Morbi vestibulum tincidunt risus, eget rhoncus odio mattis a.</p>
                            </div>
                        </div>
                        <div className='dashboard-bottom' >

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
