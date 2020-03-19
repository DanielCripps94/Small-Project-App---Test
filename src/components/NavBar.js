import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                <Link to='./'><h1>Home Page</h1></Link>
                </header>
            </div>
        )
    }
}