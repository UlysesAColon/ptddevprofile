import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import './Navbar.css';
import NavMenu from '../Menu/NavMenu';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
            <NavMenu  />
            </AppBar>
        );
    }
}

export default Navbar;