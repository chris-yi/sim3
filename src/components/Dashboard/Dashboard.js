import React, { Component } from 'react';
import Header from '../Header/Header.js';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
            <Header />
                <div className='dashboard-background' >
                    <div>
                        <div>
                            <div>
                                <img src='https://robohash.org/me' alt='profile pic' />
                                <div>
                                    <h1>firstname</h1>
                                    <h1>lastname</h1>
                                    <button>Edit Profile</button>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem turpis, malesuada a cursus vitae, lobortis et neque. Morbi a ex lectus. Aenean eu ornare orci. Morbi vestibulum tincidunt risus, eget rhoncus odio mattis a.</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
