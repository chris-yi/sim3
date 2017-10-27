import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Dashboard.css';
import {connect} from 'react-redux';
import {getCurrentPage} from '../../ducks/users.js' 

class Dashboard extends Component {


    componentDidMount(){
        this.props.getCurrentPage('Dashboard')
    }
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
                                    <a href='http://localhost:3000/#/profile' >
                                        <button>Edit Profile</button>
                                    </a>
                                </div>
                            </div>
                            <div className='dashboard-lorem' >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem turpis, malesuada a cursus vitae, lobortis et neque. Morbi a ex lectus. Aenean eu ornare orci. Morbi vestibulum tincidunt risus, eget rhoncus odio mattis a.</p>
                            </div>
                        </div>
                        <div className='dashboard-bottom' >
                            <div>
                                <div>
                                    <h1>
                                        Recommended Friends
                                    </h1>
                                    <div>
                                        <p>Sorted by </p>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {getCurrentPage})(Dashboard);