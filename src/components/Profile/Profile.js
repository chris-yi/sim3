import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Profile.css'
import {connect} from "react-redux";
import {getCurrentPage} from "../../ducks/users.js"

class Profile extends Component {

    componentDidMount() {
        this.props.getCurrentPage("Profile")
    }

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
                            <div>
                                <input type="text"/>
                                <input type="text"/>
                                <select>
                                    <option value="Male">Male</option>
                                    <option value="Femakle">Female</option>
                                </select>
                                <select>
                                    <option value="Brown">Brown</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Red">Red</option>
                                </select>
                                <select>
                                    <option value="Brown">Brown</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                </select>
                                <select>
                                    <option value="volvo">Hiking</option>
                                    <option value="saab">Video Games</option>
                                    <option value="mercedes">Fishing</option>
                                    <option value="audi">Rafting</option>
                                </select>
                                <select>
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                </select>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <select>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (null, {getCurrentPage})(Profile);