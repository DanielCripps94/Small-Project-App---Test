import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className='headerContainer'>
                <div className='header--box1'>
                <Link to='./projects'><h1>Project List</h1></Link>
                </div>
                <div className='header--box2'>
                <Link to='./userproject'><h1> Project Update</h1></Link>
                </div>
                <div className='header--box3'>
                <Link to='./create'><h1>Start New Project</h1></Link>
                </div>   
            </div>
        )
    }
}