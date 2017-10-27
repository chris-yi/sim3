import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
            <Header className='profile-header' />
                <div className='profile-background' >
                    <div className='profile-main' >
                        <div className='profile-top' >
                            <div className='profile-profile' >
                                <div className="pic-div"><img src='https://robohash.org/me' alt='profile pic' className='profile-profile-pic' /></div>
                                <div className="name">
                                    <h1>firstname</h1>
                                    <h1>lastname</h1>
                                </div>
                            </div>
                            <div className='profile-lorem' >
                                <button>Update</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                        <div className='profile-bottom' >

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
